import { PaymentMethodForEmail, PaymentMethodType, Provider } from 'app/util/constants';
import { capitalizeString } from 'app/util/strings';
import { CheckoutRequest, ReferenceNotificationBody, Provider as IProvider } from 'common/interface';
import { OXXO } from '../../PaymentMethods/Menu/PaymentMethodMenuItem/constants';
import { hasCashInProvider } from '../../PaymentMethods/Menu/PaymentMethodMenuItem/helpers';

export const buildReferenceNotificationPayload = (
  checkoutRequest: CheckoutRequest,
  clientName: string,
  barcodeUrl: string,
  email: string,
  reference: string,
  selectedPaymentMethod?: PaymentMethodType,
): ReferenceNotificationBody => {
  const { name: checkoutRequestName, amount, expiredAt, providers, id: checkoutRequestId } = checkoutRequest;
  const provider = getProvider(providers, selectedPaymentMethod);
  const paymentMethod =
    selectedPaymentMethod === PaymentMethodType.BankTransfer
      ? PaymentMethodForEmail.BankTransfer
      : PaymentMethodForEmail.Cash;
  return {
    checkoutRequestId,
    email,
    notificationType: 'email',
    provider,
    clientName,
    checkoutRequestName,
    amount,
    reference,
    expiredAt,
    paymentMethod,
    barcodeUrl,
  };
};

const getProvider = (providers: IProvider[], selectedPaymentMethod?: PaymentMethodType): string => {
  let provider = OXXO;
  if (selectedPaymentMethod === PaymentMethodType.Cash && hasCashInProvider(providers)) {
    provider = capitalizeString(Provider.datalogic);
  }
  return provider;
};
