import { useTranslation } from 'react-i18next';
import { BinPhysicalInformation, FormCardInformation } from 'app/pages/frames/components';
import { PaymentMethodContent } from 'app/pages/frames/components/PaymentMethods/PaymentMethodContent';
import { useBinPhysical } from 'app/pages/frames/hooks/useBinPhysical';
import { truncateButtonStringLength } from 'app/util/constants';
import { truncateString } from 'app/util/strings';
import { useCallback, useContext } from 'react';
import { Form } from 'react-final-form';
import { ThemeContext } from 'styled-components';

import { FormMethodCard, WrapperFormCard } from '../FormCard/styles';
import { useConfigContext } from 'app/context/ConfigContext';
import { FormButton } from 'app/pages/frames/container/DirectDebitContainer/FormButton';
import { useExternalSubmitTrigger } from 'app/features/externalSubmit/hooks/useExternalSubmitTrigger';

const tRoot: string = 'iFrame.checkout';

export const FormTokenizer = ({ handleSubmit: onSubmit, initialValues, loading }: any) => {
  const { t } = useTranslation();
  const { binPhysicalProduct, validateBinPhysicalProduct } = useBinPhysical();
  const {
    colors: { font },
  } = useContext(ThemeContext);
  const {
    iframe: {
      options,
      config: { useExternalSubmit },
    },
  } = useConfigContext();
  const { updateSubmitTrigger } = useExternalSubmitTrigger();

  const { button: { text: submitButtonFromXprops } = { text: '' } } = options;
  const submitButtonText: string = submitButtonFromXprops
    ? truncateString(submitButtonFromXprops, truncateButtonStringLength)
    : t(`${tRoot}.buttonSubmitContinue`);

  const handleSubmitLocal = useCallback((values: any) => {
    onSubmit(values);
  }, []);

  return (
    <Form
      onSubmit={handleSubmitLocal}
      initialValues={initialValues}
      render={({ form, handleSubmit, submitting }) => {
        updateSubmitTrigger(handleSubmit);
        return (
          <WrapperFormCard
            className='FormCard'
            onSubmit={handleSubmit}
            iframeBackgroundColor={options?.iframe?.backgroundColor}
            iframeColorText={options?.iframe?.colorText}
            buttonBackgroundColor={options?.button?.backgroundColor}
            buttonColorText={options?.button?.colorText}
            noValidate
          >
            <PaymentMethodContent>
              <FormMethodCard color={font} className='FormCard__form'>
                <FormCardInformation form={form} validateCardNumber={validateBinPhysicalProduct} />
                <BinPhysicalInformation show={binPhysicalProduct} />
                {!useExternalSubmit && (
                  <FormButton submitting={submitting} loading={loading}>
                    {submitButtonText}
                  </FormButton>
                )}
              </FormMethodCard>
            </PaymentMethodContent>
          </WrapperFormCard>
        );
      }}
    />
  );
};
