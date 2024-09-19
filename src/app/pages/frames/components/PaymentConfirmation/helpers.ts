import { IShippingContact } from 'app/pages/frames/components/Form/FormShipping/interface';

export const parseShippingContactToString = ({
  address: { street1, street2, postalCode, city, state },
}: IShippingContact) =>
  `${street1 ?? ''}${street2 ? `, ${street2}` : ''}${postalCode ? `, ${postalCode}` : ''}${city ? `, ${city}` : ''}${
    state ? `, ${state}` : ''
  }`;
