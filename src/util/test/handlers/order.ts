import { rest } from 'msw';
import { ORDERS_BY_PAYMENT_METHOD } from '../mocks/order';
import { BASIC_PAYMENT_SOURCE } from '../mocks/paymentSource';
import { CHECKOUT_API_BASE_URL } from './constants';

const handlers = [
  rest.post(`${CHECKOUT_API_BASE_URL}/api/order/payment-source`, async (req, res, ctx) => {
    const { customerInfo: customerInfoInPayload } = await req.json();
    try {
      const customerInfo = {
        ...BASIC_PAYMENT_SOURCE.customerInfo,
        ...customerInfoInPayload,
      };
      return res(
        ctx.json({
          ...BASIC_PAYMENT_SOURCE,
          customerInfo,
        }),
      );
    } catch (error) {
      console.error(`Error handling payment-source request for id ${customerInfoInPayload}:`, error);
      return res(ctx.status(500));
    }
  }),

  rest.post(`${CHECKOUT_API_BASE_URL}/api/order`, async (req, res, ctx) => {
    const { paymentMethod, checkoutRequestId } = await req.json();
    try {
      return res(ctx.json(ORDERS_BY_PAYMENT_METHOD[paymentMethod]));
    } catch (error) {
      console.error(`Error handling order request for ${checkoutRequestId} with ${paymentMethod}:`, error);
      return res(ctx.status(500));
    }
  }),
];

export { handlers };
