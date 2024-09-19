import { Fingerprint } from 'app/pages/frames/helpers/fingerprint';
import { useEffect } from 'react';
import { performanceMeasure } from '../../helpers';
import { useTokenizerGet } from 'app/pages/frames/hooks/tokenizer';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { initialViewState, useCheckoutFrameStore } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { datadogLogs } from '@datadog/browser-logs';
import { useConfigContext } from 'app/context/ConfigContext';

const useTokenizerViewModel = () => {
  const { iframe: iframeConfig } = useConfigContext();
  const { doGet } = useTokenizerGet();
  const { setAppError, setGlobalLoading } = usePaymentFormStore();
  const { setState } = useCheckoutFrameStore();
  const {
    config: { checkoutRequestId },
    callbacks: { onGetInfoSuccess },
  } = iframeConfig;

  useEffect(() => {
    const getCheckout = async () => {
      const state = initialViewState;
      setGlobalLoading(true);
      Fingerprint.init();

      try {
        if (checkoutRequestId) {
          const checkoutRequest = await doGet(checkoutRequestId);
          state.checkoutRequest = checkoutRequest;
        }
        onGetInfoSuccess?.(performanceMeasure('INIT-LOAD-TOKENIZER-IFRAME'));
        setState(state);
      } catch (error: any) {
        datadogLogs.logger.error('use_checkout_get_error', { error });
        setAppError(error);
      } finally {
        setGlobalLoading(false);
      }
    };
    getCheckout();
  }, []);

  return { checkoutRequestId };
};

export default useTokenizerViewModel;
