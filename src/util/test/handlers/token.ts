import { rest } from 'msw';
import { TOKENS_RESPONSE } from '../mocks/tokens';
import { API_BASE_URL } from './constants';

const handlers = [
  rest.post(`${API_BASE_URL}/tokens`, async (req, res, ctx) => {
    const {
      card: { number: cardNumber },
    } = await req.json();
    try {
      return res(ctx.json(TOKENS_RESPONSE[cardNumber]));
    } catch (error) {
      console.error(`Error handling tokens request for ${cardNumber}:`, error);
      return res(ctx.status(500));
    }
  }),
];

export { handlers };
