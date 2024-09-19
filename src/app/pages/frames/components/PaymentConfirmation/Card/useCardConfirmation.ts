import { parseShippingContactToString } from '../helpers';
import { useConfigContext } from 'app/context/ConfigContext';
import { IMonthlyInstallment } from '../../Form/FormCard/interfaces';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { BasicFormCardValues } from 'app/pages/frames/util/interface';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useCustomer, useUrlRedirect } from 'app/features/ThreeDS/state/selectors';

export const useCardConfirmation = () => {
  const { formValues, monthlyInstallmentsOptions, shippingContact } = usePaymentFormStore();
  const formCardData = formValues as BasicFormCardValues;
  const urlRedirect = useUrlRedirect();
  const customer = useCustomer();
  const { checkoutRequest, entity, amountInCurrencyFormat } = useCheckoutFrameContext();
  const {
    iframe: { conektaSource },
  } = useConfigContext();

  const { name } = checkoutRequest;
  const { name: companyName = '' } = entity;

  const shippingAddress = shippingContact ? parseShippingContactToString(shippingContact) : '';
  const monthlyInstallments: IMonthlyInstallment | undefined = formCardData?.monthlyInstallments
    ? monthlyInstallmentsOptions.find((option) => option.monthlyInstallments === formCardData?.monthlyInstallments)
    : undefined;
  return {
    companyName,
    amountInCurrencyFormat,
    shippingAddress,
    name,
    email: customer.email,
    customerName: customer.name,
    urlRedirect,
    conektaSource,
    monthlyInstallments,
  };
};
