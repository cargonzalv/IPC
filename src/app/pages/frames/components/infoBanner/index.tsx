import { Alert, AlertIcon } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { PropsWithChildren } from 'react';

export const InfoBanner = ({ children }: PropsWithChildren) => {
  const { backgroundColorTheme } = useThemeConfig();

  return (
    <Alert status='info' bgColor={backgroundColorTheme} color='colorText' marginTop={3} justifyContent='start'>
      <AlertIcon color='colorText' />
      <Text fontSize='sm' color='colorText'>
        {children}
      </Text>
    </Alert>
  );
};
