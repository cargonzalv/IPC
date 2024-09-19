import { useState } from 'react';
import { BasicFormCardValues, CustomerFormValues } from '../util/interface';
import { PaymentSourceDTO } from 'common/interface';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

interface UsePaymentMethodFormProps<T> {
  handleFormSubmitImplementation: (values: T, initialTime: Date) => Promise<PaymentSourceDTO>;
}

export const usePaymentMethodForm = <T extends BasicFormCardValues | CustomerFormValues>({
  handleFormSubmitImplementation,
}: UsePaymentMethodFormProps<T>) => {
  const { setAppError, setIsLoading } = usePaymentFormStore();
  const [initialTime] = useState(new Date());

  const handleFormSubmit = async (values: T) => {
    try {
      setIsLoading(true);
      await handleFormSubmitImplementation(values, initialTime);
    } catch (error: any) {
      setAppError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleFormSubmit };
};
