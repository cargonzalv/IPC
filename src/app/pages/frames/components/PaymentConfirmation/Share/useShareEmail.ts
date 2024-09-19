import { useCallback } from 'react';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useEmailSendingFactory } from './useEmailSendingFactory';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

export const useShareEmail = () => {
  const { selectedPaymentMethod } = usePaymentFormStore();
  const { sendShare } = useAnalytics();
  const emailSender = useEmailSendingFactory(selectedPaymentMethod);

  const sendReferenceOrProofOfPaymentEmail = useCallback(
    async (emailAddress: string, reference: string) => {
      const sendEmailRequest = await emailSender(emailAddress, reference);

      if (sendEmailRequest?.status === 204) {
        sendShare('email');
      }
    },
    [selectedPaymentMethod],
  );

  return { sendReferenceOrProofOfPaymentEmail };
};
