import { rest } from 'msw';
import { MAP_ENTITIES } from '../mocks/entity';
import { CHECKOUT_API_BASE_URL } from './constants';

const handlers = [
  rest.get(`${CHECKOUT_API_BASE_URL}/api/entity/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    try {
      const data = MAP_ENTITIES[id as string];
      if (data) {
        return res(ctx.json(data));
      } else {
        return res(ctx.status(404));
      }
    } catch (error) {
      console.error(`Error handling entity request for id ${id}:`, error);
      return res(ctx.status(500));
    }
  }),
];

export { handlers };
