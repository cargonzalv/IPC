import { ViewState } from 'app/util/interface';
import { CheckoutStatus } from 'common/constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CheckoutState {
  state: ViewState;
  setState: (state: ViewState) => void;
}

export const initialViewState: ViewState = {
  checkoutRequest: {
    id: '',
    name: '',
    entityId: '',
    companyId: '',
    amount: 0,
    quantity: 0,
    liveMode: true,
    status: CheckoutStatus.ISSUED,
    type: '',
    recurrent: false,
    expiredAt: 0,
    startsAt: 0,
    allowedPaymentMethods: [],
    slug: '',
    url: '',
    returnsControlOn: '',
    needsShippingContact: false,
    openAmount: false,
    orderTemplate: {
      lineItems: [],
      customerInfo: {},
      currency: '',
      metadata: [],
      shippingLines: [],
      taxLines: [],
      discountLines: [],
    },
    orders: [],
    monthlyInstallmentsEnabled: false,
    monthlyInstallmentsOptions: [],
    paymentKeys: [],
    excludeCardNetworks: '',
    force3dsFlow: false,
    providers: [],
    canNotExpire: false,
    redirectionTime: 0,
    femsaMigrated: false
  },
  entity: {
    id: '',
    name: '',
    status: '',
    idReferenceCompany: '',
    allowedPaymentMethods: [],
    createdAt: '',
    threeDs: '',
    conektaLogo: true,
  },
  formattedAmount: 0,
  amountInCurrencyFormat: '',
  isHigherThanCashLimitAmount: false,
  isOutBnplAmountRange: false,
  allowedPaymentMethods: [],
  isDatalogic: false,
  isPespay: false,
  keys: {
    publicKey: '',
  },
  isIntegration: false,
  device: {},
};

export const useCheckoutFrameStore = create<CheckoutState>()(
  devtools((set) => ({
    state: null as any,
    setState: (state: ViewState) => set({ state }),
  }), {
    name: 'Component/Checkout'
  }),
);

export const useCheckoutFrameContext = () => useCheckoutFrameStore((store) => store.state);
