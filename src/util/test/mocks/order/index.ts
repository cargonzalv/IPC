import { Order } from 'app/features/ThreeDS/model/Order';
import * as BANK_TRANSFER_ORDER from './bankTransfer.json';
import * as CASH_ORDER from './cash.json';
import * as CARD_WITHOUT_3DS_ORDER from './cardWithout3DS.json';

const ORDERS_BY_PAYMENT_METHOD: Record<string, Order> = {
  BankTransfer: BANK_TRANSFER_ORDER,
  Cash: CASH_ORDER,
  Card: CARD_WITHOUT_3DS_ORDER,
};

export { BANK_TRANSFER_ORDER, CASH_ORDER, ORDERS_BY_PAYMENT_METHOD };
