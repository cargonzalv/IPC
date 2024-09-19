import { IFormCustomerFieldNames } from 'app/pages/frames/components/Form/FormCustomer/interface';
import { IShippingContact } from 'app/pages/frames/components/Form/FormShipping/interface';
import { CheckoutStatus, PaymentMethodType } from 'common/constants';

export interface OrderTemplate {
  lineItems: any[];
  customerInfo: any;
  currency: string;
  metadata: any[];
  shippingLines: any[];
  taxLines: any[];
  discountLines: any[];
  subtotal?: number;
}

export interface PaymentSourceDTO {
  checkoutRequestId: string;
  paymentMethod: PaymentMethodType;
  tokenId: string;
  fingerprint?: string;
  customerInfo?: IFormCustomerFieldNames;
  shippingContact?: IShippingContact;
}

export interface CreateOrderPayload extends PaymentSourceDTO {
  checkoutAntifraudResponseID?: string;
  fillPaymentFormTime: number;
  paymentKey: string;
  paymentSourceId: string;
  savePaymentSource?: boolean;
  threeDsMode?: string;
  returnUrl?: string;
}

interface CheckoutRequest {
  id: string;
  entityId: string;
  companyId: string;
  name: string;
  amount: number;
  quantity: number;
  liveMode: boolean;
  status: CheckoutStatus;
  type: string;
  recurrent: boolean;
  plan?: any;
  expiredAt: number;
  startsAt: number;
  allowedPaymentMethods: PaymentMethod[];
  isRecurrent?: boolean;
  slug: string;
  url: string;
  returnsControlOn: string;
  needsShippingContact: boolean;
  openAmount: boolean;
  orderTemplate: OrderTemplate;
  orders: any[];
  monthlyInstallmentsEnabled: boolean;
  monthlyInstallmentsOptions: any[];
  paymentKeys: any[];
  force3dsFlow: boolean;
  excludeCardNetworks: string;
  canNotExpire: boolean;
  redirectionTime: number;
  providers: Provider[];
  femsaMigrated: boolean;
  configuration?: CheckoutConfiguration;
  token?: {
    tokenId: string;
  };
  threeDs?: ThreeDsValues;
}

interface CheckoutConfiguration {
  id: string;
  entityId: string;
  liveMode: boolean;
  customStyle: string;
  createCustomers: boolean;
}

interface Keys {
  publicKey: string;
}

interface Entity {
  id: string;
  name: string;
  status: string;
  idReferenceCompany: string;
  allowedPaymentMethods: PaymentMethodType[];
  createdAt: string;
  threeDs: string;
  conektaLogo: boolean;
}
interface AppContext {
  monthlyInstallmentsOptions: IMonthlyInstallment[];
  setMonthlyInstallmentsOptions: (monthlyInstallments: IMonthlyInstallment[]) => void;
}
interface ShippingContactContext {
  showShippingForm: boolean;
  setShowShippingForm: (value: any) => void;
}

interface ShippingContactContext {
  showShippingForm: boolean;
  setShowShippingForm: (value: any) => void;
}

type Method = 'POST' | 'GET' | 'PUT' | 'DELETE';

interface TokenRequest {
  tokenForm: Record<string, any>;
  originType: string;
}

interface Provider {
  id: string;
  name: string;
  paymentMethod: string;
}

interface OpenAmount {
  entityId: string;
  companyId: string;
  merchantPath: string;
  merchantName: string;
  allowedPaymentMethods: string[];
  monthlyInstallmentsEnabled: boolean;
  monthlyInstallmentsOptions: number[];
  needsShippingContact: boolean;
  enabled: boolean;
  configuration: Record<string, any>;
  customStyleJSON: Record<string, any>;
}

interface Background {
  body: string;
  header: string;
}

interface Button {
  backgroundColor: string;
  colorText: string;
  text: string;
}

interface Logo {
  size: string;
  source: string;
  typeBase64: string;
  typeImage: string;
}

interface State {
  empty: {
    borderColor: string;
  };
  valid: {
    borderColor: string;
  };
  invalid: {
    borderColor: string;
  };
}

interface Theme {
  background: Background;
  button?: Button;
  buttonType: string;
  colors: any;
  enableWhiteLabel: boolean;
  fontSize: string;
  iframe?: any;
  inputType: string;
  letters: any;
  logo: Logo;
  state: State;
}

interface ReferenceNotificationBody {
  email: string;
  notificationType: string;
  checkoutRequestId: string;
  provider: string;
  clientName: string;
  checkoutRequestName: string;
  amount: number;
  reference: string;
  expiredAt: number;
  paymentMethod: string;
  barcodeUrl: string;
}

interface ParamsGetJWTCreateData {
  amount: string;
  id: string;
  name: string;
  customerName: string;
  liveMode: boolean;
}

interface IPersonalizationOptions {
  backgroundMode: string;
  colorText: string;
  colorLabel: string;
  inputType: string;
  colorPrimary: string;
  hideLogo: string;
}
