import { PaymentSource } from 'app/features/ThreeDS/model/PaymentSource';
import { useThreeDSStore } from 'app/features/ThreeDS/state/threeDSContext';
import { createOrderService, paymentSourceService } from 'app/pages/frames/http/orderService';
import { CreateOrderPayload, PaymentSourceDTO } from 'common/interface';
import { useOrderFactory } from '../factories/orderFactory';
import { getPropertyByPath } from 'app/util/helpers';

interface Props {
  paymentRequestData: PaymentSourceDTO;
  initialTime: Date;
}

export const useOrderWithPaymentSourcePost = () => {
  const { setOrderResponse, setShowConfirmation } = useThreeDSStore();
  const { parsePaymentSourceToOrderDTO } = useOrderFactory();

  async function createOrder({ paymentRequestData, initialTime }: Props) {
    const paymentSource: PaymentSource = await paymentSourceService(paymentRequestData);

    if (!paymentSource.customerInfo) {
      throw new Error('customerId was not returned from "orderPayment"');
    }

    const createOrderPayload: CreateOrderPayload = parsePaymentSourceToOrderDTO(
      paymentRequestData,
      paymentSource,
      initialTime,
    );
    const order = await createOrderService(createOrderPayload);

    if (order.paymentStatus === 'error') {
      const errorMessage = getPropertyByPath(order.errors, '[0].message', '');
      throw new Error(errorMessage);
    }
    setShowConfirmation(true);
    setOrderResponse({ order, paymentSource });
  }

  return {
    createOrder,
  };
};
