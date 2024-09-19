import { useConfigContext } from 'app/context/ConfigContext';
import { IframeCallbacks } from 'interface';

export const useRedirectToHostedPaymentUrl = () => {
  const {
    iframe: { callbacks },
  } = useConfigContext();

  const scheduleRedirection = async (urlRedirect: string, secondsToWait: number) => {
    const haveToRedirect = await shouldRedirect(urlRedirect, callbacks);
    if (haveToRedirect) {
      const milliseconds = getMilisecondsToRedirect(secondsToWait);
      setRedirectTimeout(urlRedirect, milliseconds);
    }
  };

  return { scheduleRedirection };
};

const shouldRedirect = (urlRedirect: string, callbacks: IframeCallbacks) => {
  if (!urlRedirect) {
    return false;
  }
  if (!callbacks || !callbacks.preRedirect) return true;

  return callbacks.preRedirect(urlRedirect);
};

const getMilisecondsToRedirect = (secondsToWait: number) => {
  return secondsToWait
    ? secondsToWait * 1000
    : Number(import.meta.env.HOSTED_PAYMENT_URL_MILLISECONDS_TO_REDIRECT || 0);
};

const setRedirectTimeout = (urlRedirect: string, milliseconds: number) => {
  setTimeout(() => redirect(urlRedirect), milliseconds);
};

export const redirect = (url: string) => {
  if (window.top) {
    window.top.location.href = url;
  } else {
    window.location.href = url;
  }
};
