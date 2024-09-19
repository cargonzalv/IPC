import { RenderResult, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  cardCvcInputText,
  cardExpirationDateInputText,
  cardNumberInputText,
  cardholderNameInputText,
  emailInputLabel,
  monthlyInstallmentsText,
  nameInputLabel,
} from './constants';

export type GetByText = RenderResult['getByText'];
export type GetByLabelText = RenderResult['getByLabelText'];
export type GetByAltText = RenderResult['getByAltText'];

export type Props = {
  getByText: GetByText;
  getByLabelText: GetByLabelText;
};

type FillInputFunction = (value: string, getByLabelText: GetByLabelText) => Promise<void>;

const fillInput = async (inputLabel: string, value: string, getByLabelText: GetByLabelText) => {
  await act(async () => {
    const input = getByLabelText(inputLabel) as Element;
    await userEvent.type(input, value);
  });
};

const fillCardholderNameInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(cardholderNameInputText, value, getByLabelText);
};

const fillCardNumberInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(cardNumberInputText, value, getByLabelText);
};

const fillCardExpirationDateInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(cardExpirationDateInputText, value, getByLabelText);
};

const fillCardCvcInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(cardCvcInputText, value, getByLabelText);
};

const fillNameInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(nameInputLabel, value, getByLabelText);
};

const fillEmailInput: FillInputFunction = async (value, getByLabelText) => {
  await fillInput(emailInputLabel, value, getByLabelText);
};

const validateCardFields = (getByLabelText: GetByLabelText) => {
  expect(getByLabelText(cardholderNameInputText)).toBeInTheDocument();
  expect(getByLabelText(cardNumberInputText)).toBeInTheDocument();
  expect(getByLabelText(cardExpirationDateInputText)).toBeInTheDocument();
  expect(getByLabelText(cardCvcInputText)).toBeInTheDocument();
};

const validateMonthllyInstallmentsField = (getByText: GetByText) => {
  expect(getByText(monthlyInstallmentsText)).toBeInTheDocument();
};

const validateCustomerDataFields = (getByLabelText: GetByLabelText) => {
  expect(getByLabelText(nameInputLabel)).toBeInTheDocument();
  expect(getByLabelText(emailInputLabel)).toBeInTheDocument();
};

export {
  fillCardholderNameInput,
  fillCardNumberInput,
  fillCardExpirationDateInput,
  fillCardCvcInput,
  fillNameInput,
  fillEmailInput,
  validateCardFields,
  validateCustomerDataFields,
  validateMonthllyInstallmentsField
};
