import { Customer } from './Customer';

export interface PaymentSource {
  customerInfo: Customer;
  paymentSourceId?: string;
  paymentKey: string;
}
