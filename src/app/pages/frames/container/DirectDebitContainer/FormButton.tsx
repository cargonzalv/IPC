import { Button } from 'app/components/Button';
import type { PropsWithChildren } from 'react';

export interface FormButtonProps {
  submitting: boolean;
  loading: boolean;
  disabled?: boolean;
}

export const FormButton = ({ submitting, loading, disabled, children }: PropsWithChildren<FormButtonProps>) => {
  return (
    <Button
      disabled={disabled || submitting || loading}
      isLoading={submitting || loading}
      type='submit'
      marginTop='6'
      marginBottom='4'
    >
      {children}
    </Button>
  );
};
