import { PaymentMethodType } from 'app/util/constants';

export const changePaymentMethodsToLastPosition = (methods: PaymentMethodType[], init: number) =>
  methods.push(methods.splice(init, 1)[0]);
