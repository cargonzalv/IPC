import classNames from 'classnames';

import { ALERT_ICONS } from './constants';
import { IAlert } from './interface';

const Alert = ({ children, className, type = 'success' }: IAlert) => (
  <div className={classNames('Alert', type, className)} data-testid="alertContainer">
    <img {...ALERT_ICONS[type]} />
    <div className="Alert__content">
      <p>{children}</p>
    </div>
  </div>
);

export default Alert;
