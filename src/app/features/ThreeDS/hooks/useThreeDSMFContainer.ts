import { useEffect } from 'react';
import { useThreeDSStore } from '../state/threeDSContext';
import { Order } from '../model/Order';
import { useTranslation } from 'react-i18next';
import { useConfigContext } from 'app/context/ConfigContext';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useOrder } from '../state/selectors';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

interface ThreeDSMessage {
  payment_status: string;
  error: any;
  order: Order;
  gaEventName?: string;
  gaEventData?: any;
}

export const useThreeDSMFContainer = () => {
  const { setAppError, setSendForm } = usePaymentFormStore();
  const { onErrorPayment, onFinalizePayment } = useConfigContext().iframe.callbacks;
  const { showThreeDSModal, setShowModal, setShowConfirmation, updateOrder } = useThreeDSStore();
  const { t } = useTranslation();
  const order = useOrder();
  const { send3DSDatalayer } = useAnalytics();
  const url = order && order.nextAction ? `${order.nextAction.redirectToUrl.url}?source=embbeded&emit_gtm=true` : '';
  // const url =
  //   order && order.nextAction
  //     ? changeDomain(order.nextAction.redirectToUrl.url, { source: 'embbeded', emit_gtm: 'true' })
  //     : '';

  const handleCloseModal = () => {
    setShowModal(false);
    setSendForm(false);
  };

  const handlePaidOrder = (paidOrder: Order) => {
    updateOrder(paidOrder);
    setShowConfirmation(true);
    if (onFinalizePayment) {
      onFinalizePayment(paidOrder);
    }
  };

  const handleFailedPayment = (error: any) => {
    const errorMessage = error.message ?? t(`iFrame.checkout.cardForm.errorMisc`);
    if (onErrorPayment) {
      onErrorPayment(error);
    }
    setAppError(buildErrorDTO(errorMessage));
  };

  useEffect(() => {
    if (!order.id) return;

    const handler = (eventMessage: MessageEvent<ThreeDSMessage>) => {
      if (eventMessage.origin !== import.meta.env.VITE_THREE_DS_FRONT_URL || typeof eventMessage.data !== 'object')
        return;
      const { payment_status, error: threeDsError, order: capturedOrder, gaEventData, gaEventName } = eventMessage.data;
      if (gaEventData && gaEventName) {
        send3DSDatalayer(gaEventName, gaEventData);
      } else {
        if (payment_status === 'paid') {
          handlePaidOrder(capturedOrder);
        } else {
          handleFailedPayment(threeDsError);
        }
        setShowModal(false);
      }
    };

    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, [order]);

  return {
    showThreeDSModal,
    handleCloseModal,
    url,
  };
};

const buildErrorDTO = (errorMessage: string): any => {
  return {
    response: {
      data: {
        checkoutMessage: errorMessage,
      },
    },
  };
};

// // this functions is used to change the domain of the url to localhost only for development
// const changeDomain = (urlString: string, queryParams: Record<string, string>): string => {
//   const url = new URL(urlString);
//   url.protocol = 'https';
//   url.host = 'localhost:5173';

//   Object.keys(queryParams).forEach((key) => {
//     if (queryParams[key]) {
//       url.searchParams.set(key, queryParams[key]);
//     }
//   });

//   return url.toString();
// };
