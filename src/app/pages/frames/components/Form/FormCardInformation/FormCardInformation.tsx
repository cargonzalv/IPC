import { useTranslation } from 'react-i18next';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import FieldEvaluated from 'app/pages/frames/components/Form/FieldEvaluated';
import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { cvvIcon } from 'app/util/constants';
import { FormApi } from 'final-form';
import { formCardFieldNames, formControlsPropsCard } from 'app/pages/frames/components/Form/FormCard/constants';
import { getCardBrandImgUrl } from 'app/pages/frames/helpers/checkout';
import { getFormControlProps } from 'app/pages/frames/components/Form/FieldEvaluated/helpers';
import { Image } from '@chakra-ui/image';
import { selectCardProps } from '../FormCard/constants';

interface Props {
  form: FormApi<any>;
  validateCardNumber?: any;
}

export const FormCardInformation = ({ form, validateCardNumber }: Props) => {
  const { t } = useTranslation();
  const [backgroundCardImages, setBackgroundCardImage] = useState(getCardBrandImgUrl(''));
  const { checkoutRequest } = useCheckoutFrameContext();
  const { excludeCardNetworks = '' } = checkoutRequest;
  const { cardExpMonthYear, cardholderName, cardNumber, cardVerificationValue } = formCardFieldNames;

  return (
    <>
      <FieldEvaluated {...getFormControlProps(cardholderName, formControlsPropsCard, t)} />
      <FieldEvaluated
        {...getFormControlProps(cardNumber, selectCardProps(excludeCardNetworks), t)}
        onChange={() => {
          const { getFieldState } = form;
          const cardTypeNumber = getFieldState(formCardFieldNames.cardNumber);
          setBackgroundCardImage(getCardBrandImgUrl(cardTypeNumber?.value));
          validateCardNumber && validateCardNumber(form);
        }}
        rightElement={backgroundCardImages.map((image) => (
          <Image key={`brand-${image}`} src={image} width='8' mt='2' mr='2' />
        ))}
      />
      <Box overflow='hidden'>
        <Flex justifyContent='space-between'>
          <Box flexBasis={{ base: '35%', sm: '48%' }}>
            {/* Expiration Month/Year */}
            <FieldEvaluated {...getFormControlProps(cardExpMonthYear, formControlsPropsCard, t)} />
          </Box>
          <Box flexBasis={{ base: '55%', sm: '48%' }}>
            {/* CVV */}
            <FieldEvaluated
              {...getFormControlProps(cardVerificationValue, selectCardProps(excludeCardNetworks), t)}
              rightElement={<Image src={cvvIcon} width='8' mt='2' mr='2' />}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
