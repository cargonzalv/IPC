import { rest } from 'msw';
import { errorKey, migratedKey } from '../constants';

const handlers = [
  rest.get('https://pay.stg.conekta.io/api/company/check', (req, res, ctx) => {
    const publicKey = req.headers.get('x-key');
    if (publicKey === errorKey) {
      return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
    }
    if (publicKey && publicKey !== migratedKey) {
      return res(ctx.json(false));
    }
    return res(ctx.json(true));
  }),
];

export { handlers };
