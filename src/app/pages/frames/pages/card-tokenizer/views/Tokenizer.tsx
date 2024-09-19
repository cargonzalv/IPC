import { loadable } from '@conekta/cronos/dynamic';
import { useCheckoutFrameStore } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { TokenizerContainerProps } from 'app/pages/frames/container/TokenizerContainer';
import Divider from 'app/pages/frames/components/Header/Divider';
import Header from 'app/pages/frames/components/Header';
import IframeCard from 'app/pages/frames/components/IframeCard';
import Spinner from 'app/components/Spinner/Spinner';
import { Box } from '@chakra-ui/layout';
import useTokenizerViewModel from './tokenizerViewModel';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

const TokenizerContainer = loadable<TokenizerContainerProps>(
  () => import('app/pages/frames/container/TokenizerContainer'),
  { ssr: false },
);

const LoadableView = () => {
  return <TokenizerContent />;
};

const TokenizerContent = () => {
  const { checkoutRequestId } = useTokenizerViewModel();
  const { isGlobalLoading } = usePaymentFormStore();
  const { whiteLabel } = useThemeConfig();
  const { state } = useCheckoutFrameStore();

  if (isGlobalLoading || (!state && !!checkoutRequestId)) {
    return <Spinner />;
  }

  return (
    <>
      {!!state && (
        <IframeCard>
          <Header />
          {!whiteLabel && <Divider />}
          <Box margin={3}>
            <TokenizerContainer />
          </Box>
        </IframeCard>
      )}
    </>
  );
};

export default LoadableView;
