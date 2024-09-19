import PaymentMethodsForm from 'app/components/PaymentMethodsForm';
import { useConfigContext } from 'app/context/ConfigContext';
import { useThreeDSStore } from 'app/features/ThreeDS/state/threeDSContext';
import Header from 'app/pages/frames/components/Header';
import Divider from 'app/pages/frames/components/Header/Divider';
import PaymentConfirmationContainer from 'app/pages/frames/container/PaymentConfirmationContainer';
import { useEffect } from 'react';
import IframeCard from '../../components/IframeCard';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useSongbird } from '../../hooks/useSongbird';
import { Helmet } from 'react-helmet';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

export const CheckoutContainer = () => {
  const { showConfirmation } = useThreeDSStore();
  return <>{showConfirmation ? <PaymentConfirmationContainer /> : <CheckoutBody />}</>;
};

const CheckoutBody = () => {
  const { checkoutRequest } = useCheckoutFrameContext();
  const {
    iframe: { isSelfHosted },
  } = useConfigContext();
  const { whiteLabel } = useThemeConfig();
  const { getSongbirdUrl } = useSongbird();
  const songbirdUrl = getSongbirdUrl(checkoutRequest?.liveMode);
  const { sendBeginCheckout } = useAnalytics();

  useEffect(() => {
    sendBeginCheckout();
  }, []);

  const content = (
    <>
      <Helmet>
        <script src={songbirdUrl} />
      </Helmet>
      <Header />
      {!whiteLabel && <Divider />}
      <PaymentMethodsForm />
    </>
  );

  return <>{isSelfHosted ? content : <IframeCard>{content}</IframeCard>}</>;
};
