import {
  ALL_OPTIONS_OUTLINED_ICONS,
  ALL_OPTIONS_SOLID_ICONS,
  DATALOGIC_OPTIONS_OUTLINED_ICONS,
  DATALOGIC_OPTIONS_SOLID_ICONS,
  IconsDictionary,
} from './constants';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { PaymentMethodType } from 'app/util/constants';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';

const getDefaultIcons = (isDatalogic: boolean, isCashPayment: boolean) => {
  return isDatalogic && isCashPayment ? DATALOGIC_OPTIONS_OUTLINED_ICONS : ALL_OPTIONS_OUTLINED_ICONS;
};

const getSolidIcons = (isDatalogic: boolean, isCashPayment: boolean) => {
  return isDatalogic && isCashPayment ? DATALOGIC_OPTIONS_SOLID_ICONS : ALL_OPTIONS_SOLID_ICONS;
};

const buildShareOptions = (isFlatMode: boolean, defaultIcons: IconsDictionary, solidIcons: IconsDictionary) => {
  const shareOptionsIcons = isFlatMode ? solidIcons : defaultIcons;
  const shareOptions = Object.keys(shareOptionsIcons);
  return { shareOptions, shareOptionsIcons };
};

export const useShareOptions = () => {
  const { isFlatMode } = useThemeConfig();
  const { selectedPaymentMethod } = usePaymentFormStore();
  const { isDatalogic } = useCheckoutFrameContext();
  const isCashPayment = selectedPaymentMethod === PaymentMethodType.Cash;

  const getShareOptions = () => {
    const defaultIcons = getDefaultIcons(isDatalogic, isCashPayment);
    const solidIcons = getSolidIcons(isDatalogic, isCashPayment);
    return buildShareOptions(isFlatMode, defaultIcons, solidIcons);
  };
  return { getShareOptions };
};
