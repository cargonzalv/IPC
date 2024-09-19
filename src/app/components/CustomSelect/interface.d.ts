export interface IOptionType {
  label: string;
  value: string | number;
  isDisabled: boolean;
}
export interface ISelect {
  input?: any;
  label?: string;
  onChange?: Function;
  options?: IOptionType[];
  defaultValue?: string | number;
}
