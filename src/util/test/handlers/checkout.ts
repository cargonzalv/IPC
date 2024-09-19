import { rest } from 'msw';
import { ID_CHECKOUT_INTERNAL_ERROR, MAP_CHECKOUTS } from '../mocks/checkout';
import { MONTHLY_INSTALLMENS_RESPONSES } from '../mocks/monthlyInstallments';
import { CHECKOUT_API_BASE_URL } from './constants';

const handlers = [
  // checkout requests handler
  rest.get(`${CHECKOUT_API_BASE_URL}/api/checkout/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    try {
      const data = MAP_CHECKOUTS[id as string];
      if (data) {
        return res(ctx.json(data));
      } else {
        if (id === ID_CHECKOUT_INTERNAL_ERROR) {
          return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
        }
        return res(ctx.status(404));
      }
    } catch (error) {
      console.error(`Error handling checkout request for id ${id}:`, error);
      return res(ctx.status(500));
    }
  }),

  rest.get(`${CHECKOUT_API_BASE_URL}/api/checkout/:id/monthlyInstallments`, async (req, res, ctx) => {
    const { checkoutRequestId } = await req.json();
    try {
      return res(ctx.json(MONTHLY_INSTALLMENS_RESPONSES[checkoutRequestId]));
    } catch (error) {
      console.error(`Error handling monthlyInstallmentsrequest for ${checkoutRequestId}:`, error);
      return res(ctx.status(500));
    }
  }),
];

export { handlers };
