import { useTranslation } from '@conekta/cronos/i18n';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { parseShippingContactToString } from 'app/pages/frames/components/PaymentConfirmation/helpers';
import { convertUnixTimestampToString } from 'app/util/dates';
import { useOrder } from 'app/features/ThreeDS/state/selectors';

export const usePaymentMethod = () => {
  const { shippingContact } = usePaymentFormStore();
  const { checkoutRequest, isDatalogic } = useCheckoutFrameContext();
  const { i18n } = useTranslation();
  const { name } = checkoutRequest;
  const { reference, urlRedirect, charge } = useOrder();
  const {
    paymentMethod: { expiresAt, barcodeUrl },
  } = charge;

  const referenceExpiredAt = convertUnixTimestampToString(expiresAt, i18n.language, 'dd/MM/yyyy');
  const shippingAddress = shippingContact ? parseShippingContactToString(shippingContact) : '';

  return {
    name,
    reference,
    urlRedirect,
    referenceExpiredAt,
    shippingAddress,
    isDatalogic,
    barcodeUrl,
  };
};
