export const REGEX = {
  clean: /^[^`´~!@#$€%^&*()+=[{\]}|\\'<>?";:]+$/,
  digits: /^[0-9]*$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,10}$/i,
  phone: /^(\D*\d){10,}\D*$/,
  taxPayerRegister:
    /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/i,
  text: /^[a-zA-Z ]*$/,
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
};

const T_ROOT = 'form.errors';

export const composeValidators =
  (...validators: any) =>
  (value: any, allValues: any) =>
    validators.reduce((error: any, validator: any) => error || validator(value, allValues), undefined);

const errMsg = (message: string, t: any, value: any = '') => `${t(`${T_ROOT}.${message}`)}${value}`;

const evaluate = (evaluationResult: boolean, errorMessage: string) => (evaluationResult ? errorMessage : undefined);

// EVALUATION FUNCTIONS ························································
export const equalNumberOfChars = (t: any, length: number) => (value: any) =>
  evaluate(value ? value.length != length : false, errMsg('equalNumberOfChars', t, length));

export const hasMaxChars = (t: any, max: number) => (value: any) =>
  evaluate(value ? value.length > max : false, errMsg('hasMaxChars', t, max));

export const hasMinChars = (t: any, min: number) => (value: any) =>
  evaluate(value ? value.length < min : false, errMsg('hasMinChars', t, min));

export const hasOnlyDigits = (t: any) => (value: any) =>
  evaluate(value ? !REGEX.digits.test(value) : false, errMsg('hasOnlyDigits', t));

export const hasOnlyText = (t: any) => (value: any) =>
  evaluate(value ? !REGEX.text.test(value) : false, errMsg('hasOnlyText', t));

export const isCleanText = (t: any) => (value: any) =>
  evaluate(value ? !REGEX.clean.test(value) : false, errMsg('isCleanText', t));

export const isMaxValue = (t: any, max: number) => (value: any) =>
  evaluate(value ? value > max : false, errMsg('isMaxValue', t, max));

export const isMinValue = (t: any, min: number) => (value: number) =>
  evaluate(value ? value < min : false, errMsg('isMinValue', t, min));

export const isNumber = (t: any) => (value: any) => evaluate(value ? isNaN(value) : false, errMsg('isNumber', t));

export const isRequired = (t: any) => (value: any) => value ? undefined : errMsg('isRequired', t);

export const isValidCard = (t: any) => (value: any) => {
  const CONEKTA = (window as any).Conekta;
  return CONEKTA
    ? evaluate(value ? !(CONEKTA as any).card.validateNumber(value) : false, errMsg('isValidCard', t))
    : null;
};

export const isValidEmail = (t: any) => (value: any) =>
  evaluate(value ? !REGEX.email.test(value) : false, errMsg('isValidEmail', t));

export const isValidPhone = (t: any) => (value: any) =>
  evaluate(value ? !REGEX.phone.test(value) : false, errMsg('isValidPone', t));

export const isMinMonth = (t: any, minMonth: number, currentYear: string) => (value: any, allWalues: any) =>
  evaluate(allWalues.cardExpYear === currentYear ? value < minMonth : false, errMsg('isMinValue', t, minMonth));

export const hasOnlyDigitsExp = (t: any) => (value: any) => {
  if (!value) return true;
  const exp = value.split('/');
  return (
    evaluate(exp[0] ? !REGEX.digits.test(exp[0]) : false, errMsg('hasOnlyDigits', t)) &&
    (exp[1] ? evaluate(exp[1] ? !REGEX.digits.test(exp[1]) : false, errMsg('hasOnlyDigits', t)) : true)
  );
};

export const isMinMonthExp = (t: any, minMonth: number, currentYear: string) => (value: any, allWalues: any) => {
  const exp = value?.split('/');
  const currentYearExp = allWalues.cardExpMonthYear.split('/');
  return evaluate(currentYearExp[1] === currentYear ? exp[0] < minMonth : false, errMsg('isMinValueExp', t, minMonth));
};

export const isMaxValueMonthExp = (t: any, max: number) => (value: any) => {
  const exp = value?.split('/');
  return evaluate(value ? (exp[0] ? exp[0] > max : false) : false, errMsg('isMaxValueExp', t, max));
};

export const isMinValueYearExp = (t: any, min: number) => (value: any) => {
  const exp = value?.split('/');
  return evaluate(value ? (exp[1] ? exp[1] < min : true) : false, errMsg('isMinValueYearExp', t, min));
};
