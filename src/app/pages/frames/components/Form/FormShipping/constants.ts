import { IFormControlsProps } from 'app/pages/frames/components/Form/interface';
import {
  equalNumberOfChars,
  hasMaxChars,
  hasMinChars,
  hasOnlyDigits,
  isCleanText,
  isNumber,
  isRequired,
  isValidPhone,
} from 'app/pages/frames/util/validations';
import { TFunction } from 'i18next';

import { IFormShippingFields, IFormShippingSubmittedForm } from './interface';

export const FORM_CONTROLS_PROPS_SHIPPING = (t: TFunction): IFormControlsProps => {
  const T_ROOT_FORM_LABEL_TEXTS: string = 'iFrame.checkout.shippingForm.labelTexts';
  return {
    shippingContact: {
      address: {
        postalCode: {
          element: 'input',
          tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
          type: 'text',
          validations: [equalNumberOfChars(t, 5), hasOnlyDigits(t), isCleanText(t), isNumber(t), isRequired(t)],
          
        },
        state: {
          element: 'input',
          tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
          type: 'text',
          validations: [hasMaxChars(t, 150), hasMinChars(t, 2), isCleanText(t), isRequired(t)],
          
        },
        city: {
          element: 'input',
          tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
          type: 'text',
          validations: [hasMaxChars(t, 150), hasMinChars(t, 2), isCleanText(t), isRequired(t)],
          
        },
        street1: {
          element: 'input',
          tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
          type: 'text',
          
          validations: [hasMaxChars(t, 150), hasMinChars(t, 2), isCleanText(t), isRequired(t)],
        },
        street2: {
          element: 'input',
          tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
          type: 'text',
          validations: [hasMaxChars(t, 150), hasMinChars(t, 2), isCleanText(t), isRequired(t)],
          
        },
      },
      phone: {
        element: 'input',
        tRootLabelTexts: T_ROOT_FORM_LABEL_TEXTS,
        type: 'tel',
        
        validations: [hasMaxChars(t, 15), hasMinChars(t, 10), isValidPhone(t)],
      },
    },
  };
};

export const FORM_SHIPPING_FIELDS_INITIAL_VALUE: IFormShippingFields = {
  shippingContactCity: '',
  shippingContactPhone: 0,
  shippingContactPostalCode: '',
  shippingContactState: '',
  shippingContactStreet1: '',
  shippingContactStreet2: '',
};

export const SUBMITTED_FORM_INITIAL_STATE: IFormShippingSubmittedForm = {
  values: FORM_SHIPPING_FIELDS_INITIAL_VALUE,
  wasSubmitted: false,
};
