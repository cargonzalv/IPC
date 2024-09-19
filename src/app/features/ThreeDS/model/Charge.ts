import { PaymentMethod } from './PaymentMethod';

export interface Charge {
  id: string;
  liveMode: boolean;
  createdAt: number;
  currency: string;
  paymentMethod: PaymentMethod;
  object: string;
  description: string;
  status: string;
  amount: number;
  paidAt: number | null;
  fee: number;
  customerId: string;
  orderId: string;
}
