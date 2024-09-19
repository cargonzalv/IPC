import { Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTranslation } from 'react-i18next';
import EmphasisText from 'app/components/EmphasisText';
import { brandsDataLogic } from 'app/util/constants';
import { DataLogicTooltip } from 'app/pages/frames/components/DataLogicTooltip';
import BranchesToPayLink from '../BranchesToPayLink';

const T_ROOT = 'iFrame.checkout';

const PaymentChainsDatalogic = () => {
  const { t } = useTranslation();

  return (
    <>
      <EmphasisText textTransform="none">
        {t(`${T_ROOT}.pay_title_datalogic`)}

        <BranchesToPayLink>{t(`${T_ROOT}.pay_subtitle_datalogic`)}</BranchesToPayLink>
      </EmphasisText>
      <Flex marginTop={4} flexWrap='wrap' marginInlineStart={3} alignItems='center' marginBottom={4}>
        <>
          {brandsDataLogic.map((brand) => (
            <Image key={`brand-${brand.alt}`} src={brand.src} alt={brand.alt} />
          ))}

          <DataLogicTooltip>
            <Text
              marginInlineStart={3}
              fontSize='xs'
              fontWeight={600}
              color='primary.600'
              textDecorationLine='underline'
            > {t(`${T_ROOT}.moreList`)} </Text>
          </DataLogicTooltip>
        </>
      </Flex>
    </>
  );
};

export default PaymentChainsDatalogic;
