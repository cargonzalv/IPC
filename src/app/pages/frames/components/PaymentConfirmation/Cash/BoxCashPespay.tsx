import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import { brandsPespay } from 'app/util/constants';

export const T_ROOT = `iFrame.confirmation.cash`;

const BoxCashPesPay = () => {
  const { t } = useTranslation();
  return (
    <Box paddingTop='5'>
      <Text fontSize='sm' textAlign='center' fontWeight='600' lineHeight='8' textTransform='uppercase'>
        {t(`${T_ROOT}.pay_title_pespay`)}
      </Text>
      <Flex marginTop={1} flexWrap='wrap' justifyContent='center' alignItems='center' marginBottom={1} gap={1}>
        {brandsPespay.map((brand) => (
          <Image
            key={`brand-${brand.alt}`}
            src={brand.src}
            alt={brand.alt}
            boxSize='50px' 
            objectFit='contain' 
            mx={2} 
          />
        ))}
      </Flex>
    </Box>
  );
};

export default BoxCashPesPay;
