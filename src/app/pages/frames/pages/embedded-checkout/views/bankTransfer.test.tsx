import { act, waitFor } from '@testing-library/react';
import { ConektaSource } from 'common/constants';
import { IFrame } from 'interface';
import Embedded from 'app/pages/frames/pages/embedded-checkout/views/Embedded';
import { ID_CHECKOUT_ONLY_WITH_BANK_TRANSFER } from 'util/test/mocks/checkout';
import { renderWithProviders } from 'util/test/test.utils';
import {
  referenceInfoText,
  cardCvcInputText,
  cardExpirationDateInputText,
  cardNumberInputText,
  cardholderNameInputText,
  monthlyInstallmentsText,
  cashMenuOptionText,
  cardMenuOptionText,
  bankTransferMenuOptionText,
  emailInputLabel,
  nameInputLabel,
  shareByEmailText,
  shareByWhatsappText,
} from 'util/test/constants';
import { fillEmailInput, fillNameInput } from 'util/test/inputHelper';
import userEvent from '@testing-library/user-event';

const idTargetIframe = 'componentContainer';
const referenceTitle = 'iFrame.confirmation.banktransfer.payment_reference';
const reference = '646180111802041249';
const userName = 'John Doe';
const userEmail = 'john.doe@example.com';
const expirationDate = '23/07/2024';
const concept = 'Videojuegos';
const copyReferenceButtonText = 'iFrame.confirmation.banktransfer.copy_reference';
const expiredAtTitle = 'iFrame.confirmation.banktransfer.payment_expirate_at';
const conceptTitle = 'iFrame.confirmation.banktransfer.reason_payment';

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
    checkoutRequestId: ID_CHECKOUT_ONLY_WITH_BANK_TRANSFER,
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

  it('should renders embedded component only with bank transfer option', async () => {
    const { getByText, queryByLabelText, queryByText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      componentConfig,
    );

    await waitFor(() => {
      expect(getByText(referenceInfoText)).toBeInTheDocument();
      expect(queryByText(bankTransferMenuOptionText)).not.toBeInTheDocument();

      // when the component is used as a integration we don't show customer fields
      expect(queryByLabelText(nameInputLabel)).not.toBeInTheDocument();
      expect(queryByLabelText(emailInputLabel)).not.toBeInTheDocument();

      expect(queryByText(cardMenuOptionText)).not.toBeInTheDocument();
      expect(queryByText(cashMenuOptionText)).not.toBeInTheDocument();

      expect(queryByLabelText(cardholderNameInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardNumberInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardExpirationDateInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardCvcInputText)).not.toBeInTheDocument();
      expect(queryByText(monthlyInstallmentsText)).not.toBeInTheDocument();
    });
  });

  it('should renders component in mode payment link only with bank transfer option', async () => {
    const { getByText, queryByLabelText, getByLabelText, queryByText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      expect(getByText(referenceInfoText)).toBeInTheDocument();
      expect(queryByText(bankTransferMenuOptionText)).not.toBeInTheDocument();

      expect(getByLabelText(nameInputLabel)).toBeInTheDocument();
      expect(getByLabelText(emailInputLabel)).toBeInTheDocument();

      expect(queryByText(cardMenuOptionText)).not.toBeInTheDocument();
      expect(queryByText(cashMenuOptionText)).not.toBeInTheDocument();

      expect(queryByLabelText(cardholderNameInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardNumberInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardExpirationDateInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardCvcInputText)).not.toBeInTheDocument();
      expect(queryByText(monthlyInstallmentsText)).not.toBeInTheDocument();
    });
  });

  it('should submit the bank transfer form and show confirmation page', async () => {
    const { getByLabelText, getByRole, getByText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      expect(getByLabelText(nameInputLabel)).toBeInTheDocument();
      expect(getByLabelText(emailInputLabel)).toBeInTheDocument();
    });

    await act(async () => {
      await fillNameInput(userName, getByLabelText);
      await fillEmailInput(userEmail, getByLabelText);
    });

    await waitFor(() => {
      expect(getByLabelText(nameInputLabel)).toHaveValue(userName);
      expect(getByLabelText(emailInputLabel)).toHaveValue(userEmail);
    });

    await act(async () => {
      const submitButton = getByRole('button', { name: /submit/i });
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(getByText(referenceTitle)).toBeInTheDocument();
      expect(getByText(reference)).toBeInTheDocument();
      expect(getByText(copyReferenceButtonText)).toBeInTheDocument();

      expect(getByText(expiredAtTitle)).toBeInTheDocument();
      expect(getByText(expirationDate)).toBeInTheDocument();

      expect(getByText(conceptTitle)).toBeInTheDocument();
      expect(getByText(concept)).toBeInTheDocument();

      expect(getByText(shareByEmailText)).toBeInTheDocument();
      expect(getByText(shareByWhatsappText)).toBeInTheDocument();
    });
  });
});
