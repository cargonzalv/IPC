import classNames from 'classnames';

import { ILabelAndText } from './interface';

const LabelAndText = ({
  children,
  className,
  classNameLabel = 'LabelAndText__label',
  classNameText = 'LabelAndText__text',
  label,
  labelNoSemicolon,
  text,
}: ILabelAndText) => (
  <div className={classNames('LabelAndText', className)}>
    {label ? (
      <small className={classNameLabel}>
        {label}
        {labelNoSemicolon ? '' : ':'}
      </small>
    ) : null}
    {text ? <p className={classNameText}>{text}</p> : null}
    {children}
  </div>
);

export default LabelAndText;
