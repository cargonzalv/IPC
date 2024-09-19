import { CheckoutContainer } from 'app/pages/frames/container/CheckoutContainer';
import { PaymentsOptionsSkeleton } from 'app/pages/frames/components/Skeletons/PaymentOptions';
import { useEmbedded } from '../useEmbedded';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { ErrorBox } from 'app/features/paymentForm/components/errorBox';
import { useCheckoutFrameStore } from 'app/features/paymentForm/state/CheckoutFrameContext';

const Embedded = () => {
  const { isGlobalLoading } = usePaymentFormStore();
  const { errorText } = useEmbedded();
  const { state } = useCheckoutFrameStore();

  if (errorText) {
    return <ErrorBox errorMessage={errorText} />;
  }
  if (isGlobalLoading || !state) {
    return <PaymentsOptionsSkeleton />;
  }

  return <>{!!state && <CheckoutContainer />}</>;
};

export default Embedded;
