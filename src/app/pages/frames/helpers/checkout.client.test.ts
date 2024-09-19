import { getCardBrandImgUrl } from 'app/pages/frames/helpers/checkout';
import { paymentBrandLogos } from 'app/util/constants';

describe('Checkout helper test', () => {
  it('should return cardType mastercard', () => {
    const value = getCardBrandImgUrl('5555555555554444');
    expect(value).toEqual([paymentBrandLogos.mc_24px]);
  });
  it('should return cardType visa', () => {
    const value = getCardBrandImgUrl('4242424242424242');
    expect(value).toEqual([paymentBrandLogos.visa_24px]);
  });
  it('should return cardType amex', () => {
    const value = getCardBrandImgUrl('378282246310005');
    expect(value).toEqual([paymentBrandLogos.american_express_24px]);
  });

  it('should return cardType empty', () => {
    const value = getCardBrandImgUrl('111182246310005');
    expect(value).toEqual([]);
  });
});
