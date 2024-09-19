import { render } from '@testing-library/react';
import BoxCashPesPay from './BoxCashPespay';
import { brandsPespay } from 'app/util/constants';

describe('BoxCashPesPay', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<BoxCashPesPay />);
    
    expect(getByText(/iFrame.confirmation.cash.pay_title_pespay/i)).toBeInTheDocument();
  });

  it('renders all brand logos', () => {
    const { getByAltText } = render(<BoxCashPesPay />);

    brandsPespay.forEach(brand => {
      expect(getByAltText(brand.alt)).toBeInTheDocument();
    });
  });
});
