import Checkbox from 'app/components/Checkbox/Checkbox';
import { IInputForm } from 'app/pages/frames/components/Form/interface';
import classNames from 'classnames';

export const InputCheckbox = ({ className, input, labelOptions: { htmlFor, text } }: IInputForm) => (
  <div className={classNames('InputCheckbox', className)}>
    <Checkbox {...input} checked={input.checked} onChange={(e) => input.onChange(e)} />
    <label {...{ htmlFor }}>{text}</label>
  </div>
);
