import { useTranslation } from 'react-i18next';
import { Box } from '@chakra-ui/layout';
import { createElement, memo } from 'react';
import EmphasisText from '../EmphasisText';
import HorizontalSlider from '../HorizontalSlider';
import PaymentMethodCard from '../PaymentMethodCard';
import { createPaymentMethodObjects } from './constants';
import PaymentChainsDatalogic from './PaymentChainsDatalogic';
import PaymentChainsOxxo from './PaymentChainsOxxo';
import PaymentChainsPespay from './PaymentChainsPespay';
import FadeIn from '../FadeIn/fadeIn';
import { usePaymentMethodsForm } from './usePaymentMethodsForm';
import { ANIMATION_DURATION } from '../FadeIn/constants';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { FormShipping, PaymentMethodContent } from 'app/pages/frames/components';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { ThreeDSMFContainer } from 'app/features/ThreeDS/components/ThreeDSMFContainer';
import BankTransferPaymentInfo from './BankTransferPaymentInfo';
import { PaymentMethodType } from 'app/util/constants';

const CashInfo: React.FC<{ isDatalogic: boolean, isPespay: boolean}> = ({ isDatalogic, isPespay }) =>
  isPespay ? <PaymentChainsPespay /> :
  isDatalogic ? <PaymentChainsDatalogic /> : <PaymentChainsOxxo />;

const PaymentMethodsForm = () => {
  const T_ROOT = 'iFrame.checkout';
  const { t } = useTranslation();
  const {
    configuredPaymentMethods,
    handlePaymentMethodClick,
    isPaymentMethodCash,
    isBankTransferPaymentMethod,
    selectedPaymentMethod,
    showAnimation,
    modalContainerRef,
  } = usePaymentMethodsForm();
  const { isDatalogic, isPespay } = useCheckoutFrameContext();
  const { getPropsCardsPaymentsMethods, whiteLabel } = useThemeConfig();
  const { PAYMENT_METHOD_ICONS, PAYMENT_METHOD_CONTAINERS } = createPaymentMethodObjects(isDatalogic);
  const { showShippingForm } = usePaymentFormStore();
  const hasMultiplePaymentMethods = configuredPaymentMethods.length > 1;
  const title = t(
    `${T_ROOT}.${hasMultiplePaymentMethods ? 'selectPaymentMethodValidation' : 'selectPaymentMethodValidationOnly'}`,
  );

  return (
    <Box marginInline='3' marginTop={whiteLabel ? '8' : ''}>
      {hasMultiplePaymentMethods && (
        <>
          <EmphasisText>{title}</EmphasisText>
          <HorizontalSlider paddingBottom='5'>
            {configuredPaymentMethods.map((paymentMethodConfig) => {
              const isActive = selectedPaymentMethod === paymentMethodConfig.name;
              const { iconsProps } = getPropsCardsPaymentsMethods(isActive);
              const isCash = paymentMethodConfig.name === PaymentMethodType.Cash;
              let title = `${T_ROOT}.paymentMethod.${paymentMethodConfig.name}.title`;

              if (isCash && isDatalogic) {
                title = `${T_ROOT}.paymentMethod.conektaCash.title`;
              }
              return (
                <Box marginRight='2' minW='38' key={`paymentMethod-${paymentMethodConfig.name}`}>
                  <PaymentMethodCard
                    text={title}
                    isActive={isActive}
                    isDisabled={paymentMethodConfig.isDisabled}
                    onClick={() => handlePaymentMethodClick(paymentMethodConfig.name)}
                    data-testid={`payment-method-${paymentMethodConfig.name}`}
                  >
                    {createElement(PAYMENT_METHOD_ICONS[paymentMethodConfig.name], iconsProps)}
                  </PaymentMethodCard>
                </Box>
              );
            })}
          </HorizontalSlider>
        </>
      )}

      {!hasMultiplePaymentMethods && isBankTransferPaymentMethod && (
        <Box paddingTop='3' paddingBottom={5}>
          <BankTransferPaymentInfo />
        </Box>
      )}
      {isPaymentMethodCash && (
        <Box paddingTop='3' paddingBottom={5}>
          <CashInfo isDatalogic={isDatalogic} isPespay={isPespay} /> 
        </Box>
      )}
      <PaymentMethodContent>
        {showShippingForm ? (
          <FormShipping />
        ) : (
          <FadeIn show={showAnimation} duration={ANIMATION_DURATION}>
            {selectedPaymentMethod && createElement(PAYMENT_METHOD_CONTAINERS[selectedPaymentMethod])}
          </FadeIn>
        )}
        <ThreeDSMFContainer modalContainerRef={modalContainerRef} />
      </PaymentMethodContent>
    </Box>
  );
};

export default memo(PaymentMethodsForm);
