import { Form } from 'react-final-form';

import { BasicFormCard } from './BasicFormCard';
import { formCardDataValuesTokenization } from './constants';
import { BasicFormCardValues, CustomerFormValues } from 'app/pages/frames/util/interface';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';
import { useExternalSubmitTrigger } from 'app/features/externalSubmit/hooks/useExternalSubmitTrigger';

export const FormCard = () => {
  const { setFormValues } = usePaymentFormStore();
  const { sendAddPaymentInfo } = useAnalytics();
  const { updateSubmitTrigger } = useExternalSubmitTrigger();

  const onHandleSubmit = (formValues: CustomerFormValues | BasicFormCardValues) => {
    setFormValues(formValues);
    sendAddPaymentInfo();
  };

  return (
    <Form
      onSubmit={onHandleSubmit as (formValues: BasicFormCardValues) => void}
      initialValues={formCardDataValuesTokenization}
      render={({ form, handleSubmit, submitting, values }) => {
        updateSubmitTrigger(handleSubmit);
        return (
          <form onSubmit={handleSubmit} noValidate autoComplete='off'>
            <BasicFormCard form={form} submitting={submitting} values={values} />
          </form>
        );
      }}
    />
  );
};
