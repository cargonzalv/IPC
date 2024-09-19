import { truncateString } from 'app/util/strings';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ParagraphMethod } from '../styled-components/ParagraphMerchant';
import { useConfigContext } from 'app/context/ConfigContext';

const BankTransferInformation = () => {
  const THEME_CONTEXT: any = useContext(ThemeContext);
  const { font } = THEME_CONTEXT.colors;

  const { iframe = { options: {} } } = useConfigContext();
  const bankTransferTextRequested: string = iframe.options?.paymentMethodInformation?.bankTransferText ?? '';

  return (
    <ParagraphMethod color={font} className='FormBankTransfer__BankTransferInformation'>
      {bankTransferTextRequested && truncateString(bankTransferTextRequested)}
    </ParagraphMethod>
  );
};

export default BankTransferInformation;
