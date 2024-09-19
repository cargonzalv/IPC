import { PropsWithChildren } from 'react';
import { chakra } from '@chakra-ui/system';

const Icon = ({ children }: PropsWithChildren) => {
  return (
    <chakra.span
      fontFamily='Material Symbols Outlined'
      fontStyle='normal'
      fontSize='xl'
      lineHeight={1}
      letterSpacing='normal'
      textTransform='none'
      display='inline-block'
      whiteSpace='nowrap'
      overflow='hidden'
      width={5}
      height={5}
      flexShrink={0}
    >
      {children}
    </chakra.span>
  );
};

export default Icon;
