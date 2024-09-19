import { postSendEmail, postSendReferenceEmail } from 'app/pages/frames/http/checkoutService';
import { PaymentMethodType } from 'app/util/constants';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { buildReferenceNotificationPayload } from './referenceNotificacionFactory';
import { useBarcodeUrl, useOrderClientName } from 'app/features/ThreeDS/state/selectors';

export const useEmailSendingFactory = (selectedPaymentMethod?: PaymentMethodType) => {
  const barcodeUrl = useBarcodeUrl();
  const clientName = useOrderClientName();
  const { checkoutRequest } = useCheckoutFrameContext();

  const sendProofOfPaymentEmail = (emailAddress: string) => {
    postSendEmail(checkoutRequest.id, emailAddress, clientName);
  };

  const sendReferenceEmail = (emailAddress: string, reference: string) =>
    postSendReferenceEmail(
      buildReferenceNotificationPayload(
        checkoutRequest,
        clientName,
        barcodeUrl,
        emailAddress,
        reference,
        selectedPaymentMethod,
      ),
    );

  return selectedPaymentMethod === PaymentMethodType.Card ? sendProofOfPaymentEmail : sendReferenceEmail;
};
