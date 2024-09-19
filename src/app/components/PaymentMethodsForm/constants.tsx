import { loadable } from '@conekta/cronos/dynamic';
import { changePaymentMethodsToLastPosition } from 'app/pages/frames/components/PaymentMethods/Menu/helpers';
import { PaymentMethodType } from 'app/util/constants';
import { bankTransferIconUrl, cardIconUrl, cashIconUrl } from 'app/util/redesignConstants';

const CashContainer = loadable(() => import('app/pages/frames/container/CashContainer'), {
  ssr: false,
  fallback: <></>,
});
const BankContainer = loadable(() => import('app/pages/frames/container/BankTransferContainer'), {
  ssr: false,
  fallback: <></>,
});
const CardContainer = loadable(() => import('app/pages/frames/container/CardContainer'), {
  ssr: false,
  fallback: <></>,
});
const BnplContainer = loadable(() => import('app/pages/frames/container/BnplContainer'), {
  ssr: false,
  fallback: <></>,
});

const IconCash = loadable(() => import('app/components/icons/cash'), {
  ssr: false,
  fallback: <></>,
});

const ConektaCash = loadable(() => import('app/components/icons/conekta-cash'), {
  ssr: false,
  fallback: <></>,
});

const IconBankTransfer = loadable(() => import('app/components/icons/bankTransfer'), {
  ssr: false,
  fallback: <></>,
});
const IconCard = loadable(() => import('app/components/icons/card'), {
  ssr: false,
  fallback: <></>,
});

const IconBnpl = loadable(() => import('app/components/icons/card'), {
  ssr: false,
  fallback: <></>,
});

const DISABLED_PAYMENT_METHODS = [PaymentMethodType.Bnpl];

export const createPaymentMethodObjects = (isDatalogic: boolean) => {
  const paymentMethodMapping: Record<PaymentMethodType, any> = {
    [PaymentMethodType.Cash]: {
      icon: isDatalogic ? ConektaCash : IconCash,
      container: CashContainer,
    },
    [PaymentMethodType.BankTransfer]: {
      icon: IconBankTransfer,
      container: BankContainer,
    },
    [PaymentMethodType.Card]: {
      icon: IconCard,
      container: CardContainer,
    },
    [PaymentMethodType.Bnpl]: {
      icon: IconBnpl,
      container: BnplContainer,
    },
  };

  Object.keys(paymentMethodMapping).forEach((method) => {
    if (DISABLED_PAYMENT_METHODS.includes(method as PaymentMethodType)) {
      delete paymentMethodMapping[method as PaymentMethodType];
    }
  });

  const PAYMENT_METHOD_ICONS = Object.fromEntries(
    Object.entries(paymentMethodMapping).map(([method, { icon }]) => [method, icon]),
  ) as Record<PaymentMethodType, any>;

  const PAYMENT_METHOD_CONTAINERS = Object.fromEntries(
    Object.entries(paymentMethodMapping).map(([method, { container }]) => [method, container]),
  ) as Record<PaymentMethodType, any>;

  return { PAYMENT_METHOD_ICONS, PAYMENT_METHOD_CONTAINERS };
};

export const getPaymentMethodIconsMap = (): Map<PaymentMethodType, string> => {
  const paymentMethodIcons: Map<PaymentMethodType, string> = new Map();
  paymentMethodIcons.set(PaymentMethodType.Card, cardIconUrl);
  paymentMethodIcons.set(PaymentMethodType.Cash, cashIconUrl);
  paymentMethodIcons.set(PaymentMethodType.BankTransfer, bankTransferIconUrl);
  return paymentMethodIcons;
};

export const orderPaymentMethodThatExceedLimits = ({
  paymentMethod,
  methods,
}: {
  paymentMethod: PaymentMethodType;
  methods: PaymentMethodType[];
}) => {
  const hasPaymentMethod = methods.find((item: string) => item === paymentMethod);

  if (!hasPaymentMethod) {
    return methods;
  }
  const orderedMethods = [...methods];
  changePaymentMethodsToLastPosition(orderedMethods, orderedMethods.indexOf(paymentMethod));
  return orderedMethods;
};

export const buildPaymentMethodCardsConfig = (
  paymentMethods: PaymentMethodType[],
  isHigherThanCashLimitAmount: boolean,
  // isOutBnplAmountRange: boolean,
) => {
  const iconsMap = getPaymentMethodIconsMap();
  return paymentMethods
    .filter((paymentMethod) => paymentMethod !== PaymentMethodType.Bnpl)
    .map((paymentMethod) => {
      let isDisabled = false;
      if (paymentMethod === PaymentMethodType.Cash && isHigherThanCashLimitAmount) {
        isDisabled = true;
      }
      // if (paymentMethod === PaymentMethodType.Bnpl && isOutBnplAmountRange) {
      //   isDisabled = true;
      // }
      return {
        name: paymentMethod,
        isDisabled,
        icon: iconsMap.get(paymentMethod)!,
      };
    });
};

export const getConfiguredPaymentMethods = (
  allowedPaymentMethodsByEntity: PaymentMethodType[],
  allowedPaymentMethods: PaymentMethodType[],
  isHigherThanCashLimitAmount: boolean,
  isOutBnplAmountRange: boolean,
) => {
  let paymentMethods =
    allowedPaymentMethodsByEntity.filter((value) => allowedPaymentMethods.includes(value)) ?? allowedPaymentMethods;

  paymentMethods.filter((method) => !DISABLED_PAYMENT_METHODS.includes(method));

  if (isHigherThanCashLimitAmount) {
    paymentMethods = paymentMethods.filter((method) => method !== PaymentMethodType.Cash);
  }

  if (isOutBnplAmountRange) {
    paymentMethods = orderPaymentMethodThatExceedLimits({
      paymentMethod: PaymentMethodType.Bnpl,
      methods: paymentMethods,
    });
  }

  return paymentMethods;
};
