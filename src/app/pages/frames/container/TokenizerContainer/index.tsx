import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { formCardDataValuesTokenization } from 'app/pages/frames/components/Form/FormCard/constants';
import { FormTokenizer } from 'app/pages/frames/components/Form/FormTokenizer';
import { useTokenizer } from 'app/pages/frames/hooks/tokenizer';
import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { FooterWhiteLabel } from '../../components';

export interface TokenizerContainerProps {
  showHeader?: boolean;
  showBackButton?: boolean;
}

const TokenizerContainer: FC<TokenizerContainerProps> = () => {
  const { action } = useTokenizer();
  const { isLoading } = usePaymentFormStore();
  const THEME_CONTEXT: any = useContext(ThemeContext);
  const { enableWhiteLabel } = THEME_CONTEXT;

  return (
    <>
      <FormTokenizer handleSubmit={action} initialValues={formCardDataValuesTokenization} loading={isLoading} />
      {enableWhiteLabel && <FooterWhiteLabel />}
    </>
  );
};

export default TokenizerContainer;
