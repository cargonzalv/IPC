import { Box, Text } from '@chakra-ui/layout';
import { CloseButton } from '@chakra-ui/close-button';
import { Trans, useTranslation } from 'react-i18next';
import { FlipBox } from 'app/components/FlipBox';
import { IConektaError } from 'app/context/interface';
import { ImgWrapper } from 'app/pages/frames/components/styled-components/ImgWrapper';
import { getLogo } from 'app/util/images';
import { FunctionComponentElement, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { CheckoutStatus } from 'common/constants';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { datadogLogs } from '@datadog/browser-logs';
import { checkoutRequestType } from 'app/util/constants';
import { useRedirectToHostedPaymentUrl } from '../../helpers/redirections';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { ErrorBox } from 'app/features/paymentForm/components/errorBox';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

const Header = (): FunctionComponentElement<HTMLDivElement> => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const {
    entity: { name, idReferenceCompany = '' } = { name: t('iFrame.tokenizer.ourCompany') },
    checkoutRequest: { status, id, type, redirectionTime },
    isIntegration,
  } = useCheckoutFrameContext();
  const { isDarkMode, hideLogo, whiteLabel } = useThemeConfig();
  const { imgLogo, size } = getLogo(theme.logo, isDarkMode, hideLogo);
  const frontText = t('iFrame.checkout.header.front');
  const { appError, setAppError } = usePaymentFormStore();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const genericErrorMessage = t('hostedCheckout.internalError.title');
  const errorToastRef = useRef<HTMLDivElement>(null);
  const { scheduleRedirection } = useRedirectToHostedPaymentUrl();
  const { sendError } = useAnalytics();

  useEffect(() => {
    if (whiteLabel) datadogLogs.logger.info('whiteLabel', { companyId: idReferenceCompany });
  }, []);

  useEffect(() => {
    if (id !== undefined && status !== CheckoutStatus.ISSUED) {
      setAppError({
        response: { data: { checkoutMessage: 'iFrame.expiredTitle' } },
      } as unknown as IConektaError);
    }
  }, [id, status]);

  useEffect(() => {
    if (appError) {
      const error = (appError as any).response?.data?.checkoutMessage;
      const translatedMessage = error ? t(error) ?? error : genericErrorMessage;
      setErrorMessage(translatedMessage);
      sendError(translatedMessage, error);

      if (errorToastRef.current) {
        errorToastRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (type === checkoutRequestType.hostedPayment && isIntegration) {
        scheduleRedirection(error?.urlRedirect, redirectionTime);
      }
    }
  }, [appError]);

  return (
    <Box>
      {!whiteLabel && (
        <FlipBox
          padding='4'
          front={
            <Box>
              {!hideLogo ? (
                <>
                  <Text fontSize='sm' fontWeight='regular' padding='0.5' textTransform='uppercase' marginBottom={2}>
                    {frontText}
                  </Text>
                  <ImgWrapper className='checkout-header__logo' src={imgLogo} {...{ size }} alt='' />
                </>
              ) : (
                <ImgWrapper className='checkout-header__logo' src={imgLogo} {...{ size }} alt='' />
              )}
            </Box>
          }
          back={
            <Text fontSize='sm' fontWeight='600' lineHeight='5'>
              <Trans i18nKey='iFrame.checkout.header.back' values={{ company: name }}>
                Conekta es el portal que usa <strong></strong>. para procesar sus pagos en línea de manera segura y
                confiable.
              </Trans>
            </Text>
          }
        />
      )}
      {appError && (
        <ErrorBox errorMessage={errorMessage}>
          <CloseButton
            size='sm'
            color='alert.900'
            onClick={() => {
              setAppError(undefined);
            }}
          />
        </ErrorBox>
      )}
    </Box>
  );
};

export default Header;
