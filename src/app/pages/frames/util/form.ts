export interface IErrorDetail {
  code: string;
  debug_message: string;
  message: string;
  param: string;
}

export const getErrorMessageForCustomer = (error: any): string => {
  if (!error) {
    return '';
  }
  const ERROR_DETAILS: IErrorDetail[] = error?.details ?? [];
  return ERROR_DETAILS.length > 0
    ? ERROR_DETAILS.map(({ message }: IErrorDetail) => message).join(' ')
    : error?.message;
};
