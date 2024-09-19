import { useTranslation } from 'react-i18next';
import { PaymentConfirmationShareIcons, PaymentMethodType } from 'app/util/constants';
import { useRef } from 'react';

import { IShare } from './interface';

import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icons';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useShareOptions } from './useShareOptions';
import { ShareByEmailModal } from './ShareByEmailModal';
import { tRootShare } from './constants';
import { useOrderId } from 'app/features/ThreeDS/state/selectors';

const tRootCardShare = 'iFrame.confirmation.card.share';

const Share = ({ onClick, amount: formattedAmount, reference, showModalEmail, setShowModalEmail }: IShare) => {
  const { selectedPaymentMethod } = usePaymentFormStore();
  const { getShareOptions } = useShareOptions();
  const orderId = useOrderId();
  const {
    checkoutRequest: { name: concept },
    isIntegration,
  } = useCheckoutFrameContext();
  const { t } = useTranslation();
  const { getPropsConfirmationShare } = useThemeConfig();
  const { color, backgroundColor, colorIcon, border } = getPropsConfirmationShare();
  const isCardPayment = selectedPaymentMethod === PaymentMethodType.Card;
  const title = t(isCardPayment ? `${tRootCardShare}.buttonsTitle` : `${tRootShare}.title`);
  const myRef = useRef(null);
  const { shareOptions, shareOptionsIcons } = getShareOptions();

  return (
    <Box paddingTop='5' paddingBottom='5' ref={myRef}>
      <Text fontSize='sm' textAlign='center' fontWeight='600' lineHeight='8' textTransform='uppercase'>
        {title}
      </Text>
      <Flex gap={3} justifyContent='center' paddingTop={5} flexWrap='wrap'>
        {shareOptions.map((icon) =>
          isIntegration === undefined && icon === PaymentConfirmationShareIcons.Mail ? null : (
            <Button
              fontWeight='400'
              border={border}
              borderColor='disabled.200'
              padding='0 10px'
              fontSize={14}
              color={color}
              backgroundColor={backgroundColor}
              _hover={{ bg: backgroundColor }}
              variant='outline'
              height={8}
              borderRadius='lg'
              key={icon}
              onClick={() => onClick(icon, formattedAmount, isCardPayment ? orderId : reference, concept)}
            >
              <Icon as={shareOptionsIcons[icon]} color={colorIcon} boxSize={5} marginInlineEnd={3} />
              {t(`${tRootShare}.${icon}`)}
            </Button>
          ),
        )}
      </Flex>
      <ShareByEmailModal showModalEmail={showModalEmail} setShowModalEmail={setShowModalEmail} ref={myRef} />
    </Box>
  );
};

export default Share;
