export const currencyFormat = (currency: string, value: string | number): string => {
  return currency === 'MXN'
    ? Number(value).toLocaleString('es-MX', {
        currency: 'MXN',
        style: 'currency',
      })
    : Number(value).toLocaleString('en', {
        currency: 'USD',
        currencyDisplay: 'code',
        style: 'currency',
      });
};

export const apiAmountToCurrencyString = (integer: number): string => (integer / 100).toFixed(2);

export const parseAmountTextToInteger = (value: string): number => Math.trunc(Number(value) * 100);
