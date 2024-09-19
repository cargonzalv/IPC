import DirectDebitContainer from 'app/pages/frames/container/DirectDebitContainer';
import { PaymentMethodType } from 'app/util/constants';

import BnplInformation from '../../components/BnplInformation';

import type { FC } from 'react';

const BnplContainer: FC = () => (
  <DirectDebitContainer paymentMethodType={PaymentMethodType.Bnpl} InformationComponent={BnplInformation} />
);

export default BnplContainer;
