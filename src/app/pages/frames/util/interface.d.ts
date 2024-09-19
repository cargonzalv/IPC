import { Order } from 'app/features/ThreeDS/model/Order';
import { PaymentSource } from 'app/features/ThreeDS/model/PaymentSource';
import { IShippingContact } from 'app/pages/frames/components/Form/FormShipping/interface';
import { PaymentMethodType } from 'app/util/constants';

interface SelectedPaymentMethodState {
  type: PaymentMethodType | null;
  showHeader?: boolean;
  showBackButton?: boolean;
}

interface OrderResponse {
  order: Order;
  paymentSource: PaymentSource;
}
interface IConfirmation {
  selectedPaymentMethod?: PaymentMethodType;
  monthlyInstallmentSelected?: any;
  formCardData?: any;
  shippingContact?: IShippingContact;
  orderResponse?: OrderResponse;
  showConfirmation: boolean;
}
interface IExtraData {
  monthlyInstallmentSelected: any;
  formCardData: BasicFormCardValues;
}

interface CustomerFormValues {
  customerInfo?: {
    email: string;
    name: string;
  };
  shippingContact?: any;
}

interface BasicFormCardValues extends CustomerFormValues {
  cardExpMonthYear: string;
  cardNumber: string;
  cardVerificationValue: string;
  cardholderName: string;
  monthlyInstallments: number;
  savePaymentSource: boolean;
}
