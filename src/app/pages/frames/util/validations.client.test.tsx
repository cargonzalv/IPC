import '@testing-library/jest-dom';
import {
  equalNumberOfChars,
  hasMaxChars,
  hasMinChars,
  hasOnlyDigits,
  hasOnlyText,
  isCleanText,
  isMaxValue,
  isMinValue,
  isNumber,
  isRequired,
  isValidCard,
  isValidEmail,
  isValidPhone,
  isMinMonth,
  hasOnlyDigitsExp,
  isMinMonthExp,
  isMaxValueMonthExp,
  isMinValueYearExp,
} from 'app/pages/frames/util/validations';

describe('Validation Functions', () => {
  const tMock = (key: string) => key;

  it('equalNumberOfChars', () => {
    const validate = equalNumberOfChars(tMock, 5);
    expect(validate('12345')).toBeUndefined();
    expect(validate('123456')).toBe(`form.errors.equalNumberOfChars5`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('hasMaxChars', () => {
    const validate = hasMaxChars(tMock, 5);
    expect(validate('123')).toBeUndefined();
    expect(validate('123456')).toBe(`form.errors.hasMaxChars5`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('hasMinChars', () => {
    const validate = hasMinChars(tMock, 5);
    expect(validate('123456')).toBeUndefined();
    expect(validate('123')).toBe(`form.errors.hasMinChars5`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('hasOnlyDigits', () => {
    const validate = hasOnlyDigits(tMock);
    expect(validate('123')).toBeUndefined();
    expect(validate('abc123')).toBe(`form.errors.hasOnlyDigits`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('hasOnlyText', () => {
    const validate = hasOnlyText(tMock);
    expect(validate('abc')).toBeUndefined();
    expect(validate('abc123')).toBe(`form.errors.hasOnlyText`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('isCleanText', () => {
    const validate = isCleanText(tMock);
    expect(validate('abc')).toBeUndefined();
    expect(validate('abc!')).toBe(`form.errors.isCleanText`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('isMaxValue', () => {
    const validate = isMaxValue(tMock, 10);
    expect(validate(5)).toBeUndefined();
    expect(validate(11)).toBe(`form.errors.isMaxValue10`);
    expect(validate('')).toBeUndefined(); // Cobertura para valor no numérico
  });

  it('isMinValue', () => {
    const validate = isMinValue(tMock, 5);
    expect(validate(6)).toBeUndefined();
    expect(validate(4)).toBe(`form.errors.isMinValue5`);
  });

  it('isNumber', () => {
    const validate = isNumber(tMock);
    expect(validate(123)).toBeUndefined();
    expect(validate('abc')).toBe(`form.errors.isNumber`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('isRequired', () => {
    const validate = isRequired(tMock);
    expect(validate('value')).toBeUndefined();
    expect(validate('')).toBe(`form.errors.isRequired`);
  });

  it('isValidEmail', () => {
    const validate = isValidEmail(tMock);
    expect(validate('test@example.com')).toBeUndefined();
    expect(validate('invalid-email')).toBe(`form.errors.isValidEmail`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('isValidPhone', () => {
    const validate = isValidPhone(tMock);
    expect(validate('1234567890')).toBeUndefined();
    expect(validate('invalid-phone')).toBe(`form.errors.isValidPone`);
    expect(validate('')).toBeUndefined(); // Cobertura para cadena vacía
  });

  it('isMinMonth', () => {
    const validate = isMinMonth(tMock, 5, '2023');
    expect(validate(6, { cardExpYear: '2023' })).toBeUndefined();
    expect(validate(4, { cardExpYear: '2023' })).toBe(`form.errors.isMinValue5`);
  });

  it('isMinMonthExp', () => {
    const validate = isMinMonthExp(tMock, 5, '2023');
    expect(validate('6/2023', { cardExpMonthYear: '6/2023' })).toBeUndefined();
    expect(validate('4/2023', { cardExpMonthYear: '6/2023' })).toBe(`form.errors.isMinValueExp5`);
  });

  it('isMaxValueMonthExp', () => {
    const validate = isMaxValueMonthExp(tMock, 10);
    expect(validate('09/2023')).toBeUndefined();
    expect(validate('12/2023')).toBe(`form.errors.isMaxValueExp10`);
  });

  it('isMinValueYearExp', () => {
    const validate = isMinValueYearExp(tMock, 2023);
    expect(validate('11/2022')).toBe(`form.errors.isMinValueYearExp2023`);
    expect(validate('11/2024')).toBeUndefined();
  });
});
