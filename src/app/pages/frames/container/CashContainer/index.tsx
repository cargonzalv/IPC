import CashInformation from 'app/pages/frames/components/CashInformation';
import DirectDebitContainer from 'app/pages/frames/container/DirectDebitContainer';
import { PaymentMethodType } from 'app/util/constants';

import type { FC } from 'react';

const CashContainer: FC = () => (
  <DirectDebitContainer paymentMethodType={PaymentMethodType.Cash} InformationComponent={CashInformation} />
);

export default CashContainer;
