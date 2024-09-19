import { useTranslation } from 'react-i18next';
import EmphasisText from 'app/components/EmphasisText';

const T_ROOT = 'iFrame.checkout';

const BankTransferPaymentInfo = () => {
  const { t } = useTranslation();
  return <EmphasisText>{t(`${T_ROOT}.pay_title_bank_transfer`)}</EmphasisText>;
};

export default BankTransferPaymentInfo;
