import { Flex, Text } from '@chakra-ui/layout';
import { useTranslation } from 'react-i18next';
import Description from 'app/pages/frames/components/Description';
import { FormCustomer } from 'app/pages/frames/components/Form/FormCustomer/FormCustomer';
import { PaymentMethodType } from 'app/util/constants';
import { ReactNode } from 'react';
import { Form } from 'react-final-form';
import type { FC } from 'react';
import { useConfigContext } from 'app/context/ConfigContext';
import { CheckoutStatus } from 'common/constants';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { IoMailUnread, IoMailUnreadOutline } from 'react-icons/io5';
import { Icon } from '@chakra-ui/icon';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { PaymentFormSubmitButton } from '../../components/Form/FormShipping/PaymentFormSubmitButton';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';
import { BasicFormCardValues, CustomerFormValues } from '../../util/interface';
import { useExternalSubmitTrigger } from 'app/features/externalSubmit/hooks/useExternalSubmitTrigger';

export interface DirectDebitContainerProps {
  paymentMethodType: PaymentMethodType;
  InformationComponent: FC;
}

const T_ROOT = 'iFrame.checkout';

const DirectDebitContainer: FC<DirectDebitContainerProps> = ({ paymentMethodType, InformationComponent }) => {
  const { t } = useTranslation();
  const { setFormValues } = usePaymentFormStore();
  const { sendAddPaymentInfo } = useAnalytics();
  const { updateSubmitTrigger } = useExternalSubmitTrigger();

  const onHandleSubmit = (formValues: CustomerFormValues | BasicFormCardValues) => {
    setFormValues(formValues);
    sendAddPaymentInfo();
  };

  return (
    <Form
      onSubmit={onHandleSubmit}
      render={({ handleSubmit, submitting }) => {
        updateSubmitTrigger(handleSubmit);
        return (
          <DirectDebitForm
            handleSubmit={handleSubmit}
            submitting={submitting}
            InformationComponent={InformationComponent}
          >
            {paymentMethodType === PaymentMethodType.Bnpl && <Description text={t(`${T_ROOT}.descriptionBnpl`)} />}
          </DirectDebitForm>
        );
      }}
    />
  );
};

interface DirectDebitFormProps {
  handleSubmit: () => void;
  submitting: boolean;
  InformationComponent: FC;
  children: ReactNode;
}

const DirectDebitForm = ({ handleSubmit, submitting, InformationComponent, children }: DirectDebitFormProps) => {
  const { t } = useTranslation();
  const { checkoutRequest, isIntegration, isDatalogic } = useCheckoutFrameContext();
  const {
    iframe: {
      options,
      config: { useExternalSubmit },
    },
  } = useConfigContext();
  const { selectedPaymentMethod } = usePaymentFormStore();
  const isCash = selectedPaymentMethod === PaymentMethodType.Cash;
  const isPaymentMethodInfoRequested: boolean = options?.paymentMethodInformation?.display ?? isIntegration;
  const { validateIcon, colorIconTheme } = useThemeConfig();
  const { recurrent: isRecurrent, openAmount, status, needsShippingContact } = checkoutRequest;
  const disableSubmit = status !== CheckoutStatus.ISSUED;
  const { isLoading } = usePaymentFormStore();
  return (
    <>
      {isPaymentMethodInfoRequested && <InformationComponent />}
      <form onSubmit={handleSubmit}>
        {!isIntegration && (isRecurrent || openAmount) && <FormCustomer />}
        {children}
        <Flex alignItems='flex-start' marginInlineStart={4} marginTop={3}>
          <Icon
            as={validateIcon(IoMailUnread, IoMailUnreadOutline)}
            w={6}
            h={6}
            marginRight={3}
            color={colorIconTheme}
          />
          <Text fontSize='sm'>
            {t(`${T_ROOT}.${isCash && isDatalogic ? 'conektaCashReferenceMessage' : 'referenceMessage'}`)}
          </Text>
        </Flex>
        {!useExternalSubmit && (
          <PaymentFormSubmitButton
            submitting={submitting}
            isLoading={isLoading}
            disabled={disableSubmit}
            needsShippingContact={needsShippingContact}
          />
        )}
      </form>
    </>
  );
};

export default DirectDebitContainer;
