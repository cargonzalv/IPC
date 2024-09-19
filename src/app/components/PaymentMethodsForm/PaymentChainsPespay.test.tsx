import { render } from '@testing-library/react';
import PaymentChainsPespay from './PaymentChainsPespay';
import { brandsPespay } from 'app/util/constants';

describe('PaymentChainsPespay', () => {
  it('renders all brand logos', () => {
    const { getByAltText } = render(<PaymentChainsPespay />);
    
    brandsPespay.forEach(brand => {
      expect(getByAltText(brand.alt)).toBeInTheDocument();
    });
  });
});
