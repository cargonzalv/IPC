import { waitFor } from '@testing-library/react';
import { ConektaSource } from 'common/constants';
import { IFrame } from 'interface';
import Embedded from 'app/pages/frames/pages/embedded-checkout/views/Embedded';
import { ID_CHECKOUT_WITH_PESPAY } from 'util/test/mocks/checkout';
import { renderWithProviders } from 'util/test/test.utils';
import { pespayTitle } from 'util/test/constants';

const idTargetIframe = 'componentContainer';

const onGetInfoSuccess = jest.fn();
const defaultConfig = {
  locale: 'es',
  publicKey: 'key_YXQIoiPhGK7DBo45dsEEEGa',
  targetIFrame: idTargetIframe,
  checkoutRequestId: ID_CHECKOUT_WITH_PESPAY,
};
const componentConfig: IFrame = {
  integration: true,
  isSelfHosted: false,
  isPlayground: false,
  conektaSource: ConektaSource.COMPONENT,
  config: defaultConfig,
  callbacks: {
    onGetInfoSuccess,
  },
  options: {},
};

describe('Embedded component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should renders embedded component only with pespay', async () => {
    const { getByText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      componentConfig,
    );

    await waitFor(() => {
      expect(getByText(pespayTitle)).toBeInTheDocument();
    });
  });

  it('should not render datalogic brands when this is pespay', async () => {
    const { queryByAltText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      componentConfig,
    );

    await waitFor(() => {
      expect(queryByAltText('datalogic')).toBeNull();
    });
  });

  it('should render pespay brands when this is pespay and button pay is clicked', async () => {
    const { getByText, getByAltText } = renderWithProviders(
      <div id={idTargetIframe}>
        <Embedded />
      </div>,
      componentConfig,
    );

    await waitFor(() => {
      expect(getByText(pespayTitle)).toBeInTheDocument();

      const button = getByText(/iFrame.checkout.buttonSubmitPayCard/i);
      button.click();
    });

    await waitFor(() => {
      expect(getByText(/iFrame.confirmation.cash.pay_title_pespay/i)).toBeInTheDocument();

      expect(getByAltText('wallmart')).toBeInTheDocument();
      expect(getByAltText('farmarcias_ahorro')).toBeInTheDocument();
      expect(getByAltText('bodega_aurrera')).toBeInTheDocument();
      expect(getByAltText('sams')).toBeInTheDocument();
      expect(getByAltText('super_kiosko')).toBeInTheDocument();
      expect(getByAltText('waldos')).toBeInTheDocument();
    });
  });
});
