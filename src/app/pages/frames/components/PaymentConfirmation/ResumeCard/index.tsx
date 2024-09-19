import { Text } from '@chakra-ui/layout';
import { Card, CardBody } from '@chakra-ui/card';
import { ReactNode } from 'react';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';

interface ResumeCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const ResumeCard = ({ title, description, children }: ResumeCardProps) => {
  const { getPropsCardsPaymentsMethods } = useThemeConfig();
  const { backgroundColor, borderColor} = getPropsCardsPaymentsMethods();
  return (
    <Card border='1px solid' borderColor={borderColor} backgroundColor={backgroundColor} boxShadow='none'>
      <CardBody>
        <Text fontSize='sm' fontWeight='600' lineHeight='8' textTransform='uppercase'>
          {title}
        </Text>
        <Text fontWeight='700' fontSize='xl' marginTop={3}>
          {description}
        </Text>
        {children}
      </CardBody>
    </Card>
  );
};

export default ResumeCard;
