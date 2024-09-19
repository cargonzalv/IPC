import { act, fireEvent, waitFor } from '@testing-library/react';
import { ConektaSource } from 'common/constants';
import { IFrame } from 'interface';
import Embedded from 'app/pages/frames/pages/embedded-checkout/views/Embedded';
import { ID_CHECKOUT_WITH_ALL_PAYMENT_METHODS_AND_3DS } from 'util/test/mocks/checkout';
import { renderWithProviders } from 'util/test/test.utils';
import {
  referenceInfoText,
  bankTransferMenuOptionText,
  cardCvcInputText,
  cardExpirationDateInputText,
  cardMenuOptionText,
  cardNumberInputText,
  cardholderNameInputText,
  cashMenuOptionText,
  emailInputLabel,
  monthlyInstallmentsText,
  nameInputLabel,
  oxxoTitle,
  selectPaymentMethodText,
} from 'util/test/constants';
import {
  GetByText,
  validateCardFields,
  validateCustomerDataFields,
  validateMonthllyInstallmentsField,
} from 'util/test/inputHelper';

const idTargetIframe = 'componentContainer';

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
    checkoutRequestId: ID_CHECKOUT_WITH_ALL_PAYMENT_METHODS_AND_3DS,
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

  const validatePaymentMethodOptions = (getByText: GetByText) => {
    expect(getByText(selectPaymentMethodText)).toBeInTheDocument();
    expect(getByText(cardMenuOptionText)).toBeInTheDocument();
    expect(getByText(cashMenuOptionText)).toBeInTheDocument();
    expect(getByText(bankTransferMenuOptionText)).toBeInTheDocument();
  };

  it('renders component with all payment methods', async () => {
    const { getByText, getByLabelText, queryByLabelText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      componentConfig,
    );

    await waitFor(() => {
      validatePaymentMethodOptions(getByText);
      validateCardFields(getByLabelText);
      validateMonthllyInstallmentsField(getByText);
      expect(queryByLabelText(nameInputLabel)).not.toBeInTheDocument();
      expect(queryByLabelText(emailInputLabel)).not.toBeInTheDocument();
      expect(onGetInfoSuccess).toHaveBeenCalled();
    });
  });

  it('renders component in mode payment link with all payment methods', async () => {
    const { getByText, getByLabelText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      validatePaymentMethodOptions(getByText);
      validateCardFields(getByLabelText);
      validateMonthllyInstallmentsField(getByText);
      validateCustomerDataFields(getByLabelText);
      expect(onGetInfoSuccess).toHaveBeenCalled();
    });
  });

  it('renders component in mode payment link with all payment methods and hides card fields after selecting cash', async () => {
    const { getByText, queryByLabelText, queryByText, getByLabelText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      validatePaymentMethodOptions(getByText);
      validateCardFields(getByLabelText);
      validateMonthllyInstallmentsField(getByText);
      expect(queryByText(oxxoTitle)).not.toBeInTheDocument();
    });

    await act(async () => {
      const cashOption = getByText(cashMenuOptionText);
      fireEvent.click(cashOption);
    });

    await waitFor(() => {
      expect(getByText(oxxoTitle)).toBeInTheDocument();
      expect(getByText(referenceInfoText)).toBeInTheDocument();
      expect(queryByLabelText(cardholderNameInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardNumberInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardExpirationDateInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardCvcInputText)).not.toBeInTheDocument();
      expect(queryByText(monthlyInstallmentsText)).not.toBeInTheDocument();
    });
  });

  it('renders component in mode payment link with all payment methods and hides card fields and oxxo info after select bank transfer', async () => {
    const { getByText, queryByLabelText, queryByText, getByLabelText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      paymentLinkConfig,
    );

    await waitFor(() => {
      validatePaymentMethodOptions(getByText);
      validateCardFields(getByLabelText);
      validateMonthllyInstallmentsField(getByText);
      expect(queryByText(referenceInfoText)).not.toBeInTheDocument();
    });

    await act(async () => {
      const cashOption = getByText(bankTransferMenuOptionText);
      fireEvent.click(cashOption);
    });

    await waitFor(() => {
      expect(getByText(referenceInfoText)).toBeInTheDocument();
      expect(queryByText(oxxoTitle)).not.toBeInTheDocument();
      expect(queryByLabelText(cardholderNameInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardNumberInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardExpirationDateInputText)).not.toBeInTheDocument();
      expect(queryByLabelText(cardCvcInputText)).not.toBeInTheDocument();
      expect(queryByText(monthlyInstallmentsText)).not.toBeInTheDocument();
    });
  });
});
