export interface ISizes {
  [key: string]: ISizesItem;
}

export interface ISizesItem {
  height: string;
  viewBox: string;
}

export interface ISpinner {
  wrapper?: string;
}
