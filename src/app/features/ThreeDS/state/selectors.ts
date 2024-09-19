import { useThreeDSStore } from './threeDSContext';
import { Order } from 'app/features/ThreeDS/model/Order';
import { Charge } from 'app/features/ThreeDS/model/Charge';
import { PaymentSource } from '../model/PaymentSource';

const defaultCharge: Charge = {
  id: '',
  liveMode: true,
  createdAt: 0,
  currency: '',
  paymentMethod: { type: '', barcodeUrl: '', name: '', last4: '', brand: '' },
  object: '',
  description: '',
  status: '',
  amount: 0,
  paidAt: 0,
  fee: 0,
  customerId: '',
  orderId: '',
};
const defaultOrder: Order = {
  charge: defaultCharge,
  id: '',
  reference: '',
  status: '',
  urlRedirect: '',
  cardSaved: '',
  metaData: {},
};

export const defaultPaymentSource = {
  customerInfo: { customerId: '', name: '', email: '', phone: '', id: '' },
  paymentKey: '',
};

export const useOrderResponse = () => {
  return useThreeDSStore((state) => state.orderResponse);
};

export const useOrder = () => {
  return useOrderResponse()?.order || defaultOrder;
};

export const useOrderId = () => {
  return useOrder().id;
};

export const useOrderReference = () => {
  return useOrder().reference;
};

export const useUrlRedirect = () => {
  return useOrder().urlRedirect;
};

export const useCharge = () => {
  return useOrder().charge;
};

export const usePaymentMethod = () => {
  return useCharge().paymentMethod;
};

export const useBarcodeUrl = () => {
  return usePaymentMethod().barcodeUrl;
};

export const usePaymentSource = (): PaymentSource => {
  return useOrderResponse()?.paymentSource || defaultPaymentSource;
};

export const useCustomer = () => {
  return usePaymentSource().customerInfo;
};
export const useOrderClientName = () => {
  return useCustomer().name;
};

export const useOrderClientEmail = () => {
  return useCustomer().email;
};
