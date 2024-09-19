import { useEffect } from 'react';
import { PaymentMethodType } from 'app/util/constants';

import { buildPaymentMethodCardsConfig } from './constants';
import { useAnimation } from '../FadeIn/useAnimation';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { usePaymentMethodForm } from 'app/pages/frames/hooks/usePaymentMethodForm';
import useFormCard from 'app/pages/frames/components/Form/FormCard/useFormCard';
import { BasicFormCardValues, CustomerFormValues } from 'app/pages/frames/util/interface';
import { useDirectDebitContainer } from 'app/pages/frames/container/DirectDebitContainer/useDirectDebitContainer';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useConfigContext } from 'app/context/ConfigContext';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

export const usePaymentMethodsForm = () => {
  const {
    iframe: { isPlayground, container: modalContainerRef },
  } = useConfigContext();
  const {
    checkoutRequest,
    allowedPaymentMethods,
    isHigherThanCashLimitAmount,
    //isOutBnplAmountRange
  } = useCheckoutFrameContext();
  const { needsShippingContact } = checkoutRequest;
  const {
    sendForm,
    formValues,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
    resetFormValues,
    setShowShippingForm,
  } = usePaymentFormStore();
  const isPaymentMethodCash = selectedPaymentMethod === PaymentMethodType.Cash;
  const isBankTransferPaymentMethod = selectedPaymentMethod === PaymentMethodType.BankTransfer;
  const { showAnimation, hideAndShowWithAnimation } = useAnimation();
  const { sendSelectPaymentMethod } = useAnalytics();

  const { handleCardFormSubmit } = useFormCard();
  const { handleDirectDebitFormSubmit } = useDirectDebitContainer();
  const submitCardFormImplementation = usePaymentMethodForm<BasicFormCardValues>({
    handleFormSubmitImplementation: handleCardFormSubmit,
  });

  const submitDirectDebitFormImplementation = usePaymentMethodForm<CustomerFormValues>({
    handleFormSubmitImplementation: handleDirectDebitFormSubmit,
  });

  const selectPaymentMethod = (paymentMethod: PaymentMethodType) => {
    setSelectedPaymentMethod(paymentMethod);
    sendSelectPaymentMethod(paymentMethod);
  };

  const handlePaymentMethodClick = async (paymentMethod: PaymentMethodType) => {
    if (paymentMethod !== selectedPaymentMethod) {
      hideAndShowWithAnimation(() => {
        selectPaymentMethod(paymentMethod);
      });
      resetFormValues();
    }
  };

  const getHandleFormSubmit = () => {
    if (selectedPaymentMethod === PaymentMethodType.Card) {
      return submitCardFormImplementation;
    }
    return submitDirectDebitFormImplementation;
  };

  const configuredPaymentMethods = buildPaymentMethodCardsConfig(
    allowedPaymentMethods,
    isHigherThanCashLimitAmount,
    // isOutBnplAmountRange,
  );

  useEffect(() => {
    if (sendForm && !isPlayground) {
      const { handleFormSubmit } = getHandleFormSubmit();
      handleFormSubmit(formValues as any);
    }
  }, [sendForm]);

  useEffect(() => {
    selectPaymentMethod(allowedPaymentMethods[0]);
    setShowShippingForm(needsShippingContact && import.meta.env.VITE_SHOW_SHIPPING_FORM_FIRST === 'true');
  }, []);

  return {
    configuredPaymentMethods,
    handlePaymentMethodClick,
    isPaymentMethodCash,
    isBankTransferPaymentMethod,
    selectedPaymentMethod,
    showAnimation,
    modalContainerRef,
  };
};
