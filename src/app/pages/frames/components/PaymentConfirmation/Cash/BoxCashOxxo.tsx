import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import { paymentBrands, PaymentMethodType } from 'app/util/constants';

const paymentMethod = `iFrame.confirmation.${PaymentMethodType.Cash.toString().toLowerCase()}`;

const BoxCashOxxo = () => {
  const { t } = useTranslation();
  return (
    <Box paddingTop="5">
      <Text fontSize="sm" textAlign="center" fontWeight="600" lineHeight="8" textTransform="uppercase">
        {t(`${paymentMethod}.pay_title_oxxo`)}
      </Text>
      <Flex marginTop={6} flexWrap="wrap" justifyContent="center">
        <Image src={paymentBrands.oxxo.src} alt='Oxxo Logo' />
      </Flex>
    </Box>
  );
};

export default BoxCashOxxo;
