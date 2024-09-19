import { shouldShowShippingFormFirst } from 'app/features/paymentForm/state/paymentFormState';
import { truncateButtonStringLength } from 'app/util/constants';
import { truncateString } from 'app/util/strings';
import { TFunction } from 'i18next';

const determineButtonText = (
  isShippingForm: boolean,
  showShippingFormFirst: boolean,
  needsShippingContact: boolean,
  payText: string,
  continueText: string,
): string => {
  if (!needsShippingContact) {
    return payText;
  }

  return getButtonText(isShippingForm, showShippingFormFirst, payText, continueText);
};

const getButtonText = (
  isShippingForm: boolean,
  showShippingFormFirst: boolean,
  payText: string,
  continueText: string,
): string => {
  if (isShippingForm) {
    return showShippingFormFirst ? continueText : payText;
  } else {
    return showShippingFormFirst ? payText : continueText;
  }
};

export const getCurrentButtonText = (
  formatedAmount: string,
  t: TFunction,
  isShippingForm: boolean,
  needsShippingContact: boolean,
  submitButtonTextInConfig?: string,
) => {
  const buttonTextConfiguredByMerchant = submitButtonTextInConfig
    ? truncateString(submitButtonTextInConfig, truncateButtonStringLength)
    : '';
  const payText = buttonTextConfiguredByMerchant
    ? buttonTextConfiguredByMerchant
    : `${t(`iFrame.checkout.buttonSubmitPayCard`)} ${formatedAmount}`;
  const continueText = t(`iFrame.checkout.buttonSubmitContinue`);

  return determineButtonText(isShippingForm, shouldShowShippingFormFirst, needsShippingContact, payText, continueText);
};
