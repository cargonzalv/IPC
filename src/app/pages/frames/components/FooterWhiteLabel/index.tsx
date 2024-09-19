import { useTranslation } from 'react-i18next';
import { imgPadlock, imgPoweredByMainLogo } from 'app/util/constants';

export const FooterWhiteLabel = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer__WhiteLabel">
      <div className="security-label">
        <img src={imgPadlock} alt="candado" className="security-label__img" />
        <p className="security-label__text">{t('iFrame.securePayments')}</p>
      </div>
      <img src={imgPoweredByMainLogo} className="Footer__WhiteLabel__logo" alt="whitelabel" />
    </div>
  );
};
