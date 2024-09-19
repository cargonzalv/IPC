import { getEntityById, getCheckoutById } from 'app/pages/frames/http/checkoutService';
import { apiAmountToCurrencyString, currencyFormat } from 'app/util/currency';
import { CheckoutRequest, Entity } from 'common/interface';
import { cashLimitAmount, maxBnplAmount, minBnplAmount } from '../components/PaymentMethods/Menu/constants';
import { getConfiguredPaymentMethods } from 'app/components/PaymentMethodsForm/constants';
import { CheckoutGetState } from 'app/util/interface';
import { hasCashInProvider } from '../components/PaymentMethods/Menu/PaymentMethodMenuItem/helpers';

const noPaymentMethodsMessage = 'iFrame.checkout.noPaymentMethodsMessage';

export const useCheckoutGet = () => {
  const doGet = async (checkoutId: string): Promise<CheckoutGetState> => {
    const checkoutRequest: CheckoutRequest = await getCheckoutById(checkoutId);
    const entity: Entity = await getEntityById(checkoutRequest.entityId);
    return parseCheckoutData(checkoutRequest, entity);
  };

  const parseCheckoutData = (checkoutRequest: CheckoutRequest, entity: Entity): CheckoutGetState => {
    const checkoutState = transformCheckoutStateFromDTO(checkoutRequest, entity);

    if (!checkoutState.allowedPaymentMethods || checkoutState.allowedPaymentMethods.length === 0) {
      throw {
        response: { data: { checkoutMessage: noPaymentMethodsMessage } },
      };
    }
    return checkoutState;
  };

  return {
    doGet,
    parseCheckoutData,
  };
};

const transformCheckoutStateFromDTO = (checkoutRequest: CheckoutRequest, entity: Entity): CheckoutGetState => {
  const {
    amount,
    orderTemplate: { currency: orderCurrency = '' },
  } = checkoutRequest;
  const formattedAmount = Number(apiAmountToCurrencyString(amount));
  const amountInCurrencyFormat = currencyFormat(orderCurrency, formattedAmount);
  const isHigherThanCashLimitAmount = formattedAmount > cashLimitAmount;
  const isOutBnplAmountRange = formattedAmount < minBnplAmount || formattedAmount > maxBnplAmount;
  const isDatalogic = hasCashInProvider(checkoutRequest.providers);
  const paymentMethods = getConfiguredPaymentMethods(
    entity.allowedPaymentMethods,
    checkoutRequest.allowedPaymentMethods,
    isHigherThanCashLimitAmount,
    isOutBnplAmountRange,
  );
  const isPespay = checkoutRequest.providers.some((provider) => provider.name === 'pespay');

  return {
    checkoutRequest,
    entity,
    formattedAmount,
    amountInCurrencyFormat,
    isHigherThanCashLimitAmount,
    isOutBnplAmountRange,
    allowedPaymentMethods: paymentMethods,
    isDatalogic,
    isPespay,
  };
};
