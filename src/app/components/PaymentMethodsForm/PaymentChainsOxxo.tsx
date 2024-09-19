import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import EmphasisText from 'app/components/EmphasisText';
import { paymentBrands } from 'app/util/constants';

const T_ROOT = 'iFrame.checkout';

const PaymentChainsOxxo = () => {
  const { t } = useTranslation();
  return (
    <>
      <EmphasisText>{t(`${T_ROOT}.pay_title_oxxo`)}</EmphasisText>
      <Flex marginTop={4} flexWrap="wrap" marginInlineStart={3} alignItems="center" marginBottom={4}>
        <Image src={paymentBrands.oxxo.src} />
      </Flex>
    </>
  );
};

export default PaymentChainsOxxo;
