import { useRef, ReactElement, ReactNode, useEffect } from 'react';
import { render } from '@testing-library/react';

import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider } from 'styled-components';
import { getTheme } from 'app/util/theme';
import { buildTheme } from 'app/components/chakratheme';
import { IFrame } from 'interface';
import { INITIAL_CONFIG, useConfigContext } from 'app/context/ConfigContext';

const WrapperComponent = ({ children, iframeConfig }: { children: ReactNode; iframeConfig: IFrame }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { iframe, setIframe } = useConfigContext();

  useEffect(() => {
    setIframe({ ...iframeConfig, container: rootRef });
  }, [iframeConfig, rootRef, setIframe]);

  return <div ref={rootRef}>{iframe && children}</div>;
};

export const renderWithProviders = (component: ReactElement, iframeConfig: IFrame = INITIAL_CONFIG) => {
  const theme = getTheme();
  return render(
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={buildTheme(iframeConfig.options)}>
        <WrapperComponent iframeConfig={iframeConfig}>{component}</WrapperComponent>
      </ChakraProvider>
    </ThemeProvider>,
  );
};
