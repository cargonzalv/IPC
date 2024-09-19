import { useCheckoutFrameStore } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { IConektaError } from 'app/context/interface';
import { IMonthlyInstallment } from 'app/pages/frames/components/Form/FormCard/interfaces';
import { IShippingContact } from 'app/pages/frames/components/Form/FormShipping/interface';
import { BasicFormCardValues, CustomerFormValues } from 'app/pages/frames/util/interface';
import { PaymentMethodType } from 'app/util/constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const shouldShowShippingFormFirst = import.meta.env.VITE_SHOW_SHIPPING_FORM_FIRST === 'true';

interface PaymentFormState {
  isLoading: boolean;
  isGlobalLoading: boolean;
  showShippingForm: boolean;
  appError?: IConektaError;
  formValues?: CustomerFormValues | BasicFormCardValues;
  monthlyInstallmentsOptions: IMonthlyInstallment[];
  shippingContact?: IShippingContact;
  selectedPaymentMethod?: PaymentMethodType;
  sendForm: boolean;
  setSelectedPaymentMethod: (selectedPaymentMethod: PaymentMethodType) => void;
  setShippingContact: (shippingContact: IShippingContact) => void;
  setMonthlyInstallmentsOptions: (monthlyInstallmentsOptions: IMonthlyInstallment[]) => void;
  setShowShippingForm: (showShippingForm: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setGlobalLoading: (isLoading: boolean) => void;
  setAppError: (appError?: IConektaError) => void;
  setSendForm: (sendForm: boolean) => void;
  setFormValues: (formValues: CustomerFormValues | BasicFormCardValues) => void;
  resetFormValues: () => void;
}

export const usePaymentFormStore = create<PaymentFormState>()(
  devtools(
    (set, get) => ({
      isLoading: false,
      isGlobalLoading: false,
      appError: undefined,
      showShippingForm: shouldShowShippingFormFirst,
      monthlyInstallmentsOptions: [],
      sendForm: false,
      setSelectedPaymentMethod: (selectedPaymentMethod: PaymentMethodType) =>
        set({ showShippingForm: false, selectedPaymentMethod }, false, 'setSelectedPaymentMethod'),
      setShippingContact: (shippingContact: IShippingContact) => {
        set(
          { shippingContact, sendForm: !shouldShowShippingFormFirst, showShippingForm: !shouldShowShippingFormFirst },
          false,
          'setShippingContact',
        );
      },
      setMonthlyInstallmentsOptions: (monthlyInstallmentsOptions: IMonthlyInstallment[]) =>
        set({ monthlyInstallmentsOptions }),
      setShowShippingForm: (showShippingForm: boolean) => set({ showShippingForm }, false, 'setShowShippingForm'),
      setIsLoading: (isLoading: boolean) => set({ isLoading }, false, 'setIsLoading'),
      setGlobalLoading: (isLoading: boolean) => set({ isLoading, isGlobalLoading: isLoading }),
      setAppError: (appError?: IConektaError) => set({ appError, sendForm: false }, false, 'setAppError'),
      setSendForm: (sendForm: boolean) => set({ sendForm }, false, 'setSendForm'),
      setFormValues: (formValues: CustomerFormValues | BasicFormCardValues) => {
        const needsShippingContact = useCheckoutFrameStore.getState().state.checkoutRequest.needsShippingContact;
        const shippingContact = get().shippingContact;
        const showShippingForm = needsShippingContact && !shippingContact;
        set({ formValues, showShippingForm, sendForm: !showShippingForm }, false, 'setFormValues');
      },
      resetFormValues: () => set({ formValues: undefined }),
    }),
    {
      name: 'Component/Form',
    },
  ),
);
