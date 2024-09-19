import { Plan } from 'api/interface';

interface IAddress {
  city: string;
  country: string;
  postalCode: string;
  residential: boolean;
  state: string;
  street1: string;
  street2: string;
}

interface IEntityRequest {
  allowedPaymentMethods: string[];
  createdAt: string;
  id: string;
  idReferenceCompany: string;
  name: string;
  status: string;
}

interface IFormShippingInfo {
  address: IAddress;
  phone: string;
  receiver: string;
}

export interface IIframePaymentConfirmation {
  selectedPaymentMethod: any;
}

interface IPayload {
  errors?: any;
  id: string;
  paymentStatus: string;
  reference: string;
}

export type SubscriptionInformationProps = {
  plan: Plan;
};

export interface IConfirmationContent {
  isIntegration: boolean;
  isSelfHosted: boolean | undefined;
  containerId: string;
  isChrome: boolean | undefined;
}
