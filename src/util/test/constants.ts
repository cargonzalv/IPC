// titles
export const selectPaymentMethodText = 'iFrame.checkout.selectPaymentMethodValidation';
export const cardMenuOptionText = 'iFrame.checkout.paymentMethod.Card.title';
export const cashMenuOptionText = 'iFrame.checkout.paymentMethod.Cash.title';
export const bankTransferMenuOptionText = 'iFrame.checkout.paymentMethod.BankTransfer.title';
export const oxxoTitle = 'iFrame.checkout.pay_title_oxxo';
export const referenceInfoText = 'iFrame.checkout.referenceMessage';
export const pespayTitle = 'iFrame.checkout.pay_title_pespay';

// card form
export const cardholderNameInputText = 'iFrame.checkout.cardForm.labelTexts.cardholderName';
export const cardNumberInputText = 'iFrame.checkout.cardForm.labelTexts.cardNumber';
export const cardExpirationDateInputText = 'iFrame.checkout.cardForm.labelTexts.cardExpMonthYear';
export const cardCvcInputText = 'iFrame.checkout.cardForm.labelTexts.cardVerificationValue';
export const monthlyInstallmentsText = 'iFrame.checkout.cardForm.labelTexts.monthlyInstallments';

// customer form
export const nameInputLabel = 'iFrame.checkout.customerForm.labelTexts.customerInfo.name';
export const emailInputLabel = 'iFrame.checkout.customerForm.labelTexts.customerInfo.email';

// share
export const shareByEmailText = 'iFrame.confirmation.common.share.email';
export const shareByWhatsappText = 'iFrame.confirmation.common.share.whatsapp';

// wrapper
export const migratedKey = '123';
export const errorKey = '456';

export const createCheckoutHandler = () => ({
  Card: jest.fn(),
  SelfHosted: jest.fn(),
  Integration: jest.fn(),
});

export const digitalFemsaCheckoutComponentsHandler = createCheckoutHandler();
export const conektaCheckoutComponentsHandler = createCheckoutHandler();
