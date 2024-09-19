import Header from 'app/pages/frames/components/PaymentConfirmation/Header';
import { createElement, useEffect } from 'react';
import { ShareConfirmationWrapper } from '../../components/PaymentConfirmation/ShareWrapper';
import { chakra } from '@chakra-ui/system';
import { Box } from '@chakra-ui/layout';
import { useConfigContext } from 'app/context/ConfigContext';
import IframeCard from '../../components/IframeCard';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { containerId } from '../../util/share';
import { paymentConfirmationViews } from './constants';
import { useOrder, useOrderClientEmail } from 'app/features/ThreeDS/state/selectors';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

const PaymentConfirmationContainer = () => {
  const order = useOrder();
  const { sendPurchase } = useAnalytics();
  const { selectedPaymentMethod } = usePaymentFormStore();
  const { isIntegration, amountInCurrencyFormat } = useCheckoutFrameContext();
  const {
    iframe: {
      isSelfHosted,
      preloadedState = null,
      callbacks: { onFinalizePayment },
    },
  } = useConfigContext();
  const { isDesktop } = preloadedState?.device ?? {};
  const customerEmail = useOrderClientEmail();

  const confirmationContentProps = {
    isIntegration,
    isSelfHosted,
    isDesktop,
  };
  useEffect(() => {
    if (order.id) {
      onFinalizePayment && onFinalizePayment(order);
      sendPurchase(order.requireChallenge, order.threeDSResult);
      // Uncomment when BNPL is ready
      // const {
      //   charge: {
      //     paymentMethod: { providerUrl = null },
      //   },
      // } = order;
      // if (providerUrl && selectedPaymentMethod === PaymentMethodType.Bnpl) {
      //   redirect(providerUrl);
      // }
    }
  }, [order]);

  const container = (
    <>
      {selectedPaymentMethod && (
        <Box marginInline={3}>
          <Header formatedAmount={amountInCurrencyFormat} customerEmail={customerEmail} />
          <chakra.hr marginInline={3} marginBottom='8px' color='disabled.200' />
          <Box marginInline={3} id={containerId}>
            {createElement(paymentConfirmationViews[selectedPaymentMethod], confirmationContentProps)}
            {/* Share icons */}
            <ShareConfirmationWrapper />
          </Box>
        </Box>
      )}
    </>
  );

  return <>{isSelfHosted ? container : <IframeCard>{container}</IframeCard>}</>;
};

export default PaymentConfirmationContainer;
