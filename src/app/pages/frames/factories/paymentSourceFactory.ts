import { PaymentMethodType } from 'app/util/constants';
import { PaymentSourceDTO } from 'common/interface';
import { CustomerFormValues } from '../util/interface';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { IShippingContact } from '../components/Form/FormShipping/interface';
import { parseShippingFormDataForEndpoint } from '../components/Form/FormShipping/helpers';
import { Fingerprint } from '../helpers/fingerprint';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

export const usePaymentSourceFactory = () => {
  const { shippingContact } = usePaymentFormStore();
  const {
    checkoutRequest: { needsShippingContact = false, id: checkoutRequestId },
  } = useCheckoutFrameContext();

  const parseFormValuesToPaymentSource = async (
    values: CustomerFormValues,
    paymentMethod: PaymentMethodType,
    tokenId: string = '',
  ) => {
    const fingerprint = await Fingerprint.getVisitorId();
    const paymentRequestPayload: PaymentSourceDTO = {
      checkoutRequestId,
      paymentMethod,
      tokenId,
      fingerprint,
      ...values,
    };
    if (needsShippingContact && shippingContact) {
      const shippingContactDto: IShippingContact = parseShippingFormDataForEndpoint(shippingContact);
      paymentRequestPayload.shippingContact = { ...shippingContactDto };
      values.shippingContact = { ...shippingContactDto };
    }

    return paymentRequestPayload;
  };

  return { parseFormValuesToPaymentSource };
};
