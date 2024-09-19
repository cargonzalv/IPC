export const createColorsNames = (colors: Array<string>) =>
  colors.reduce((object: any, item: string) => {
    object[item] = item;
    return object;
  }, {});
