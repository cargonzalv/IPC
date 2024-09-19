import { CardType, CardTypeRegex, paymentBrandLogos } from "app/util/constants";

export const getCardBrand = (accountNumber: string) => {
  if (CardTypeRegex.simpleMC.test(accountNumber)) {
    return CardType.mastercard;
  }
  if (CardTypeRegex.simpleVisa.test(accountNumber)) {
    return CardType.visa;
  }
  if (CardTypeRegex.simpleAmex.test(accountNumber)) {
    return CardType.amex;
  }

  return "";
};

export const getCardBrandImgUrl = (cardTypeNumber: string): string[] => {
  if (!cardTypeNumber) {
    return [paymentBrandLogos.visa_24px, paymentBrandLogos.american_express_24px, paymentBrandLogos.mc_24px];
  }
  const cardType = getCardBrand(cardTypeNumber);
  switch (cardType) {
    case CardType.visa:
      return [paymentBrandLogos.visa_24px];
    case CardType.mastercard:
      return [paymentBrandLogos.mc_24px];
    case CardType.amex:
      return [paymentBrandLogos.american_express_24px];
    default:
      return [];
  }
};
