import { awsS3Url } from 'app/util/constants';

import { IAlertIcons } from './interface';

export const ALERT_ICONS: IAlertIcons = {
  error: {
    alt: `error`,
    className: `error`,
    src: `${awsS3Url}/img/icons/fatal-error.svg`,
  },
  success: {
    alt: `success`,
    className: `success`,
    src: `${awsS3Url}/img/icons/check-circle-24px.svg`,
  },
  warning: {
    alt: `warning`,
    className: `warning`,
    src: `${awsS3Url}/img/icons/report-24px.svg`,
  },
};
