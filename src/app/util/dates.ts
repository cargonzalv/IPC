import { format, Locale } from 'date-fns';
import { enUS as en, es } from 'date-fns/locale';

const locales: Record<string, Locale> = {
  es,
  en,
};

export const getDifferenceInSeconds = (dateOne: Date, dateTwo: Date) => {
  const dif = dateOne.getTime() - dateTwo.getTime();
  const secondsFromOneToTwo = dif / 1000;
  return parseInt(String(Math.abs(secondsFromOneToTwo)), 10);
};

export const formatUTCToLocaleDate = (stringDate: string, langCode: string = 'es', finalFormat: string = 'PPP') => {
  const date = new Date(parseInt(stringDate, 10) * 1000);
  return format(date, finalFormat, { locale: locales[langCode] });
};

export const formatLocaleDate = (stringDate: string, langCode: string = 'es', finalFormat: string = 'dd/MM/yy') => {
  const date = new Date(parseInt(stringDate, 10) * 1000);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return format(utcDate, finalFormat, { locale: locales[langCode] });
};

export const formatToUTCDate = (stringDate: string, langCode: string = 'es', finalFormat: string = 'PPP') => {
  const date = new Date(parseInt(stringDate, 10) * 1000);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return format(utcDate, finalFormat, { locale: locales[langCode] });
};

export const convertUnixTimestampToDate = (unixTimestampAsSeconds = 0) => {
  const unixTimestampAsMilliseconds = unixTimestampAsSeconds * 1000;
  return new Date(unixTimestampAsMilliseconds);
};

export const convertUnixTimestampToString = (unixTimestampAsSeconds = 0, langCode = 'es', pattern = 'PPP') => {
  const options = {
    locale: locales[langCode],
  };
  const unixTimestampAsDate = convertUnixTimestampToDate(unixTimestampAsSeconds);
  return format(unixTimestampAsDate, pattern, options);
};
