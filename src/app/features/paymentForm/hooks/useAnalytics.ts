import { sendDataToDataLayer } from 'app/util/analytics';
import { PaymentMethodType } from 'app/util/constants';
import { useGACheckoutDTOFactory } from '../factories/ga-checkout-dto.factory';
import { useCheckoutFrameContext } from '../state/CheckoutFrameContext';
import { usePaymentFormStore } from '../state/paymentFormState';
import { AnalyticsEvents } from './constants';

export const useAnalytics = () => {
  const { checkoutRequest, entity, formattedAmount } = useCheckoutFrameContext();
  const { parseCheckoutToGACheckoutDTO, parseGAPurchaseDTO } = useGACheckoutDTOFactory();
  const { selectedPaymentMethod } = usePaymentFormStore();

  const sendBeginCheckout = () => {
    const beginCheckoutData = parseCheckoutToGACheckoutDTO(checkoutRequest, entity, formattedAmount);
    sendDataToDataLayer(AnalyticsEvents.beginCheckout, { ...beginCheckoutData });
  };

  const sendPurchase = (requireChallenge: boolean = false, threeDSResult?: string) => {
    const purchaseData = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!);
    sendDataToDataLayer(AnalyticsEvents.purchase, {
      ...purchaseData,
      require_challenge: requireChallenge,
      ...(threeDSResult && { threeDS_result: threeDSResult }),
    });
  };

  const sendAddPaymentInfo = () => {
    const addPaymentInfoData = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!);
    sendDataToDataLayer(AnalyticsEvents.addPaymentInfo, { ...addPaymentInfoData });
  };

  const sendSelectPaymentMethod = (paymentMethod: PaymentMethodType) => {
    const selectPaymentMethodData = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, paymentMethod);
    sendDataToDataLayer(AnalyticsEvents.selectPaymentMethod, { ...selectPaymentMethodData });
  };

  const sendRedirectToSuccessPage = () => {
    const redirectToSuccessPageInfo = parseGAPurchaseDTO(
      checkoutRequest,
      entity,
      formattedAmount,
      selectedPaymentMethod!,
    );
    sendDataToDataLayer(AnalyticsEvents.redirectToSuccessPage, { ...redirectToSuccessPageInfo });
  };

  const sendAddShippingInfo = () => {
    const addShippingInfoDatalayer = parseGAPurchaseDTO(
      checkoutRequest,
      entity,
      formattedAmount,
      selectedPaymentMethod!,
    );
    sendDataToDataLayer(AnalyticsEvents.addShippingInfo, { ...addShippingInfoDatalayer });
  };

  const send3DSDatalayer = (eventName: string, eventData: any) => {
    const addPaymentInfoData = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!);
    sendDataToDataLayer(eventName, { ...eventData, ...addPaymentInfoData });
  };

  const sendError = (description: string, error: string, fatal = false) =>
    sendDataToDataLayer(AnalyticsEvents.exception, { description, error, fatal });

  const sendShare = (shareMethod: string) => {
    const shareDatalayer = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!);
    sendDataToDataLayer(AnalyticsEvents.share, { ...shareDatalayer, share_method: shareMethod });
  };

  const sendShowShippingForm = () => {
    const shippingFormDatalayer = parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!);
    sendDataToDataLayer(AnalyticsEvents.showShippingForm, { ...shippingFormDatalayer });
  };

  const sendFinish3DSValidationDatalayer = (validationResult: boolean, requireChallenge: boolean) =>
    sendDataToDataLayer(AnalyticsEvents.finishThreeDSValidation, {
      ...parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!),
      threeDS_result: validationResult ? 'success' : 'failure',
      require_challenge: requireChallenge,
    });

  const sendStart3DSDatalayer = (requireChallenge: boolean) =>
    sendDataToDataLayer(AnalyticsEvents.startThreeDSValidation, {
      ...parseGAPurchaseDTO(checkoutRequest, entity, formattedAmount, selectedPaymentMethod!),
      require_challenge: requireChallenge,
    });

  return {
    sendBeginCheckout,
    sendAddPaymentInfo,
    sendAddShippingInfo,
    sendPurchase,
    send3DSDatalayer,
    sendSelectPaymentMethod,
    sendRedirectToSuccessPage,
    sendError,
    sendShare,
    sendShowShippingForm,
    sendStart3DSDatalayer,
    sendFinish3DSValidationDatalayer,
  };
};
