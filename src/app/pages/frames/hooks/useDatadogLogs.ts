import { datadogLogs } from '@datadog/browser-logs';

export const useDatadogLogs = (service: string) => {
  const initDatadogLogs = () => {
    datadogLogs.init({
      clientToken: import.meta.env.VITE_DD_RUM_CLIENT_TOKEN,
      site: 'datadoghq.com',
      service,
      forwardConsoleLogs: ['error', 'info'],
      sessionSampleRate: 100,
      forwardErrorsToLogs: false,
    });
  };
  return { initDatadogLogs };
};
