import { useField } from 'react-final-form';

import { IError } from './interface';

export const Error = ({ hide, name, reason }: IError) => {
  const {
    meta: { error, submitError, touched },
  } = useField(name, {
    subscription: { error: true, submitError: true, touched: true },
  });
  let errorMessage: string = '';

  if (reason) {
    errorMessage = reason;
  } else if (submitError) {
    errorMessage = submitError;
  } else {
    errorMessage = touched && error ? error : ' ';
  }

  return !hide ? <p className="Form__error">{errorMessage}</p> : null;
};
