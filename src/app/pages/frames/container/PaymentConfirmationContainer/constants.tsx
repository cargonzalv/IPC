import { loadable } from '@conekta/cronos/dynamic';
import { PaymentMethodType } from 'app/util/constants';
import { IConfirmationContent } from './interface';

const BankTransferConfirmation = loadable<IConfirmationContent>(
  () => import('app/pages/frames/components/PaymentConfirmation/BankTransfer'),
  { ssr: false },
);
const BNPLConfirmation = loadable<any>(() => import('app/pages/frames/components/PaymentConfirmation/BNPL'), {
  ssr: false,
});
const CashConfirmation = loadable<IConfirmationContent>(
  () => import('app/pages/frames/components/PaymentConfirmation/Cash'),
  {
    ssr: false,
  },
);
const CardConfirmation = loadable<IConfirmationContent>(
  () => import('app/pages/frames/components/PaymentConfirmation/Card'),
  {
    ssr: false,
  },
);

export const paymentConfirmationViews: Record<PaymentMethodType, any> = {
  [PaymentMethodType.Cash]: CashConfirmation,
  [PaymentMethodType.BankTransfer]: BankTransferConfirmation,
  [PaymentMethodType.Card]: CardConfirmation,
  [PaymentMethodType.Bnpl]: BNPLConfirmation,
};
