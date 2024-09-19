import { Tooltip } from '@chakra-ui/tooltip';
import { FC, PropsWithChildren } from 'react';
import { useConfigContext } from 'app/context/ConfigContext';
import { cashPaymentMethodKey } from '../PaymentConfirmation/Cash/BoxCashDataLogic';
import TooltipText from '../PaymentConfirmation/TooltipText';

const tooltipTitle = `${cashPaymentMethodKey}.chains_pay_title`;
const tooltipDescription = `${cashPaymentMethodKey}.chains_pay`;

export const DataLogicTooltip: FC<PropsWithChildren> = ({ children }) => {
  const {
    iframe: { container },
  } = useConfigContext();
  return (
    <Tooltip
      bg='white'
      label={<TooltipText textTitle={tooltipTitle} textDescription={tooltipDescription} />}
      placement='top'
      portalProps={{ containerRef: container }}
    >
      {children}
    </Tooltip>
  );
};
