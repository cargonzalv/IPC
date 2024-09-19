import { TooltipPlacement } from './interface';

const distanceOfTooltipFromContentInPixels: number = 10;
const skiddingOfTooltipFromContentInPixels: number = 0;

export const animationCustom: string = 'fade';
export const arrowCustom: boolean = true;
export const defaultCustom: string = 'default';
export const defaultInteractiveOption: boolean = false;
export const defaultOffsetOption: [number, number] = [
  skiddingOfTooltipFromContentInPixels,
  distanceOfTooltipFromContentInPixels,
];
export const defaultPlacementOptions: TooltipPlacement = 'bottom-start';
export const delayCustom: number = 150;
export const tooltipColors: Array<string> = ['danger', 'info', 'success', 'warning'];
