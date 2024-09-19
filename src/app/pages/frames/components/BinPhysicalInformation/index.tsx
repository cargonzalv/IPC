import { useTranslation } from 'react-i18next';
import { InfoBanner } from '../infoBanner';

export const BinPhysicalInformation = ({ show }: { show: boolean }) => {
  const { t } = useTranslation();
  const text = t(`iFrame.checkout.cardForm.messageBIN`);

  if (!show) return <></>;

  return <InfoBanner>{text}</InfoBanner>;
};
