export const getPropertyByPath = (obj: any, path: string, defaultValue: any) => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result ? result[key] : undefined;
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};
