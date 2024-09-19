import { PaymentSource } from 'app/features/ThreeDS/model/PaymentSource';
import { PaymentMethodType, Provider, ThreeDsValues } from 'app/util/constants';
import { getDifferenceInSeconds } from 'app/util/dates';
import { CreateOrderPayload, PaymentSourceDTO } from 'common/interface';

const threeDSModes: string[] = [ThreeDsValues.enable, ThreeDsValues.dynamic];

const checkThreeDSData = (paymentMethod: PaymentMethodType, threeDsFlag: string) => {
  const threeDSData: { threeDsMode?: string; returnUrl?: string } = {};
  if (paymentMethod === PaymentMethodType.Card && threeDSModes.includes(threeDsFlag)) {
    threeDSData.threeDsMode = threeDsFlag === ThreeDsValues.dynamic ? 'smart' : 'strict';
    threeDSData.returnUrl = window.location.href;
  }
  return threeDSData;
};

export const useOrderFactory = () => {
  const parsePaymentSourceToOrderDTO = (
    paymentRequestData: PaymentSourceDTO,
    paymentSource: PaymentSource,
    initialTime: Date,
    threeDsFlag: string = ThreeDsValues.off,
  ): CreateOrderPayload => {
    const { customerInfo, paymentKey = '', paymentSourceId = '' } = paymentSource || {};
    const timeTookToFillPaymentForm = getDifferenceInSeconds(new Date(), initialTime);
    const threeDSData = checkThreeDSData(paymentRequestData.paymentMethod, threeDsFlag);

    const orderBody: CreateOrderPayload = {
      ...paymentRequestData,
      customerInfo,
      fillPaymentFormTime: timeTookToFillPaymentForm,
      paymentKey,
      paymentSourceId,
      ...(paymentRequestData.paymentMethod === PaymentMethodType.Bnpl && { bnplProvider: Provider.nelo }),
      ...threeDSData,
    };

    return orderBody;
  };
  return { parsePaymentSourceToOrderDTO };
};
