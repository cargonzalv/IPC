import { BasicFormCardValues } from 'app/pages/frames/util/interface';
import { FormApi } from 'final-form';

export interface IFormCard {
  showHeader?: boolean;
  notBack?: boolean;
}

export interface IConektaTokenData {
  shippingContact: any;
  card: IFormCardData;
  token_id: string;
  shippingContact?: any; //IFormShippingData ? IFormShippingFields ?
}

export interface IFormCardDataValues {
  cardExpMonth: string;
  cardExpYear: string;
  cardNumber: string;
  cardVerificationValue: string;
  cardholderName: string;
  customerInfo?: any; //ICustomerInfo
  monthlyInstallments: number;
  savePaymentSource?: boolean;
}

export interface IFormCardFieldNames {
  cardExpMonthYear: string;
  cardNumber: string;
  cardVerificationValue: string;
  cardholderName: string;
  monthlyInstallments: string;
  savePaymentSource: string;
}

export interface IFormCardSteps {
  [key: string]: any;
}

export interface IMonthlyInstallment {
  monthlyInstallments: number;
  monthlyFee: number;
}

export interface IPaymentRequest {
  binNumber?: string;
  shippingContact?: any; //IFormShippingData
  customerInfo?: any; //ICustomerInfo
  monthlyInstallments?: number;
  token?: any;
  tokenId?: any;
}

export interface IFormCardData {
  cvc: string;
  exp_month: string;
  exp_year: string;
  exp_month_year?: string;
  name: string;
  number: string;
}

export interface IThreeDSFlags {
  [key: string]: TThreeDSFlags;
}

export type TThreeDSFlags = 'Enabled' | 'EnabledDynamic' | 'NotValid' | 'Off';

export interface BasicFormCardProps {
  form: FormApi<BasicFormCardValues, Partial<BasicFormCardValues>>;
  submitting: boolean;
  values: BasicFormCardValues;
}
