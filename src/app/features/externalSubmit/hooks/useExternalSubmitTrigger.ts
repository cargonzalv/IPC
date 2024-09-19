import { useConfigContext } from 'app/context/ConfigContext';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { CheckoutStatus } from 'common/constants';

export const useExternalSubmitTrigger = () => {
  const {
    iframe: {
      callbacks: { onUpdateSubmitTrigger },
      config: { useExternalSubmit },
    },
  } = useConfigContext();
  const { checkoutRequest } = useCheckoutFrameContext();
  const { status } = checkoutRequest || { status: CheckoutStatus.ISSUED }; // tokenizer does not require a checkoutRequest
  const disableSubmit = status !== CheckoutStatus.ISSUED;

  const updateSubmitTrigger = (handleSubmit: (event?: any) => void) => {
    if (useExternalSubmit && !disableSubmit) {
      onUpdateSubmitTrigger?.((event) => handleSubmit(event));
    }
  };
  return { updateSubmitTrigger };
};
