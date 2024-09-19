import { Button } from '@chakra-ui/button';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import CopyThemeTooltip from './copyThemeTooltip';
import { usePlayground } from 'app/features/playground/hooks/playground';

interface OptionButtonProps {
  themeName: string;
}

export const OptionButton = ({ themeName }: OptionButtonProps) => {
  const { copyThemeToClipboard } = usePlayground();
  const capitalizedThemeName = themeName.charAt(0).toUpperCase() + themeName.slice(1);
  const [hasCopiedOption, setHasCopiedOption] = useState(false);
  const colors = {
    icon: 'primary.300',
    bg: 'secondary.200',
    borderColor: 'disabled.200'
  };

  return (
    <Box _hover={{ boxShadow: 'md' }} maxW='xs' margin={3} cursor='pointer' textAlign='center'>
      <CopyThemeTooltip hasCopied={hasCopiedOption} >
        <Button
          size='xs'
          color='primary.600'
          fontWeight={700}
          rightIcon={hasCopiedOption ? <CheckIcon color={ colors.icon }/> : <CopyIcon color={ colors.icon }/>}
          backgroundColor={ colors.bg }
          _active={{ bg: colors.bg }}
          _hover={{ bg: colors.bg }}
          borderColor={colors.borderColor}
          border={'1px solid'}
          onClick={ () => copyThemeToClipboard(themeName, setHasCopiedOption, hasCopiedOption) }
        >
          {capitalizedThemeName} Mode
        </Button>
      </CopyThemeTooltip>
    </Box>
  );
};
