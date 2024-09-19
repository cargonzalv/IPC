import { Box } from '@chakra-ui/layout';
import { Alert } from '@chakra-ui/alert';
import { Icon } from '@chakra-ui/icon';
import { CloseButton } from '@chakra-ui/close-button';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { EmailConfirmationProps, EmailConfirmationText } from '.';
import { FC } from 'react';

export interface PaymentAlertProps {
  emailConfirmationText: EmailConfirmationProps;
  onClose: () => void;
}

export const PaymentAlert: FC<PaymentAlertProps> = ({ emailConfirmationText, onClose }) => {
  return (
    <Alert status='success' background='success.50' color='success.900'>
      <Icon as={AiOutlineCheckCircle} />
      <Box>
        <EmailConfirmationText {...emailConfirmationText} />
      </Box>
      <CloseButton
        size='sm'
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        marginTop='8px'
        onClick={onClose}
      />
    </Alert>
  );
};
