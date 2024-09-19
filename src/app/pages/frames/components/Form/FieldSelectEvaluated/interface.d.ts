import { IOptionType } from 'app/components/CustomSelect/interface';
import Styles from 'react-select';

export interface IFieldSelectEvaluated {
  disabled?: boolean;
  element: string;
  id?: string;
  maxLength?: number;
  name?: string;
  options?: IOptionType[];
  styles?: Partial<Styles>;
  tRootLabelTexts?: string;
  tRootPlaceholders?: string;
  tooltipHelper?: React.ReactNode;
  type?: string;
  validations?: Function[];
  values: any;
  onChange: (value: number) => void;
  defaultValue?: string | number;
}
