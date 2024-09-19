import { act, waitFor } from '@testing-library/react';
import { ConektaSource } from 'common/constants';
import { IFrame } from 'interface';
import Embedded from 'app/pages/frames/pages/embedded-checkout/views/Embedded';
import { ID_CHECKOUT_WITH_CARD_WITHOUT_3DS_WITH_MSI_DISABLED } from 'util/test/mocks/checkout';
import { renderWithProviders } from 'util/test/test.utils';
import {
  cardCvcInputText,
  cardExpirationDateInputText,
  cardNumberInputText,
  cardholderNameInputText,
  emailInputLabel,
  nameInputLabel,
  shareByEmailText,
  shareByWhatsappText,
} from 'util/test/constants';
import {
  fillCardCvcInput,
  fillCardExpirationDateInput,
  fillCardNumberInput,
  fillCardholderNameInput,
  fillEmailInput,
  fillNameInput,
  validateCardFields,
  validateCustomerDataFields,
} from 'util/test/inputHelper';
import userEvent from '@testing-library/user-event';
import { FORMATTED_VALID_CARD_FOR_TOKENIZATION, VALID_CARD_FOR_TOKENIZATION } from 'util/test/mocks/tokens';

const idTargetIframe = 'componentContainer';
const referenceTitle = 'iFrame.confirmation.card.success_title';
const userName = 'John Doe';
const userEmail = 'john.doe@example.com';
const concept = 'Videojuegos';
const userNameTitle = 'iFrame.confirmation.card.buyer';
const conceptTitle = 'iFrame.confirmation.card.reason_payment';
const expirationDate = '1228';
const formattedExpirationDate = '12/28';
const cvv = '123';

const onGetInfoSuccess = jest.fn();
const componentConfig: IFrame = {
  integration: true,
  isSelfHosted: false,
  isPlayground: false,
  conektaSource: ConektaSource.COMPONENT,
  config: {
    locale: 'es',
    publicKey: 'key_YXQIoiPhGK7DBo45dsEEEGa',
    targetIFrame: idTargetIframe,
    checkoutRequestId: ID_CHECKOUT_WITH_CARD_WITHOUT_3DS_WITH_MSI_DISABLED,
  },
  callbacks: {
    onGetInfoSuccess,
  },
  options: {},
};

const paymentLinkConfig: IFrame = {
  ...componentConfig,
  integration: false,
  conektaSource: ConektaSource.PAYMENT_LINK,
};

describe('Embedded component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should submit the card form and show confirmation page', async () => {
    const { getByLabelText, getByRole, getByText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      validateCardFields(getByLabelText);
      validateCustomerDataFields(getByLabelText);
    });

    await act(async () => {
      await fillNameInput(userName, getByLabelText);
      await fillEmailInput(userEmail, getByLabelText);
      await fillCardholderNameInput(userName, getByLabelText);
      await fillCardNumberInput(VALID_CARD_FOR_TOKENIZATION, getByLabelText);
      await fillCardExpirationDateInput(expirationDate, getByLabelText);
      await fillCardCvcInput(cvv, getByLabelText);
    });

    await waitFor(() => {
      expect(getByLabelText(nameInputLabel)).toHaveValue(userName);
      expect(getByLabelText(emailInputLabel)).toHaveValue(userEmail);

      expect(getByLabelText(cardholderNameInputText)).toHaveValue(userName);
      expect(getByLabelText(cardNumberInputText)).toHaveValue(FORMATTED_VALID_CARD_FOR_TOKENIZATION);

      expect(getByLabelText(cardExpirationDateInputText)).toHaveValue(formattedExpirationDate);
      expect(getByLabelText(cardCvcInputText)).toHaveValue(cvv);
    });

    await act(async () => {
      const submitButton = getByRole('button', { name: /submit/i });
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(getByText(referenceTitle)).toBeInTheDocument();

      expect(getByText(userNameTitle)).toBeInTheDocument();
      expect(getByText(userName)).toBeInTheDocument();

      expect(getByText(conceptTitle)).toBeInTheDocument();
      expect(getByText(concept)).toBeInTheDocument();

      expect(getByText(shareByEmailText)).toBeInTheDocument();
      expect(getByText(shareByWhatsappText)).toBeInTheDocument();
    });
  });
});
