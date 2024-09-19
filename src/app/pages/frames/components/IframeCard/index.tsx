import { Card } from '@chakra-ui/card';
import { useConfigContext } from 'app/context/ConfigContext';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { PropsWithChildren } from 'react';

const IframeCard = ({ children }: PropsWithChildren) => {
  const { backgroundColorTheme } = useThemeConfig();
  const {
    iframe: {
      config: { useExternalSubmit },
    },
  } = useConfigContext();
  return (
    <Card
      boxShadow='md'
      margin={3}
      backgroundColor={backgroundColorTheme}
      paddingBottom={useExternalSubmit ? 4 : 'initial'}
    >
      {children}
    </Card>
  );
};

export default IframeCard;
