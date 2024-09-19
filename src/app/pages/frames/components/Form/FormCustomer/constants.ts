import { IFormControlsProps } from 'app/pages/frames/components/Form/interface';
import { hasMaxChars, hasMinChars, isCleanText, isRequired, isValidEmail } from 'app/pages/frames/util/validations';
import { TFunction } from 'i18next';

import { IFormCustomerFieldNames } from './interface';

export const formCustomerFieldNames: IFormCustomerFieldNames = {
  email: 'customerInfo.email',
  name: 'customerInfo.name',
};

export const formControlsPropsCustomer = (t: TFunction): IFormControlsProps => {
  const T_ROOT_FORM_LABEL_TEXTS: string = 'iFrame.checkout.customerForm.labelTexts';
  const T_ROOT_FORM_PLACEHOLDER_TEXTS: string = 'iFrame.checkout.customerForm.placeholderTexts';
  return {
    customerInfo: {
      email: {
        element: 'input',
        tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
        tRootPlaceholders: T_ROOT_FORM_PLACEHOLDER_TEXTS,
        type: 'text',
        validations: [isRequired(t), hasMaxChars(t, 60), isValidEmail(t)],
      },
      name: {
        element: 'input',
        tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
        tRootPlaceholders: T_ROOT_FORM_PLACEHOLDER_TEXTS,
        type: 'text',
        validations: [isRequired(t), isCleanText(t), hasMinChars(t, 2), hasMaxChars(t, 250)],
      },
    },
  };
};
