import { ChakraProvider } from '@chakra-ui/provider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ThemeProvider } from 'styled-components';
import { IFrame } from 'interface';
import { Box } from '@chakra-ui/layout';
import root from 'react-shadow/emotion';
import { CSSReset } from '@chakra-ui/css-reset';
import { Fonts } from 'app/components/themes/fonts/fonts';
import { loadable } from '@conekta/cronos/dynamic';
import { useApp } from 'useApp';
import { useConfigContext } from 'app/context/ConfigContext';
import { useEffect } from 'react';

const EmbbededLazy = loadable(() => import('app/pages/frames/pages/embedded-checkout/views/Embedded'), {
  ssr: false,
  fallback: <></>,
});

const TokenizerLazy = loadable(() => import('app/pages/frames/pages/card-tokenizer/views/Tokenizer'), {
  ssr: false,
  fallback: <></>,
});

function App(iframeConfig: IFrame) {
  const { setIframe } = useConfigContext();
  const { isTokenizer, theme, chakraTheme, rootRef } = useApp();

  useEffect(() => {
    setIframe({ ...iframeConfig, container: rootRef });
  }, [iframeConfig]);

  return (
    <root.div>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ChakraProvider theme={chakraTheme}>
            <Fonts />
            <Box maxW='530px' margin='auto' ref={rootRef}>
              {isTokenizer ? <TokenizerLazy /> : <EmbbededLazy />}
            </Box>
          </ChakraProvider>
        </ThemeProvider>
      </I18nextProvider>
    </root.div>
  );
}

export default App;
