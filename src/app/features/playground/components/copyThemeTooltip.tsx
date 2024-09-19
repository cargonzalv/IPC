import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export interface IPropsCopy {
  hasCopied: boolean;
}

const CopyThemeTooltip = ({ hasCopied, children }: PropsWithChildren<IPropsCopy>) => {
  return (
    <Popover placement={'top'} isOpen={hasCopied} >
      <PopoverTrigger>
        { children }
      </PopoverTrigger>
      <PopoverContent boxShadow='2xl' border='1px solid' borderColor='primary.600' bg='secondary.200' >
        <PopoverBody>Se copió el código en el portapapeles</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CopyThemeTooltip;
