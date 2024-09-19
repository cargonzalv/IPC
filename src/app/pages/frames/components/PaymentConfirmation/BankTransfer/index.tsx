import { Text } from '@chakra-ui/layout';
import { useTranslation } from 'react-i18next';
import PaymentReferenceContent from 'app/pages/frames/components/PaymentConfirmation/PaymentReferenceContent';
import { usePaymentMethod } from 'app/pages/frames/hooks/paymentMethod';
import { PaymentMethodType } from 'app/util/constants';

import RedirectTimer from '../RedirectTimer';
import { ShippingAddresInfo } from '../ShippingAddresInfo';

const tRoot = 'iFrame.confirmation';
const tRootPaymentMethod = `${tRoot}.${PaymentMethodType.BankTransfer.toString().toLowerCase()}`;

const BankTransfer = () => {
  const { t } = useTranslation();
  const title = t(`${tRootPaymentMethod}.title`);
  const { name, reference, urlRedirect, referenceExpiredAt, shippingAddress } = usePaymentMethod();

  return (
    <>
      {/* Amount */}
      <Text fontSize='sm' fontWeight='400' lineHeight='5' color='primary.600' padding='24px 0'>
        {title}
      </Text>
      <PaymentReferenceContent
        referenceExpiredAt={referenceExpiredAt}
        reference={reference}
        name={name}
        paymentMethodType={PaymentMethodType.BankTransfer.toString().toLowerCase()}
      />
      {urlRedirect && <RedirectTimer />}
      {shippingAddress ? (
        <ShippingAddresInfo title={t(`${tRootPaymentMethod}.shipping_address`)} shippingAddress={shippingAddress} />
      ) : null}
    </>
  );
};

export default BankTransfer;
