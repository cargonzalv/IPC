import { Fingerprint } from 'app/pages/frames/helpers/fingerprint';
import { useCheckoutGet } from 'app/pages/frames/hooks/checkout';
import { getErrorMessageForCustomer } from 'app/pages/frames/util/form';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { performanceMeasure } from '../helpers';
import { useCheckoutFrameStore } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { CheckoutGetState } from 'app/util/interface';
import { useConfigContext } from 'app/context/ConfigContext';
import { buildProvidersMock, checkoutPlayground, entityPlayground } from 'app/features/playground/demoData';

export const useEmbedded = () => {
  const { doGet, parseCheckoutData } = useCheckoutGet();
  const { appError, setAppError, setGlobalLoading } = usePaymentFormStore();
  const { iframe: iframeConfig } = useConfigContext();
  const { state, setState } = useCheckoutFrameStore();

  const [errorText, setErrorText] = useState<string | null>(null);
  const { preloadedState } = iframeConfig;
  const { t } = useTranslation();
  const { checkoutRequestId } = iframeConfig.config;
  const { onGetInfoSuccess } = iframeConfig.callbacks;
  const { isPlayground, playgroundConfig } = iframeConfig;

  useEffect(() => {
    if (appError && !state) {
      setErrorText(getErrorMessageForCustomer(appError) ?? t('hostedCheckout.internalError.title'));
    }
  }, [appError, state]);

  useEffect(() => {
    const getCheckout = async () => {
      setGlobalLoading(true);
      Fingerprint.init();
      try {
        const checkoutData: CheckoutGetState = preloadedState
          ? parseCheckoutData(preloadedState.checkoutRequest, preloadedState.entity)
          : await doGet(checkoutRequestId);
        onGetInfoSuccess?.(performanceMeasure('INIT-LOAD-EMBEDDED-IFRAME'));
        setState({ isIntegration: !!iframeConfig.integration, ...iframeConfig.preloadedState, ...checkoutData });
      } catch (error: any) {
        setAppError(error);
      } finally {
        setGlobalLoading(false);
      }
    };
    if (isPlayground) {
      setState({
        isIntegration: !!iframeConfig.integration,
        device: {},
        keys: {
          publicKey: '',
        },
        ...parseCheckoutData(
          { ...checkoutPlayground, providers: buildProvidersMock(playgroundConfig?.provider) },
          entityPlayground,
        ),
      });
      return;
    }
    if (checkoutRequestId) {
      getCheckout();
    }
  }, [checkoutRequestId, isPlayground, playgroundConfig]);

  return {
    errorText,
    checkoutRequestId,
  };
};
