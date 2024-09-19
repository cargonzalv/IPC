import { useOrderWithPaymentSourcePost } from 'app/pages/frames/hooks/order';
import { CustomerFormValues } from '../../util/interface';
import { usePaymentSourceFactory } from '../../factories/paymentSourceFactory';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

export const useDirectDebitContainer = () => {
  const { createOrder } = useOrderWithPaymentSourcePost();
  const { parseFormValuesToPaymentSource } = usePaymentSourceFactory();
  const { selectedPaymentMethod } = usePaymentFormStore();

  const handleDirectDebitFormSubmit = async (values: CustomerFormValues, initialTime: Date) => {
    const paymentRequestPayload = await parseFormValuesToPaymentSource(values, selectedPaymentMethod!);
    await createOrder({ initialTime, paymentRequestData: paymentRequestPayload });
    return paymentRequestPayload;
  };

  return { handleDirectDebitFormSubmit };
};
