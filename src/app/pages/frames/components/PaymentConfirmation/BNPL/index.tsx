import { useTranslation } from 'react-i18next';
import { FooterWhiteLabel } from 'app/pages/frames/components/FooterWhiteLabel';
import Header from 'app/pages/frames/components/PaymentConfirmation/Header';
import { parseShippingContactToString } from 'app/pages/frames/components/PaymentConfirmation/helpers';
import LabelAndText from 'app/pages/frames/components/PaymentConfirmation/LabelAndText';
import { useRedirectToHostedPaymentUrl } from 'app/pages/frames/helpers/redirections';
import { checkoutRequestType, paymentBrandLogos, PaymentMethodType } from 'app/util/constants';
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

import { ShareConfirmationWrapper } from '../ShareWrapper';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import {
  useOrderClientEmail,
  useOrderClientName,
  useOrderId,
  useUrlRedirect,
} from 'app/features/ThreeDS/state/selectors';

const paymentMethod = `iFrame.confirmation.${PaymentMethodType.Bnpl.toString().toLowerCase()}`;

const BNPL = ({ isIntegration, isSelfHosted, isSuccessPayment }: any) => {
  const orderId = useOrderId();
  if (!orderId) {
    return undefined;
  }
  const { shippingContact } = usePaymentFormStore();
  const themeContext: any = useContext(ThemeContext);
  const { checkoutRequest, entity, amountInCurrencyFormat } = useCheckoutFrameContext();
  const { t } = useTranslation();
  const { scheduleRedirection } = useRedirectToHostedPaymentUrl();

  const { type, redirectionTime } = checkoutRequest;
  const { name: companyName = '' } = entity;
  const urlRedirect = useUrlRedirect();
  const customerEmail = useOrderClientEmail();
  const customerName = useOrderClientName();
  const { enableWhiteLabel } = themeContext;

  const shippingAddress = shippingContact ? parseShippingContactToString(shippingContact) : '';
  const showShareSection = isSelfHosted && !isIntegration;

  useEffect(() => {
    if (isSuccessPayment && type === checkoutRequestType.hostedPayment && isIntegration) {
      scheduleRedirection(urlRedirect, redirectionTime);
    }
  }, []);

  return (
    <div className='IframePaymentConfirmation' id='IframePaymentConfirmation'>
      <Header formatedAmount={amountInCurrencyFormat} customerEmail={customerEmail} />

      <div className='payment-status'>
        {isSuccessPayment ? (
          <LabelAndText className='payment-status__amount'>
            <p>
              {t(`${paymentMethod}.success_description.first`)}
              <b>{companyName}</b>
              {t(`${paymentMethod}.success_description.second`)}
              <b>{amountInCurrencyFormat}</b>
              {t(`${paymentMethod}.success_description.three`)}
            </p>
          </LabelAndText>
        ) : (
          <LabelAndText className='payment-status__amount'>
            <p>
              {t(`${paymentMethod}.failure_description.first`)}
              <b>{amountInCurrencyFormat}</b>
              {t(`${paymentMethod}.failure_description.second`)}
            </p>
          </LabelAndText>
        )}

        {/* Customer Name */}
        <LabelAndText label={t(`${paymentMethod}.buyer`)} text={customerName} />
        <div className='payment-status__info'>
          {/* Payment Method */}
          <div className='payment-status__payment-method'>
            <LabelAndText
              label={t(`${paymentMethod}.payment_method`)}
              text={t(`${paymentMethod}.payment_method_text`)}
            />
            <img src={paymentBrandLogos.nelo} alt='' className='nelo' />
          </div>
          {/* Order Number */}
          <LabelAndText classNameText='LabelAndText__text' label={t(`${paymentMethod}.number_order`)} text={orderId} />
        </div>
        {/* Share icons */}
        {showShareSection && isSuccessPayment && <ShareConfirmationWrapper />}
        <div className='payment-status__contact-info'>
          {/* Address */}
          {shippingAddress ? (
            <LabelAndText
              className='payment-status__contact-info-address'
              label={t(`${paymentMethod}.shipping_address`)}
              text={shippingAddress}
            />
          ) : null}
        </div>

        {enableWhiteLabel && <FooterWhiteLabel />}
      </div>
    </div>
  );
};

export default BNPL;
