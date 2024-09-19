import { TFormComponentType } from "app/pages/frames/components/Form/interface";

import type { ReactNode } from "react";

export interface IFieldEvaluated {
  disabled?: boolean;
  element: string;
  id?: string;
  maxLength?: number;
  name?: string;
  options?: IOptionType[];
  tRootLabelTexts?: string;
  tRootPlaceholders?: string;
  tooltipHelper?: ReactNode;
  type?: TFormComponentType;
  validations?: Function[];
  onChange: () => void;
  format?: string;
  prefix?: string;
  rightElement?: ReactNode;
  fullWidth?: boolean;
}

export type IFormComponentTypes = {
  [key in TFormComponentType]: any;
};
