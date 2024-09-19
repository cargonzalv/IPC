import { IOptionType } from 'app/components/Select/interface';
import {
  IConektaTokenData,
  IFormCardData,
  IFormCardDataValues,
  IFormCardFieldNames,
} from 'app/pages/frames/components/Form/FormCard/interfaces';
import { IFormControlsProps } from 'app/pages/frames/components/Form/interface';
import {
  hasMaxChars,
  hasMinChars,
  hasOnlyDigits,
  hasOnlyText,
  isCleanText,
  isNumber,
  isRequired,
  isValidCard,
  hasOnlyDigitsExp,
  isMinMonthExp,
  isMaxValueMonthExp,
  isMinValueYearExp,
} from 'app/pages/frames/util/validations';
import { monthlyInstallmentsInitialValue } from 'app/util/constants';
import { removeWhiteSpaces } from 'app/util/strings';
import { TFunction } from 'i18next';

export const formCardDataInitialValue: IFormCardData = {
  cvc: '',
  exp_month_year: '',
  exp_month: '',
  exp_year: '',
  name: '',
  number: '',
};

export const formCardDataValuesTokenization: Partial<IFormCardDataValues> = {
  monthlyInstallments: 1,
  savePaymentSource: false,
};

export const conektaTokenDataInitialValue: IConektaTokenData = {
  card: { ...formCardDataInitialValue },
  token_id: '',
};

export const formCardFieldNames: IFormCardFieldNames = {
  cardExpMonthYear: 'cardExpMonthYear',
  cardNumber: 'cardNumber',
  cardVerificationValue: 'cardVerificationValue',
  cardholderName: 'cardholderName',
  monthlyInstallments: 'monthlyInstallments',
  savePaymentSource: 'savePaymentSource',
};

export const formControlsPropsCard = (t: TFunction): IFormControlsProps => {
  const tRootFormLabelTexts: string = 'iFrame.checkout.cardForm.labelTexts';
  const tRootFormLabelPlaceholders: string = 'iFrame.checkout.cardForm.labelPlaceholders';
  const currentDate = new Date();
  const year: string = currentDate.getFullYear().toString().substr(-2);
  const month: number = currentDate.getMonth() + 1;

  return {
    cardholderName: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'text',
      validations: [hasMaxChars(t, 150), hasOnlyText(t), isCleanText(t), isRequired(t)],
    },
    cardNumber: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'text',
      parse: removeWhiteSpaces,
      validations: [
        hasMaxChars(t, 16),
        hasMinChars(t, 15),
        hasOnlyDigits(t),
        isCleanText(t),
        isNumber(t),
        isRequired(t),
        isValidCard(t),
      ],
      format: '#### #### #### ####',
    },
    cardVerificationValue: {
      element: 'input',
      maxLength: 4,
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'number',
      inputMode: 'numeric',
      validations: [hasMaxChars(t, 4), hasMinChars(t, 3), hasOnlyDigits(t), isCleanText(t), isNumber(t), isRequired(t)],
    },
    cardExpMonthYear: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'text',
      validations: [
        isRequired(t),
        isMinMonthExp(t, month, year),
        isMaxValueMonthExp(t, 12),
        isMinValueYearExp(t, parseInt(year)),
        hasOnlyDigitsExp(t),
      ],
      format: '##/##',
    },
    monthlyInstallments: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      type: 'select',
      validations: [isRequired(t)],
    },
    savePaymentSource: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      type: 'checkbox',
    },
  };
};

export const formControlsPropsAmex = (t: TFunction): IFormControlsProps => {
  const tRootFormLabelTexts: string = 'iFrame.checkout.cardForm.labelTexts';
  const tRootFormLabelPlaceholders: string = 'iFrame.checkout.cardForm.labelPlaceholders';

  return {
    cardNumber: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'text',
      validations: [
        hasMaxChars(t, 15),
        hasMinChars(t, 15),
        hasOnlyDigits(t),
        isCleanText(t),
        isNumber(t),
        isRequired(t),
        isValidCard(t),
      ],
      format: '#### ###### #####',
    },
    cardVerificationValue: {
      element: 'input',
      maxLength: 4,
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'number',
      inputMode: 'numeric',
      validations: [hasMaxChars(t, 4), hasMinChars(t, 4), hasOnlyDigits(t), isCleanText(t), isNumber(t), isRequired(t)],
    },
  };
};

export const formControlsPropsVisaMc = (t: TFunction): IFormControlsProps => {
  const tRootFormLabelTexts: string = 'iFrame.checkout.cardForm.labelTexts';
  const tRootFormLabelPlaceholders: string = 'iFrame.checkout.cardForm.labelPlaceholders';

  return {
    cardNumber: {
      element: 'input',
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'text',
      validations: [
        hasMaxChars(t, 16),
        hasMinChars(t, 16),
        hasOnlyDigits(t),
        isCleanText(t),
        isNumber(t),
        isRequired(t),
        isValidCard(t),
      ],
      format: '#### #### #### ####',
    },
    cardVerificationValue: {
      element: 'input',
      maxLength: 3,
      tRootLabelTexts: tRootFormLabelTexts,
      tRootPlaceholders: tRootFormLabelPlaceholders,
      type: 'number',
      inputMode: 'numeric',
      validations: [hasMaxChars(t, 3), hasMinChars(t, 3), hasOnlyDigits(t), isCleanText(t), isNumber(t), isRequired(t)],
    },
  };
};

export const selectCardProps = (validator: string) => {
  if (validator.indexOf('Amex') === 0 && validator.length > 0) {
    return formControlsPropsVisaMc;
  } else if (validator.indexOf('VisaMasterCard') === 0 && validator.length > 0) {
    return formControlsPropsAmex;
  } else {
    return formControlsPropsCard;
  }
};

export const tRootCardForm: string = 'iFrame.checkout.cardForm';

export const monthlyInstallmentsInitialState = (t: TFunction): IOptionType[] => [
  {
    value: -1,
    label: t(`${tRootCardForm}.labelPlaceholders.monthlyInstallments`),
    isDisabled: true,
  },
  {
    value: monthlyInstallmentsInitialValue,
    label: t(`${tRootCardForm}.monthsWithoutInterest.defaultOptionLabel`),
  },
];

export const DEFAULT_MSI_SELECTED_OPTION: number = 1;

