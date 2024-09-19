import { useTranslation } from 'react-i18next';
import { FormButton } from 'app/pages/frames/container/DirectDebitContainer/FormButton';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { getCurrentButtonText } from '../helpers';
import { useConfigContext } from 'app/context/ConfigContext';

export interface PaymentFormSubmitButtonProps {
  submitting: boolean;
  isLoading: boolean;
  disabled?: boolean;
  isShippingForm?: boolean;
  needsShippingContact?: boolean;
}

export const PaymentFormSubmitButton = ({
  isLoading,
  submitting,
  isShippingForm,
  disabled,
  needsShippingContact = false,
}: PaymentFormSubmitButtonProps) => {
  const {
    iframe: { options },
  } = useConfigContext();
  const { amountInCurrencyFormat } = useCheckoutFrameContext();
  const { t } = useTranslation();
  const text = getCurrentButtonText(
    amountInCurrencyFormat,
    t,
    !!isShippingForm,
    needsShippingContact,
    options.submitButtonText,
  );
  return (
    <FormButton submitting={submitting} loading={isLoading} disabled={disabled}>
      {text}
    </FormButton>
  );
};
