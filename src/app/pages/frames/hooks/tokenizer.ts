import { datadogLogs } from '@datadog/browser-logs';
import { useConfigContext } from 'app/context/ConfigContext';
import { useToken } from 'app/pages/frames/hooks/useToken';
import { getCheckoutById } from 'app/pages/frames/http/checkoutService';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { CheckoutRequest } from 'common/interface';

export const useTokenizer = () => {
  const { checkoutRequest } = useCheckoutFrameContext();
  const { isRecurrent = false } = checkoutRequest || {};
  const { setIsLoading } = usePaymentFormStore();
  const {
    iframe: {
      callbacks: { onCreateTokenSucceeded },
    },
  } = useConfigContext();
  const { getToken: action } = useToken();

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const { cardExpMonthYear, ...restValues } = values;
      const cardExpValues = cardExpMonthYear.split('/');
      const formCardValues = {
        cardExpMonth: cardExpValues[0],
        cardExpYear: cardExpValues[1],
        ...restValues,
      };

      const token = await action(formCardValues);
      datadogLogs.logger.info('tokenizer_success_token');
      onCreateTokenSucceeded?.(token);
    } catch (e: any) {
      return;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    action: onSubmit,
    isRecurrent,
  };
};

export const useTokenizerGet = () => {
  const doGet = async (checkoutId: string): Promise<CheckoutRequest> => {
    return getCheckoutById(checkoutId);
  };

  return {
    doGet,
  };
};
