import { IConfirmation, OrderResponse } from 'app/pages/frames/util/interface';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Order } from '../model/Order';
import { defaultPaymentSource } from './selectors';

interface ThreeDSState extends Omit<IConfirmation, 'shippingContact' | 'selectedPaymentMethod'> {
  showThreeDSModal: boolean;
  setShowModal: (showThreeDSModal: boolean) => void;
  setOrderResponse: (orderResponse: OrderResponse) => void;
  setShowConfirmation: (showConfirmation: boolean) => void;
  updateOrder: (order: Order) => void;
}

export const useThreeDSStore = create<ThreeDSState>()(
  devtools(
    (set) => ({
      showThreeDSModal: false,
      showConfirmation: false,
      setShowModal: (showThreeDSModal: boolean) => set({ showThreeDSModal }),
      setOrderResponse: (orderResponse: OrderResponse) => set({ orderResponse }),
      setShowConfirmation: (showConfirmation: boolean) => set({ showConfirmation }),
      updateOrder: (order: Order) =>
        set((prevState) => ({
          orderResponse: {
            ...prevState.orderResponse,
            paymentSource: prevState.orderResponse?.paymentSource || defaultPaymentSource,
            order,
          },
        })),
    }),
    {
      name: 'Component/3DS',
    },
  ),
);
