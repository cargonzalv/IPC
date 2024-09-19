import { useTranslation } from 'react-i18next';
import { Box } from '@chakra-ui/layout';
import { AlertDescription } from '@chakra-ui/alert';
import { useDisclosure } from '@chakra-ui/hooks';
import { PaymentMethodType } from 'app/util/constants';

import { IHeader } from './interface';
import { PaymentAlert } from './PaymentAlert';
import { HeaderTitleRow } from './HeaderTitleRow';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { FC } from 'react';

const tRoot = 'iFrame.confirmation';

export interface EmailConfirmationProps {
  customerEmail: string;
  isCardPayment: boolean;
  isCashPayment: boolean;
  isDatalogic: boolean;
}

export const EmailConfirmationText: FC<EmailConfirmationProps> = ({
  customerEmail,
  isCardPayment,
  isCashPayment,
  isDatalogic,
}) => {
  const { t } = useTranslation();

  let emailConfirmationText = `${t(`${tRoot}.common.reference_email_confirmation`)} ${customerEmail}`;
  if (isCashPayment && !isDatalogic) {
    emailConfirmationText = t(`${tRoot}.common.reference_confirmation_oxxo`);
  }
  if (isCardPayment) {
    emailConfirmationText = `${t(`${tRoot}.common.email_confirmation`)} ${customerEmail}`;
  }

  return <AlertDescription>{emailConfirmationText}</AlertDescription>;
};

const Header = ({ formatedAmount, customerEmail }: IHeader) => {
  const { t } = useTranslation();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { isDatalogic } = useCheckoutFrameContext();
  const { selectedPaymentMethod } = usePaymentFormStore();
  const isCashPayment = selectedPaymentMethod === PaymentMethodType.Cash;
  const isCardPayment = selectedPaymentMethod === PaymentMethodType.Card;
  const emailConfirmationText = { customerEmail, isCardPayment, isCashPayment, isDatalogic };
  return (
    <Box paddingTop='4' paddingBottom='4' paddingInline='3'>
      {isOpen ? (
        <PaymentAlert emailConfirmationText={emailConfirmationText} onClose={onClose} />
      ) : (
        <HeaderTitleRow
          title={isCardPayment ? t(`${tRoot}.card.share.title`) : t(`${tRoot}.header.reference_title`)}
          formatedAmount={formatedAmount}
        />
      )}
    </Box>
  );
};

export default Header;
