import { Button } from '@chakra-ui/button';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import { PaymentMethodType } from 'app/util/constants';

import { IPaymentReferenceContent } from './interface';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';

const PaymentReferenceContent = ({
  referenceExpiredAt,
  reference,
  name,
  barcodeUrl,
  paymentMethodType,
}: IPaymentReferenceContent) => {
  const { t } = useTranslation();
  const tRoot = `iFrame.confirmation.${paymentMethodType}`;
  const { isDatalogic } = useCheckoutFrameContext();
  const { getPropsCardsPaymentsMethods, getPropsButtonCopyClipboard } = useThemeConfig();
  const { borderColor, backgroundColor } = getPropsCardsPaymentsMethods();
  const { backgroundColor: backgroundColorCopy, color, bg_hover, bg_active } = getPropsButtonCopyClipboard();
  const paymentMethodBankTransfer = PaymentMethodType.BankTransfer.toString().toLowerCase();
  const propsCards = {
    border: '1px solid',
    borderColor,
    backgroundColor,
    boxShadow: 'none',
  };

  const ReferenceContentCard = ({ title, content }: { title: string; content: string }) => (
    <Card {...propsCards}>
      <CardBody>
        <Text fontSize='sm' fontWeight='600' lineHeight='8' textTransform='uppercase'>
          {title}
        </Text>
        <Text fontWeight='700' fontSize='xl' marginTop={3}>
          {content}
        </Text>
      </CardBody>
    </Card>
  );

  return (
    <>
      <Card alignContent='center' flexWrap='nowrap' {...propsCards}>
        <CardBody>
          <Text fontSize='sm' textAlign='center' fontWeight='600' lineHeight='8' textTransform='uppercase'>
            {isDatalogic && paymentMethodType != paymentMethodBankTransfer
              ? t(`${tRoot}.reference_number`)
              : t(`${tRoot}.payment_reference`)}
          </Text>
          {barcodeUrl && <Image paddingTop={3} paddingBottom={3} margin='auto' src={barcodeUrl} alt='Reference Barcode' />}
          <Text fontWeight='700' fontSize='2xl' textAlign='center'>
            {reference}
          </Text>
          <Box textAlign='center' paddingTop={3}>
            <Button
              height={6}
              fontWeight='400'
              backgroundColor={backgroundColorCopy}
              color={color}
              fontSize='xs'
              onClick={() => navigator.clipboard.writeText(reference)}
              padding='0 10px'
              _hover={{ bg: bg_hover }}
              _active={{
                bg: bg_active,
                transform: 'scale(0.98)',
              }}
            >
              {t(`${tRoot}.copy_reference`)}
            </Button>
          </Box>
        </CardBody>
      </Card>
      <SimpleGrid spacing={2} templateColumns='repeat(2,1fr)' marginTop={2}>
        <ReferenceContentCard title={t(`${tRoot}.payment_expirate_at`)} content={referenceExpiredAt} />
        <ReferenceContentCard title={t(`${tRoot}.reason_payment`)} content={name} />
      </SimpleGrid>
    </>
  );
};
export default PaymentReferenceContent;
