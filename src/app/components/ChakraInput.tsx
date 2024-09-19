import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  FormControlProps,
  FormLabelProps,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/input';
import { ReactNode } from 'react';

export type ChakraInputProps = {
  label: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  input?: InputProps;
  labelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  rightElement?: ReactNode;
  isReadOnly?: boolean;
};

export const ChakraInput = ({
  label,
  helper,
  error,
  input,
  labelProps,
  formControlProps,
  rightElement,
  isReadOnly,
  ...props
}: ChakraInputProps) => {
  const { name, ...rest } = input!;
  return (
    <FormControl {...formControlProps} {...rest}>
      <FormLabel {...labelProps}>{label}</FormLabel>
      <InputGroup>
        <Input {...input} {...props} isReadOnly={isReadOnly} />
        {rightElement ? <InputRightElement width='auto'>{rightElement}</InputRightElement> : undefined}
      </InputGroup>

      <FormHelperText>{helper}</FormHelperText>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default ChakraInput;
