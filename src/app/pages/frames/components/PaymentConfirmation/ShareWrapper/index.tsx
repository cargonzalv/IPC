import { useConfigContext } from 'app/context/ConfigContext';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useOrderReference } from 'app/features/ThreeDS/state/selectors';
import Share from 'app/pages/frames/components/PaymentConfirmation/Share';
import { useShare } from 'app/pages/frames/hooks/useShare';
import { containerId } from 'app/pages/frames/util/share';

export const ShareConfirmationWrapper = () => {
  const { amountInCurrencyFormat } = useCheckoutFrameContext();
  const reference = useOrderReference();
  const { action, isCopying, showModalEmail, setShowModalEmail } = useShare(containerId);
  const {
    iframe: { preloadedState = null },
  } = useConfigContext();
  const { isChrome } = preloadedState?.device ?? {};

  return (
    <Share
      onClick={action}
      reference={reference}
      amount={amountInCurrencyFormat}
      isCopying={isCopying}
      isChrome={isChrome}
      showModalEmail={showModalEmail}
      setShowModalEmail={setShowModalEmail}
    />
  );
};
