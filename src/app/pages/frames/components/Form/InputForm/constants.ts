import { InputType } from 'app/util/theme';

import { IInputAlign } from './interface';

export const INPUT_TEXT_ALIGN: IInputAlign = {
  center: 'align-center',
  left: 'align-left',
  right: 'align-right',
};

type IBorderPropByType = {
  [key in InputType]: string;
};

export const BORDER_PROP_BY_TYPE: IBorderPropByType = {
  basic: 'border',
  line: 'border-bottom',
  rounded: 'border',
};
