import { CheckoutStatus } from 'common/constants';
import { CheckoutRequest, Entity, Provider } from 'common/interface';

export const checkoutPlayground: CheckoutRequest = {
  id: '4766a34c-8bfd-4754-8240-4c6802f75d3c',
  entityId: '64d6f8c7-edc8-4b28-a589-fd60aca2c3e8',
  companyId: '6491c04f1cd4de00015184a4',
  name: 'Embebido CustomerInfo',
  amount: 35000,
  quantity: 1,
  liveMode: true,
  status: CheckoutStatus.ISSUED,
  type: 'Integration',
  recurrent: false,
  expiredAt: 1722880296,
  startsAt: 1721800800,
  allowedPaymentMethods: ['Card', 'Cash', 'BankTransfer'],
  slug: '4766a34c8bfd475482404c6802f75d3c',
  url: 'https://pay.stg.conekta.io/link/4766a34c8bfd475482404c6802f75d3c',
  returnsControlOn: 'ProcessOrder',
  needsShippingContact: false,
  orderTemplate: {
    lineItems: [
      {
        name: 'Order All payments',
        unitPrice: 35000,
        quantity: 1,
        description: '',
        object: 'line_item',
        id: 'line_item_2wL8Tz94HdjdNxe8h',
        parentId: 'ord_2wL8Tz94HdjdNxe8m',
      },
    ],
    customerInfo: {
      customerId: 'cus_2w4jKNGxQKbmFfSjY',
      name: 'Jorge Martínez',
      email: 'jorge.martinez@conekta.com',
      phone: '+5218181818181',
      corporate: false,
      customerFingerprint: null,
    },
    currency: 'MXN',
    metadata: [],
    shippingLines: [
      {
        id: 'ship_lin_2wL8Tz94HdjdNxe8i',
        amount: 0,
        carrier: '',
        trackingNumber: '',
        method: '',
      },
    ],
    taxLines: [],
    discountLines: [],
  },
  orders: [
    {
      id: '',
      shippingContactId: '',
      apiChargeId: '',
      apiOrderId: 'ord_2wL8Tz94HdjdNxe8m',
      paymentMethod: '',
      reference: '',
      shippingContact: null,
      charges: [],
      customerInfo: {
        customerId: 'cus_2w4jKNGxQKbmFfSjY',
        name: 'Jorge Martínez',
        email: 'jorge.martinez@conekta.com',
        phone: '+5218181818181',
        corporate: false,
        customerFingerprint: null,
      },
    },
  ],
  monthlyInstallmentsEnabled: false,
  monthlyInstallmentsOptions: [],
  paymentKeys: [],
  force3dsFlow: false,
  excludeCardNetworks: '',
  redirectionTime: 0,
  canNotExpire: false,
  providers: [{ id: '629e08359e9c3172635b8f07', name: 'datalogic', paymentMethod: 'cash' }],
  openAmount: false,
  plan: null,
  configuration: {
    id: '00000000-0000-0000-0000-000000000000',
    entityId: '64d6f8c7-edc8-4b28-a589-fd60aca2c3e8',
    liveMode: true,
    customStyle: '',
    createCustomers: false,
  },
  femsaMigrated: false,
};

export const entityPlayground: Entity = {
  id: '64d6f8c7-edc8-4b28-a589-fd60aca2c3e8',
  name: 'Pruebas Ale',
  status: 'active',
  idReferenceCompany: '6491c04f1cd4de00015184a4',
  allowedPaymentMethods: ['Card', 'Cash', 'BankTransfer'],
  createdAt: '2023-06-20T15:05:50.585526',
  threeDs: 'Enabled',
  conektaLogo: true,
};

export const buildProvidersMock = (provider?: string) => {
  const PROVIDERS: Record<string, Provider[]> = {
    datalogic: [{ id: '629e08359e9c3172635b8f07', name: 'datalogic', paymentMethod: 'cash' }],
    oxxo: [],
  };
  if (!provider) {
    return PROVIDERS.oxxo;
  }
  return PROVIDERS[provider] || PROVIDERS['datalogic'];
};
