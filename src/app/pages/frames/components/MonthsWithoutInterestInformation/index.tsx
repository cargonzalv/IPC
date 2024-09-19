import { useTranslation } from 'react-i18next';
import { Tooltip } from 'app/components/Tooltip/Tooltip';
import { useState } from 'react';

const tRoot: string = 'iFrame.checkout.cardForm.monthsWithoutInterest';

export const MonthsWithoutInterestInformation = () => {
  const { t } = useTranslation();
  const [isCardVerificationTooltipHelperOpen, setIsCardVerificationTooltipHelperOpen] = useState<boolean>(false);
  const showCardVerificationTooltipHelper = (): void => setIsCardVerificationTooltipHelperOpen(true);
  const hideCardVerificationTooltipHelper = (): void => setIsCardVerificationTooltipHelperOpen(false);
  return (
    <Tooltip
      animation="fade"
      className="MonthsWithoutInterestInformation"
      content={
        <div className="MonthsWithoutInterestInformation__Content">
          <p>{t(`${tRoot}.content`)}</p>
        </div>
      }
      interactive
      onClickOutside={hideCardVerificationTooltipHelper}
      placement="top-start"
      visible={isCardVerificationTooltipHelperOpen}
    >
      <i
        className="icon-question"
        onClick={
          isCardVerificationTooltipHelperOpen ? hideCardVerificationTooltipHelper : showCardVerificationTooltipHelper
        }
        onMouseEnter={showCardVerificationTooltipHelper}
        onMouseLeave={hideCardVerificationTooltipHelper}
      ></i>
    </Tooltip>
  );
};
