import { useTranslation } from 'react-i18next';
import { IOptionType } from 'app/components/Select/interface';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import {
  BinPhysicalInformation,
  MonthsWithoutInterestInformation,
  FormCardInformation,
  FormCustomer,
  FieldSelectEvaluated,
} from 'app/pages/frames/components';
import { getFormControlProps } from 'app/pages/frames/components/Form/FieldEvaluated/helpers';
import {
  DEFAULT_MSI_SELECTED_OPTION,
  formCardFieldNames,
  formControlsPropsCard,
  monthlyInstallmentsInitialState,
  tRootCardForm,
} from 'app/pages/frames/components/Form/FormCard/constants';
import { useMonthlyInstallments } from 'app/pages/frames/hooks/monthlyInstallments';
import { useBinPhysical } from 'app/pages/frames/hooks/useBinPhysical';
import { getBinFromCardNumber, monthlyInstallmentsInitialValue } from 'app/util/constants';
import { FormApi } from 'final-form';
import { useState } from 'react';

import { isMonthlyInstallmentsSelectDisabled, parseMonthlyInstallmentsToOptionTypes } from './helpers';
import { BasicFormCardProps, IMonthlyInstallment } from './interfaces';
import { useConfigContext } from 'app/context/ConfigContext';
import { CheckoutStatus } from 'common/constants';
import { InfoBanner } from '../../infoBanner';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { PaymentFormSubmitButton } from '../FormShipping/PaymentFormSubmitButton';

const MONTHLY_INSTALLMENTS_EXCLUSIVE_CITIBANAMEX = 18;

export const BasicFormCard = ({ form, submitting, values }: BasicFormCardProps) => {
  const { checkoutRequest, isIntegration } = useCheckoutFrameContext();
  const { isLoading } = usePaymentFormStore();
  const { monthlyInstallments: monthlyInstallmentsName } = formCardFieldNames;
  const {
    recurrent: isRecurrent,
    monthlyInstallmentsEnabled = false,
    openAmount,
    status,
    monthlyInstallmentsOptions: monthlyInstallmentsOptionsConfiguredByMerchant,
    needsShippingContact,
  } = checkoutRequest;
  const disableSubmit = status !== CheckoutStatus.ISSUED;
  const { t } = useTranslation();
  const {
    iframe: {
      config: { useExternalSubmit },
      callbacks: { onEventListener } = { onEventListener: undefined },
    },
  } = useConfigContext();
  const showExclusiveMSIInfo = monthlyInstallmentsOptionsConfiguredByMerchant.find(
    (x: number) => x === MONTHLY_INSTALLMENTS_EXCLUSIVE_CITIBANAMEX,
  );

  const [binValue, setBinValue] = useState<string>('');
  const { binPhysicalProduct, validateBinPhysicalProduct } = useBinPhysical();
  const { getAvailableMonthlyInstallments } = useMonthlyInstallments();

  const [monthlyInstallments, setMonthlyInstallments] = useState<IMonthlyInstallment[]>([]);
  const [monthlyInstallmentsOptions, setMonthlyInstallmentsOptions] = useState<IOptionType[]>([
    ...monthlyInstallmentsInitialState(t),
  ]);

  const validateBinCard = async (cardForm: FormApi<any>): Promise<void> => {
    const { change, getFieldState } = cardForm;
    const cardNumberState = getFieldState(formCardFieldNames.cardNumber);
    const cardNumberHasAnError: string | undefined = cardNumberState?.error;
    const bin = getBinFromCardNumber(cardNumberState?.value);

    validateBinPhysicalProduct(cardForm);

    if (cardNumberHasAnError) {
      setMonthlyInstallmentsOptions([...monthlyInstallmentsInitialState(t)]);
      change('monthlyInstallments', monthlyInstallmentsInitialValue);
    } else {
      if (binValue !== bin) {
        setBinValue(bin);
        if (monthlyInstallmentsEnabled) {
          const monthlyInstalmentsResponse = await getAvailableMonthlyInstallments(checkoutRequest.id, bin);

          setMonthlyInstallments(monthlyInstalmentsResponse);
          setMonthlyInstallmentsOptions([
            ...monthlyInstallmentsInitialState(t),
            ...parseMonthlyInstallmentsToOptionTypes(monthlyInstalmentsResponse, t),
          ]);
        }
      }
    }
  };
  const onMonthlyInstallmentsFieldChange = (value: number) => {
    const monthlyInstallmentSelected: IMonthlyInstallment | undefined = monthlyInstallments.find(
      ({ monthlyInstallments: monthlyInstallment }: IMonthlyInstallment) => monthlyInstallment === value,
    );
    onEventListener &&
      onEventListener({
        name: 'monthlyInstallmentSelected',
        value: monthlyInstallmentSelected,
      });
  };

  return (
    <>
      {!isIntegration && (isRecurrent || openAmount) && <FormCustomer />}

      <FormCardInformation form={form} validateCardNumber={validateBinCard} />

      {monthlyInstallmentsEnabled && (
        <div className='fields__monthlyInstallments'>
          <FieldSelectEvaluated
            disabled={isMonthlyInstallmentsSelectDisabled(monthlyInstallmentsOptions)}
            options={monthlyInstallmentsOptions}
            {...getFormControlProps(monthlyInstallmentsName, formControlsPropsCard, t)}
            {...{ values }}
            onChange={onMonthlyInstallmentsFieldChange}
            defaultValue={DEFAULT_MSI_SELECTED_OPTION}
            tooltipHelper={<MonthsWithoutInterestInformation />}
          />
        </div>
      )}
      <BinPhysicalInformation show={binPhysicalProduct} />
      {showExclusiveMSIInfo && (
        <InfoBanner>
          {t(`${tRootCardForm}.monthsWithoutInterest.banamexInfo`, {
            installments: MONTHLY_INSTALLMENTS_EXCLUSIVE_CITIBANAMEX,
          })}
        </InfoBanner>
      )}
      {!useExternalSubmit && (
        <PaymentFormSubmitButton
          submitting={submitting}
          isLoading={isLoading}
          disabled={disableSubmit}
          needsShippingContact={needsShippingContact}
        />
      )}
    </>
  );
};
