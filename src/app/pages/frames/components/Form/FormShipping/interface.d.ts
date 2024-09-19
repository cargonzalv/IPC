export interface IFormShipping {
  allowRetrySubmitting?: boolean;
  className?: string;
  hide?: boolean;
  onSubmitFormShipping: any;
}

interface IShippingContact {
  address: IAddress;
  phone?: string;
}

interface IAddress {
  city: string;
  country: string;
  postalCode: string;
  residential: boolean;
  state: string;
  street1: string;
  street2: string;
}

export interface IFormShippingFields {
  receiver?: string;
  shippingContactCity: string;
  shippingContactPhone: number;
  shippingContactPostalCode: string;
  shippingContactState: string;
  shippingContactStreet1: string;
  shippingContactStreet2: string;
}

export interface IFormShippingSubmittedForm {
  values: IFormShippingFields;
  wasSubmitted: boolean;
}
