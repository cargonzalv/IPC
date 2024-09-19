import { CheckoutRequest, Entity, Keys } from 'common/interface';

export interface IImage {
  alt: string;
  className: string;
  src: string;
}

export interface CheckoutGetState {
  checkoutRequest: CheckoutRequest;
  entity: Entity;
  formattedAmount: number;
  amountInCurrencyFormat:string;
  isHigherThanCashLimitAmount: boolean;
  isOutBnplAmountRange: boolean;
  allowedPaymentMethods: PaymentMethodType[];
  isDatalogic: boolean;
  isPespay: boolean;
}

export interface ViewState extends CheckoutGetState {
  keys: Keys;
  isIntegration: boolean;
  configuration?: Record<string, any>;
  device: Record<string, boolean>;
}
