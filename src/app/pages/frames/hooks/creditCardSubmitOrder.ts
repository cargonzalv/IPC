import { useTranslation } from 'react-i18next';
import { createOrderWithCreditCardService, paymentSourceService } from 'app/pages/frames/http/orderService';
import { ThreeDsValues } from 'app/util/constants';
import { useEffect } from 'react';
import { useThreeDSStore } from 'app/features/ThreeDS/state/threeDSContext';
import { PaymentSource } from 'app/features/ThreeDS/model/PaymentSource';
import { Order } from 'app/features/ThreeDS/model/Order';
import { CreateOrderPayload, PaymentSourceDTO } from 'common/interface';
import { useOrderFactory } from '../factories/orderFactory';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

interface Props {
  paymentRequestData: PaymentSourceDTO;
  initialTime: Date;
  binNumber?: string;
  formCard?: Record<string, any>;
}

export const useCreditCardSubtmitOrder = () => {
  const { t } = useTranslation();
  const { checkoutRequest, entity } = useCheckoutFrameContext();
  const { setShowModal, setShowConfirmation, setOrderResponse } = useThreeDSStore();
  const { parsePaymentSourceToOrderDTO } = useOrderFactory();
  const { sendStart3DSDatalayer, sendFinish3DSValidationDatalayer } = useAnalytics();

  useEffect(() => {
    validate3DS();
  }, []);

  function validate3DS() {
    const { threeDs } = entity || {};
    if (!threeDs) {
      throw new Error(t(`iFrame.checkout.cardForm.missedThreeDSFlag`) as string);
    }
  }

  async function createOrder({ paymentRequestData, initialTime, binNumber }: Props) {
    let order: Order;
    let showConfirmation = false;
    const paymentSource: PaymentSource = await paymentSourceService(paymentRequestData);

    if (!paymentSource.customerInfo) {
      throw new Error('customerId was not returned from "orderPayment"');
    }
    const threeDsMode = checkoutRequest?.threeDs || entity?.threeDs || ThreeDsValues.off;
    const orderBody: CreateOrderPayload = parsePaymentSourceToOrderDTO(
      paymentRequestData,
      paymentSource,
      initialTime,
      threeDsMode,
    );

    order = await createOrderWithCreditCardService({
      binNumber,
      fingerprint: orderBody.fingerprint,
      data: orderBody,
    });
    if (order.nextAction) {
      setShowModal(true);
    } else {
      showConfirmation = true;
      /**
       * This is for 3DS smart instant approved
       * we need to track the 3DS validation events even though
       * it is done in the back end (through smart mode) to have
       * the metrics correctly
       */
      if (threeDsMode != ThreeDsValues.off) {
        order.requireChallenge = false;
        order.threeDSResult = 'success';
        sendStart3DSDatalayer(false);
        sendFinish3DSValidationDatalayer(true, false);
      }
    }
    setShowConfirmation(showConfirmation);
    setOrderResponse({
      order,
      paymentSource,
    });
  }

  return {
    createOrder,
  };
};
