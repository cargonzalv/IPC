import { IImage } from 'app/util/interface';

type AlertTypes = 'error' | 'success' | 'warning';

export interface IAlert {
  children?: any;
  className?: string;
  text?: string;
  type?: AlertTypes;
}

export type IAlertIcons = {
  [key in AlertTypes]: IImage;
};
