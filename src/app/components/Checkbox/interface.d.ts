export interface ICheckbox {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange(checked: any): void;
  value?: string;
}
