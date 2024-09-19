export interface IOptionType {
  label: string;
  value: string | number;
  isDisabled?: boolean;
}

export interface ISelect {
  className?: string;
  classNameFieldset?: string;
  disabled?: boolean;
  id?: string;
  input?: any;
  isSearchable?: boolean;
  labelOptions?: any;
  name?: string;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  onInputChange?: any;
  options?: IOptionType[];
  placeholder?: string;
  tooltipHelper: React.ReactNode;
}
