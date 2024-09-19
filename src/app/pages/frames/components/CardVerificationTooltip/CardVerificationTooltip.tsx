import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'app/components/Tooltip/Tooltip';

import Icon from 'app/pages/frames/components/styled-components/Icon';

const tRoot: string = 'iFrame.checkout.cardForm.helperText.cardVerificationValue';

export const CardVerificationTooltipHelper = () => {
  const { t } = useTranslation();

  const [isCardVerificationTooltipHelperOpen, setIsCardVerificationTooltipHelperOpen] = useState<boolean>(false);
  const showCardVerificationTooltipHelper = (): void => {
    setIsCardVerificationTooltipHelperOpen(true);
  };
  const hideCardVerificationTooltipHelper = (): void => setIsCardVerificationTooltipHelperOpen(false);

  return (
    <Tooltip
      animation='fade'
      className='frontino-form-control__icon'
      content={
        <div className='TooltipHelper__Content'>
          <p>{`${t(`${tRoot}.start`)} ${t(`${tRoot}.amex`)}`}</p>
          <p>{`${t(`${tRoot}.union`)} ${t(`${tRoot}.visaMaster`)}`}</p>
        </div>
      }
      interactive
      onClickOutside={hideCardVerificationTooltipHelper}
      placement='bottom-start'
      visible={isCardVerificationTooltipHelperOpen}
    >
      <Icon
        className='icon-question'
        onClick={
          isCardVerificationTooltipHelperOpen ? hideCardVerificationTooltipHelper : showCardVerificationTooltipHelper
        }
        onMouseEnter={showCardVerificationTooltipHelper}
        onMouseLeave={hideCardVerificationTooltipHelper}
      />
    </Tooltip>
  );
};
