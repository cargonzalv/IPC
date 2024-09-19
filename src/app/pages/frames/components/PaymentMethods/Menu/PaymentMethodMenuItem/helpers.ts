import { PaymentMethodType, Provider } from 'app/util/constants';
import { Provider as IProvider } from 'common/interface';

export const hasCashInProvider = (providers: IProvider[]) => {
  if (!Array.isArray(providers)) {
    return false;
  }
  return providers.some(
    (provider: IProvider) =>
      (provider.name === Provider.datalogic || provider.name === Provider.pespay) &&
      provider.paymentMethod === PaymentMethodType.Cash.toLowerCase(),
  );
};
