import { useTranslation } from 'react-i18next';
import { ListItem, OrderedList, Text } from '@chakra-ui/layout';
import PaymentReferenceContent from 'app/pages/frames/components/PaymentConfirmation/PaymentReferenceContent';
import { usePaymentMethod } from 'app/pages/frames/hooks/paymentMethod';
import { PaymentMethodType } from 'app/util/constants';

import RedirectTimer from '../RedirectTimer';
import BoxCashDataLogic, { cashPaymentMethodKey } from './BoxCashDataLogic';
import BoxCashOxxo from './BoxCashOxxo';
import { ShippingAddresInfo } from '../ShippingAddresInfo';
import { Trans } from 'react-i18next';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import BoxCashPespay from './BoxCashPespay';
import BranchesToPayLink from 'app/components/BranchesToPayLink';

const paymentMethod = `iFrame.confirmation.${PaymentMethodType.Cash.toString().toLowerCase()}`;

const Cash = () => {
  const { t } = useTranslation();
  const { name, reference, urlRedirect, referenceExpiredAt, shippingAddress, barcodeUrl, isDatalogic } =
    usePaymentMethod();
  const successTextPrefix = `${paymentMethod}.${isDatalogic ? 'list_items_datalogic' : 'list_items_oxxo'}`;
  const { isPespay } = useCheckoutFrameContext();

  return (
    <>
      {/* Amount */}
      <OrderedList spacing={2} marginBottom={3} color='primary.300' fontSize='sm' fontWeight='700' marginInlineEnd={3}>
        <ListItem>
          <Text fontWeight='400'>
            {t(`${successTextPrefix}.first`)}
            {isDatalogic && (
              <BranchesToPayLink fontSize={undefined}>{t(`${cashPaymentMethodKey}.pay_subtitle_datalogic`)}</BranchesToPayLink>
            )}
          </Text>
        </ListItem>
        <ListItem>
          <Text fontWeight='400'>
            <Trans i18nKey={t(`${successTextPrefix}.second`)} />
          </Text>
        </ListItem>
        <ListItem>
          <Text fontWeight='400'>{t(`${successTextPrefix}.three`)}</Text>
        </ListItem>
      </OrderedList>
      <PaymentReferenceContent
        referenceExpiredAt={referenceExpiredAt}
        reference={reference}
        name={name}
        paymentMethodType={PaymentMethodType.Cash.toString().toLowerCase()}
        barcodeUrl={barcodeUrl}
      />
      {isPespay ? (
        <BoxCashPespay /> 
      ) : isDatalogic ? (
        <BoxCashDataLogic />
      ) : (
        <BoxCashOxxo />
      )}
      {/* Payment Reference */}
      {urlRedirect && <RedirectTimer />}
      {/* Address */}
      {shippingAddress && (
        <ShippingAddresInfo title={t(`${paymentMethod}.shipping_address`)} shippingAddress={shippingAddress} />
      )}
    </>
  );
};

export default Cash;
