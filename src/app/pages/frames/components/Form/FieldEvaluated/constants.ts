import { InputCheckbox } from 'app/pages/frames/components/Form/InputCheckbox';
import { InputForm } from 'app/pages/frames/components/Form/InputForm';

import { IFormComponentTypes } from './interface';
import { CustomSelect } from 'app/components/CustomSelect/CustomSelect';

export const FORM_COMPONENT_TYPES: IFormComponentTypes = {
  checkbox: InputCheckbox,
  email: InputForm,
  select: CustomSelect,
  tel: InputForm,
  text: InputForm,
  number: InputForm,
  url: InputForm,
};
