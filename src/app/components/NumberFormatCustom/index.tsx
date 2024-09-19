import { FC, forwardRef } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

import ChakraInput, { ChakraInputProps } from '../ChakraInput';

type NumberFormatCustomProps = PatternFormatProps & ChakraInputProps;

export const NumberFormatCustom: FC<NumberFormatCustomProps> = forwardRef((props, ref) => (
  <PatternFormat {...props} getInputRef={ref} customInput={ChakraInput} />
));
