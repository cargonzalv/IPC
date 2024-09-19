import { Trans, useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { Box, Link, Text } from '@chakra-ui/layout';
import { redirect } from 'app/pages/frames/helpers/redirections';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useUrlRedirect } from 'app/features/ThreeDS/state/selectors';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

const RedirectTimer = () => {
  const { checkoutRequest, entity } = useCheckoutFrameContext();
  const urlRedirect = useUrlRedirect();
  const { t } = useTranslation();
  const { sendRedirectToSuccessPage } = useAnalytics();

  const { redirectionTime } = checkoutRequest;
  const { name: companyName } = entity;
  const timerRef = useRef<number | undefined>();
  const [seconds, setSeconds] = useState(
    redirectionTime ? redirectionTime : Number(import.meta.env.VITE_HOSTED_PAYMENT_URL_SECONDS_TO_REDIRECT || 0),
  );

  const redirection = () => {
    sendRedirectToSuccessPage();
    redirect(urlRedirect);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => window.clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      window.clearInterval(timerRef.current);
      timerRef.current = undefined;
      redirection();
    }
  }, [seconds]);

  return (
    <Box>
      <Text textAlign='center' marginTop={5} color='primary.500'>
        <Trans
          i18nKey='iFrame.confirmation.redirection_message.information'
          values={{
            company: companyName,
            seconds: seconds,
          }}
        />
        <Text>
          <Link color='primary.500' href={urlRedirect} target='_top'>
            {t('iFrame.confirmation.redirection_message.clic')}
          </Link>
        </Text>
      </Text>
    </Box>
  );
};

export default RedirectTimer;
