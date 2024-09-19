export const truncateStringLength: number = 110;

export const truncateString = (value: string, length: number = truncateStringLength): string => {
  if (value.length <= length) {
    return value;
  }
  return value.slice(0, length) + '...';
};

export const removeWhiteSpaces = (value: string) => value.replace(/\s+/g, '');

export const capitalizeString = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
