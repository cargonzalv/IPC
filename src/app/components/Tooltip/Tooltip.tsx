import Tippy from '@tippyjs/react';
import classNames from 'classnames';

import 'tippy.js/dist/tippy.css';

import {
  animationCustom,
  arrowCustom,
  defaultCustom,
  defaultInteractiveOption,
  defaultOffsetOption,
  defaultPlacementOptions,
  delayCustom,
  tooltipColors,
} from 'app/components/Tooltip/constants';
import { createColorsNames } from 'app/components/Tooltip/helpers';
import { ITooltip } from 'app/components/Tooltip/interface';

export const Tooltip = ({
  animation = animationCustom,
  arrow = arrowCustom,
  children,
  className,
  colorName = defaultCustom,
  content,
  delay = delayCustom,
  interactive = defaultInteractiveOption,
  offset = defaultOffsetOption,
  onClickOutside,
  placement = defaultPlacementOptions,
  trigger,
  visible,
}: ITooltip) => {
  const tooltipColor = createColorsNames(tooltipColors)[colorName];
  return (
    <div className={classNames('TooltipWrapper', className)}>
      <Tippy
        {...{
          animation,
          arrow,
          content,
          delay,
          interactive,
          offset,
          onClickOutside,
          placement,
          trigger,
          visible,
        }}
        className={classNames('Tooltip', tooltipColor)}
      >
        {children ? children : <div className={classNames('Tooltip__dot', tooltipColor)} />}
      </Tippy>
    </div>
  );
};
