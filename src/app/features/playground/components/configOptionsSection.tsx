import React, { useState } from 'react';
import { Card, CardBody } from '@chakra-ui/card';
import { CardHeader } from '@chakra-ui/react';
import CopyThemeTooltip from 'app/features/playground/components/copyThemeTooltip';
import { IconButton } from '@chakra-ui/button';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { usePlayground } from 'app/features/playground/hooks/playground';

export const ConfigOptionsSection = ({ options, theme }: any) => {
  const { copyThemeToClipboard} = usePlayground();
  const [hasCopied, setHasCopied]  = useState(false);
  const keys = Object.keys(options);

  return(
    <Card variant={ 'filled' } mt={ 4 }>
      <CardHeader display={ 'flex' } justifyContent={ 'right' } padding={ 2 } bg={ 'disabled.200' }>
        <CopyThemeTooltip hasCopied={ hasCopied }>
          <IconButton
            backgroundColor={ 'secondary.400' }
            size={ 'xs' }
            aria-label='Copy database'
            _hover={ { bg: 'primary.50' } }
            _active={ { bg: 'primary.50' } }
            onClick={ () => copyThemeToClipboard(theme, setHasCopied, hasCopied) }
            icon={ hasCopied ? <CheckIcon color={ 'black' }/> : <CopyIcon color={ 'black' }/> }
          />
        </CopyThemeTooltip>
      </CardHeader>
      <CardBody padding={ 2 } ml={ 6 }>
        <span style={ { color: 'tertiary.50' } }>{ 'const ' } </span>
        <span style={ { color: 'primary.600' } }> { 'options = ' }</span>
        <span style={ { color: 'secondary.500' } }>{ '{' }</span>
        <br/>
        { keys.map((item) => (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={ { color: 'tertiary.50' } }>{ `${ item }:` }</span>
            <span style={ { color: 'primary.600' } }>{ `'${ options[item] }',` }</span>
            <br/>
          </>
        ))}
        <span style={ { color: 'secondary.500' } }>{ '}' }</span>
      </CardBody>
    </Card>
  );
};
