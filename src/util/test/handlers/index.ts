import { handlers as checkoutHandlers } from './checkout';
import { handlers as companyHandlers } from './company';
import { handlers as entityHandlers } from './entity';
import { handlers as orderHandlers } from './order';
import { handlers as tokenHandlers } from './token';

const handlers = [...checkoutHandlers, ...companyHandlers, ...entityHandlers, ...orderHandlers, ...tokenHandlers];

export { handlers };
