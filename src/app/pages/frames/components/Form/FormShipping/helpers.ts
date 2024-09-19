import { IShippingContact } from './interface';

export const parseShippingFormDataForEndpoint = (shippingContact: IShippingContact): IShippingContact => ({
  ...shippingContact,
  phone: shippingContact?.phone?.toString() || undefined,
  address: {
    ...shippingContact?.address,
    country: 'MX',
    residential: true,
  },
});
