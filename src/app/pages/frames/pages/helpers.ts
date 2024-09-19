import { datadogRum } from '@datadog/browser-rum';

export interface IPerformanceMeasure {
  initLoadTime: number;
}

export const performanceMeasure = (labelAction?: string): IPerformanceMeasure => {
  const measure = {
    initLoadTime: Math.round(performance.now()),
  };
  datadogRum.addAction(labelAction || 'INIT-LOAD-IFRAME', measure);
  return measure;
};
