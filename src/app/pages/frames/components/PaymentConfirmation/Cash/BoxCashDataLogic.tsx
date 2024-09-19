import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import { brandsDataLogic, paymentBrands, PaymentMethodType } from 'app/util/constants';
import { DataLogicTooltip } from '../../DataLogicTooltip';
import BranchesToPayLink from 'app/components/BranchesToPayLink';

export const cashPaymentMethodKey = `iFrame.confirmation.${PaymentMethodType.Cash.toString().toLowerCase()}`;

const BoxCashDataLogic = () => {
  const { t } = useTranslation();

  return (
    <Box paddingTop='5'>
      <Text fontSize='sm' textAlign='center' fontWeight='600' lineHeight='8'>
        {t(`${cashPaymentMethodKey}.pay_title_datalogic`)}

        <BranchesToPayLink>{t(`${cashPaymentMethodKey}.pay_subtitle_datalogic`)}</BranchesToPayLink>
      </Text>
      <Flex marginTop={6} flexWrap='wrap' justifyContent={{ md: 'center' }}>
        <>
          {brandsDataLogic.map((brand) => (
            <Image key={`brand-${brand.alt}`} src={brand.src} alt={brand.alt} />
          ))}
          <Image
            marginInlineStart={4}
            key={`brand-${paymentBrands.benavides.alt}`}
            src={paymentBrands.benavides.src}
            alt={paymentBrands.benavides.alt}
          />
        </>
      </Flex>
      <Box display='flex' justifyContent='center' marginTop={5}>
        <DataLogicTooltip>
          <Text fontWeight='400' color='primary.600' textDecorationLine='underline' textAlign='center'>
            {t(`${cashPaymentMethodKey}.chains_list`)}
          </Text>
        </DataLogicTooltip>
      </Box>
    </Box>
  );
};

export default BoxCashDataLogic;
