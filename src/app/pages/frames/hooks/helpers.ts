import {
  conektaTokenDataInitialValue,
  formCardDataInitialValue,
} from 'app/pages/frames/components/Form/FormCard/constants';
import { IConektaTokenData } from 'app/pages/frames/components/Form/FormCard/interfaces';

export interface CardValues {
  cardNumber: string;
  cardVerificationValue: string;
  cardholderName: string;
  customerInfo?: {
    email: string;
    name: string;
  };
  monthlyInstallments: number;
  shippingContact?: any;
  cardExpMonth: string;
  cardExpYear: string;
}

export const buildTokenData = ({
  cardValues,
  tokenId,
  customerName,
  needsShippingContact,
}: {
  cardValues: CardValues;
  tokenId: string;
  customerName: string;
  needsShippingContact: boolean;
}): IConektaTokenData => {
  const { cardNumber, cardVerificationValue, cardholderName, shippingContact, cardExpMonth, cardExpYear } = cardValues;
  const conektaTokenData: IConektaTokenData = { ...conektaTokenDataInitialValue };
  conektaTokenData.card = {
    ...formCardDataInitialValue,
    cvc: cardVerificationValue,
    exp_month: cardExpMonth,
    exp_year: cardExpYear,
    name: cardholderName,
    number: cardNumber,
  };

  if (needsShippingContact && shippingContact) {
    conektaTokenData.shippingContact = shippingContact;
    conektaTokenData.shippingContact.receiver = customerName;
  }
  if (tokenId !== '') {
    conektaTokenData.token_id = tokenId;
  }

  return conektaTokenData;
};

const notSensitiveKeys = ['name', 'device_fingerprint'];

export const cleanSensitiveData = (element: any): void => {
  const keys = Object.keys(element);

  keys.forEach((key) => {
    if (!notSensitiveKeys.includes(key)) {
      delete element[key];
    }
  });
};
