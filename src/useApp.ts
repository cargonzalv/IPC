import i18n from './i18n';
import { getTheme } from 'app/util/theme';
import { useEffect, useMemo, useRef } from 'react';
import { axiosInstance } from 'app/pages/frames/helpers/buildFetch';
import { buildTheme } from 'app/components/chakratheme';
import { useDatadogLogs } from 'app/pages/frames/hooks/useDatadogLogs';
import { ConektaSource } from 'common/constants';
import { useConfigContext } from 'app/context/ConfigContext';

export const useApp = () => {
  const { iframe: iframeConfig } = useConfigContext();
  const theme = useMemo(() => getTheme(), []);
  const language = iframeConfig.config.locale;
  const options = iframeConfig.options;
  const currentLanguage = i18n.language;
  const rootRef = useRef<HTMLDivElement>(null);
  const chakraTheme = buildTheme(options);
  const isTokenizer =
    iframeConfig.conektaSource === ConektaSource.TOKENIZER ||
    iframeConfig.conektaSource === ConektaSource.COMPONENT_TOKENIZER;
  const ddService = `${import.meta.env.VITE_DD_SERVICE}${isTokenizer ? '-tokenizer' : ''}`;
  const { initDatadogLogs } = useDatadogLogs(ddService);
  const { isPlayground } = iframeConfig;

  useEffect(() => {
    if (currentLanguage !== language) {
      i18n.changeLanguage(language);
    }
    const languageCode = language.toLocaleLowerCase();
    const languageHeader = `${languageCode}-419,${languageCode};q=0.9`;
    axiosInstance.defaults.headers.common['Accept-Language'] = languageHeader;
  }, [currentLanguage, language]);

  useEffect(() => {
    if (!isPlayground) {
      initDatadogLogs();
    }
  }, [isPlayground]);

  return { theme, chakraTheme, isTokenizer, rootRef };
};
