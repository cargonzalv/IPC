import { Box } from '@chakra-ui/layout';
import { Alert, AlertDescription } from '@chakra-ui/alert';
import { Icon } from '@chakra-ui/icon';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { PropsWithChildren } from 'react';

export const ErrorBox = ({ errorMessage, children }: PropsWithChildren<{ errorMessage: string }>) => {
  return (
    <Box padding='0 0.25rem' top='-3.2rem' height='0' zIndex='900'>
      <Alert status='error' background='alert.50' color='alert.100' width='full' zIndex='1'>
        <Icon as={AiOutlineExclamationCircle} />
        <Box>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Box>
        {children}
      </Alert>
    </Box>
  );
};
