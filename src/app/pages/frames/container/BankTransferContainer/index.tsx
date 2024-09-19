import BankTransferInformation from 'app/pages/frames/components/BankTransferInformation';
import DirectDebitContainer from 'app/pages/frames/container/DirectDebitContainer';
import { PaymentMethodType } from 'app/util/constants';

import type { FC } from 'react';

const BankTransferContainer: FC = () => (
  <DirectDebitContainer
    paymentMethodType={PaymentMethodType.BankTransfer}
    InformationComponent={BankTransferInformation}
  />
);

export default BankTransferContainer;
