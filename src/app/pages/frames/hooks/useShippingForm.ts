import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

export const useShippingForm = () => {
  const { setShippingContact } = usePaymentFormStore();
  const { sendAddShippingInfo } = useAnalytics();

  const onShippingFormSubmit = (values: any) => {
    setShippingContact(values.shippingContact);
    sendAddShippingInfo();
  };

  return {
    onShippingFormSubmit,
  };
};
