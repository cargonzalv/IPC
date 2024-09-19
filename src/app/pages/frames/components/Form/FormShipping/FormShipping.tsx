import { useEffect } from 'react';

import { FORM_CONTROLS_PROPS_SHIPPING } from './constants';

import { useTranslation } from 'react-i18next';
import FieldEvaluated from 'app/pages/frames/components/Form/FieldEvaluated';
import { getFormControlProps } from 'app/pages/frames/components/Form/FieldEvaluated/helpers';
import { Form } from 'react-final-form';
import { Icon } from '@chakra-ui/react';
import EmphasisText from 'app/components/EmphasisText';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { MdLocalShipping, MdOutlineLocalShipping, MdPerson, MdPersonOutline } from 'react-icons/md';
import { useShippingForm } from 'app/pages/frames/hooks/useShippingForm';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { PaymentFormSubmitButton } from './PaymentFormSubmitButton';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';
import { useExternalSubmitTrigger } from 'app/features/externalSubmit/hooks/useExternalSubmitTrigger';
import { useConfigContext } from 'app/context/ConfigContext';

interface ShippingFormTitleProps {
  icon: any;
  title: string;
  color?: string;
}

const ShippingFormTitle = ({ icon, title, color }: ShippingFormTitleProps) => {
  return (
    <EmphasisText display='flex' alignItems='center' gap='2' marginBottom='13' marginTop='3'>
      <Icon as={icon} w={6} h={6} color={color} />
      {title}
    </EmphasisText>
  );
};

export const FormShipping = () => {
  const { t } = useTranslation();
  const { validateIcon, colorIconTheme } = useThemeConfig();
  const titles = {
    personalInformationSectionTitle: t('iFrame.checkout.shippingForm.personalInformationSectionTitle'),
    shippingSectionTitle: t('iFrame.checkout.shippingForm.shippingSectionTitle'),
  };
  const { onShippingFormSubmit } = useShippingForm();
  const { isLoading } = usePaymentFormStore();
  const { sendShowShippingForm } = useAnalytics();
  const {
    iframe: {
      config: { useExternalSubmit },
    },
  } = useConfigContext();
  const { updateSubmitTrigger } = useExternalSubmitTrigger();

  useEffect(() => {
    sendShowShippingForm();
  }, []);

  return (
    <Form
      onSubmit={onShippingFormSubmit}
      render={({ handleSubmit, submitting }) => {
        updateSubmitTrigger(handleSubmit);
        return (
          <form onSubmit={handleSubmit} className='ShippingForm__container'>
            <div className='ShippingForm'>
              <div className='ShippingForm__form'>
                <ShippingFormTitle
                  icon={validateIcon(MdPerson, MdPersonOutline)}
                  color={colorIconTheme}
                  title={titles.personalInformationSectionTitle}
                />
                {/* Phone */}
                <FieldEvaluated {...getFormControlProps('shippingContact.phone', FORM_CONTROLS_PROPS_SHIPPING, t)} />
                <ShippingFormTitle
                  icon={validateIcon(MdLocalShipping, MdOutlineLocalShipping)}
                  color={colorIconTheme}
                  title={titles.shippingSectionTitle}
                />
                {/* Street */}
                <FieldEvaluated
                  {...getFormControlProps('shippingContact.address.street1', FORM_CONTROLS_PROPS_SHIPPING, t)}
                />
                <div className='fields__phone-and-postalCode'>
                  {/* Postal Code */}
                  <FieldEvaluated
                    {...getFormControlProps('shippingContact.address.postalCode', FORM_CONTROLS_PROPS_SHIPPING, t)}
                  />
                  {/* State */}
                  <FieldEvaluated
                    {...getFormControlProps('shippingContact.address.state', FORM_CONTROLS_PROPS_SHIPPING, t)}
                  />
                </div>
                <div className='fields__phone-and-postalCode'>
                  {/* City */}
                  <FieldEvaluated
                    {...getFormControlProps('shippingContact.address.city', FORM_CONTROLS_PROPS_SHIPPING, t)}
                  />
                  {/* Street 1 (MX Colony) */}
                  <FieldEvaluated
                    {...getFormControlProps('shippingContact.address.street2', FORM_CONTROLS_PROPS_SHIPPING, t)}
                  />
                </div>
              </div>
            </div>

            {!useExternalSubmit && (
              <PaymentFormSubmitButton
                submitting={submitting}
                isLoading={isLoading}
                isShippingForm
                needsShippingContact
              />
            )}
          </form>
        );
      }}
    />
  );
};
