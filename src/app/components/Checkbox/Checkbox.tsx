import classNames from 'classnames';

import { ICheckbox } from './interface';

const Checkbox = ({ checked, className, disabled, id, name, onChange, value, ...rest }: ICheckbox) => (
  <div
    aria-checked="false"
    className={classNames('Checkbox', className, {
      checked,
      disabled,
      unchecked: !checked,
    })}
    role="checkbox"
  >
    <input
      {...{ checked, disabled, id, name, value, ...rest }}
      onChange={!disabled ? (checkedLocal) => onChange(checkedLocal) : () => null}
      type="checkbox"
    />
    <svg version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect className="square" rx="3" ry="3" width="13" x="1" y="1" />
      <path className="tick" d="M6,5 v3 h6" />
    </svg>
  </div>
);

export default Checkbox;
