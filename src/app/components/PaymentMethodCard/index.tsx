import { Text } from '@chakra-ui/layout';
import { HTMLChakraProps } from '@chakra-ui/system';
import { Card, CardBody } from '@chakra-ui/card';
import { MouseEventHandler, ReactNode } from 'react';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { Trans } from 'react-i18next';

interface PaymentMethodCardProps extends HTMLChakraProps<'div'> {
  text: string;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}

const PaymentMethodCard = ({ onClick, text, isDisabled, isActive, children, ...rest }: PaymentMethodCardProps) => {
  const { getPropsCardsPaymentsMethods } = useThemeConfig();
  const { borderColor, backgroundColor, colorText, disabledFontColorKey } = getPropsCardsPaymentsMethods(
    isActive,
    isDisabled,
  );
  return (
    <Card
      border={`${isActive ? '2px' : '1px'} solid`}
      borderColor={borderColor}
      borderRadius='8px'
      boxShadow='none'
      cursor='pointer'
      backgroundColor={backgroundColor}
      {...rest}
    >
      <CardBody
        padding='2'
        minH='18'
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        color={isActive ? 'primary.500' : disabledFontColorKey}
        {...(isDisabled ? {} : { onClick })}
      >
        {children}
        <Text fontSize='md' className='unselectable' color={colorText}>
          <Trans i18nKey={text} />
        </Text>
      </CardBody>
    </Card>
  );
};

export default PaymentMethodCard;
