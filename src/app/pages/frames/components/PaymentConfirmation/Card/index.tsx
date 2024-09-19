import { useTranslation } from 'react-i18next';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { CardBody, Card as ChakraCard } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import LabelAndText from 'app/pages/frames/components/PaymentConfirmation/LabelAndText';
import { PaymentMethodType, successLogo } from 'app/util/constants';

import ResumeCard from '../ResumeCard';
import { ShippingAddresInfo } from '../ShippingAddresInfo';
import { useCardConfirmation } from './useCardConfirmation';
import { ConektaSource } from 'common/constants';
import { EmbeddedRedirect } from '../RedirectTimer/EmbeddedRedirect';
import RedirectTimer from '../RedirectTimer';
import { IMonthlyInstallment } from '../../Form/FormCard/interfaces';

const root = 'iFrame.confirmation';
const paymentMethod = `${root}.${PaymentMethodType.Card.toString().toLowerCase()}`;

const Card = () => {
  const { t } = useTranslation();
  const {
    companyName,
    amountInCurrencyFormat,
    shippingAddress,
    name,
    email,
    customerName,
    urlRedirect,
    conektaSource,
    monthlyInstallments,
  } = useCardConfirmation();
  const nameCardTitle = t(`${paymentMethod}.buyer`);
  const reasonCardTitle = t(`${paymentMethod}.reason_payment`);
  const successTitle = t(`${paymentMethod}.success_title`);

  return (
    <>
      <AmountSection
        companyName={companyName}
        amount={amountInCurrencyFormat}
        email={email}
        monthlyInstallmentInfo={monthlyInstallments}
      />
      <SuccessCard successTitle={successTitle} urlRedirect={urlRedirect} conektaSource={conektaSource} />
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' marginTop={4}>
        <ResumeCard title={nameCardTitle} description={customerName} />
        <ResumeCard title={reasonCardTitle} description={name} />
      </SimpleGrid>
      {shippingAddress && (
        <ShippingAddresInfo title={t(`${paymentMethod}.shipping_address`)} shippingAddress={shippingAddress} />
      )}
    </>
  );
};

interface AmountSectionProps {
  companyName: string;
  amount: string;
  email: string;
  monthlyInstallmentInfo?: IMonthlyInstallment;
}

const AmountSection = ({ companyName, amount, email, monthlyInstallmentInfo }: AmountSectionProps) => {
  const { t } = useTranslation();
  return (
    <LabelAndText className='payment-status__amount'>
      <Text fontSize='sm' textAlign='left' fontWeight='400' lineHeight='8'>
        {t(`${paymentMethod}.success_description.first`)}
        <b>{companyName}</b>
        {t(`${paymentMethod}.success_description.second`)}
        <b>{amount}</b>
        {monthlyInstallmentInfo
          ? t(`${paymentMethod}.success_description.threeMonthlyInstallments`, {
              ...monthlyInstallmentInfo,
            })
          : t(`${paymentMethod}.success_description.three`)}
        {monthlyInstallmentInfo && <b>{`$${monthlyInstallmentInfo.monthlyFee}.`}</b>}{' '}
        {t(`iFrame.confirmation.common.email_confirmation`)} <b>{email}</b>
      </Text>
    </LabelAndText>
  );
};

interface SuccessCardProps {
  successTitle: string;
  urlRedirect?: string;
  conektaSource: string;
}

const SuccessCard = ({ successTitle, urlRedirect, conektaSource }: SuccessCardProps) => {
  const redirectComponent = urlRedirect ? (
    conektaSource === ConektaSource.COMPONENT ? (
      <EmbeddedRedirect paymentMethod={paymentMethod} urlRedirect={urlRedirect} />
    ) : (
      <RedirectTimer />
    )
  ) : undefined;
  return (
    <ChakraCard alignContent='center' flexWrap='wrap' border='1px solid' borderColor='disabled.200' boxShadow='none'>
      <CardBody>
        <Flex justifyContent='center'>
          <Image height='24' width='20' src={successLogo} />
        </Flex>
        <Text fontSize='md' textAlign='center' fontWeight='700' lineHeight='8'>
          {successTitle}
        </Text>
        {redirectComponent}
        <Box textAlign='center' paddingTop={3} />
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
