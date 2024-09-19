import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import EmphasisText from 'app/components/EmphasisText';
import { brandsPespay } from 'app/util/constants';

const T_ROOT = 'iFrame.checkout';

const PaymentChainsPespay = () => {
  const { t } = useTranslation();
  return (
    <>
      <EmphasisText>{t(`${T_ROOT}.pay_title_pespay`)}</EmphasisText>
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
    </>
  );
};

export default PaymentChainsPespay;
