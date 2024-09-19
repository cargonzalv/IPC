import { Trans, useTranslation } from 'react-i18next';
import { PaymentMethodType } from 'app/util/constants';
import { apiAmountToCurrencyString, currencyFormat } from 'app/util/currency';
import { formatUTCToLocaleDate } from 'app/util/dates';

const root = 'iFrame.confirmation';
const paymentMethod = `${root}.${PaymentMethodType.Card.toString().toLowerCase()}`;
export const SubscriptionInformation = ({ plan }: any) => {
  const { t, i18n } = useTranslation();
  const {
    amount = 0,
    currency,
    interval: intervalLocal,
    subscriptionStart: subscriptionStartLocal,
    subscriptionEnd: subscriptionEndLocal,
    trialEnd: trialEndLocal,
  } = plan;
  const subscriptionStart = formatUTCToLocaleDate(subscriptionStartLocal.toString(), i18n.language);
  const subscriptionEnd = subscriptionEndLocal
    ? formatUTCToLocaleDate(subscriptionEndLocal.toString(), i18n.language)
    : '';
  const trialEnd = trialEndLocal ? formatUTCToLocaleDate(trialEndLocal.toString(), i18n.language) : '';
  const amountFormated = currencyFormat(currency, apiAmountToCurrencyString(amount));
  const interval: string = t(`${paymentMethod}.intervalOptions.${intervalLocal}`);
  return (
    <>
      <p className="checkout__subscription-title">
        <Trans
          i18nKey={`${paymentMethod}.subscription_info.title`}
          values={{
            amount: amountFormated,
            interval: interval,
          }}
        />
      </p>
      {subscriptionEnd ? (
        <p className="checkout__subscription-info">
          <Trans
            i18nKey={`${paymentMethod}.subscription_info.startToEndInfo`}
            values={{
              subscriptionStart,
              subscriptionEnd,
            }}
          />
        </p>
      ) : (
        <p className="checkout__subscription-info">
          <Trans
            i18nKey={`${paymentMethod}.subscription_info.startInfo`}
            values={{
              subscriptionStart,
            }}
          />
        </p>
      )}
      {trialEnd && (
        <p className="checkout__subscription-info">
          <Trans
            i18nKey={`${paymentMethod}.subscription_info.trialInfo`}
            values={{
              trialEnd,
            }}
          />
        </p>
      )}
    </>
  );
};
