import { ReactChild } from 'react';

export interface ITooltip {
  animation?: string;
  arrow?: boolean;
  children?: any;
  className?: string;
  colorName?: string;
  content: ReactChild | ReactChild[];
  delay?: number;
  interactive?: boolean;
  offset?: [number, number];
  onClickOutside?: () => void;
  placement?: TooltipPlacement;
  trigger?: TooltipTriggerOption;
  visible?: boolean;
}

export type TooltipPlacement =
  | 'auto'
  | 'auto-end'
  | 'auto-start'
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'top'
  | 'top-end'
  | 'top-start';

export type TooltipTriggerOption = 'click' | 'focusin' | 'manual' | 'mouseenter click' | 'mouseenter focus';
