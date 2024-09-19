import { ReactNode } from 'react';
import { HTMLChakraProps } from '@chakra-ui/system';
import { Flex } from '@chakra-ui/layout';

interface HorizontalSliderProps extends HTMLChakraProps<'div'> {
  children: ReactNode;
}

const HorizontalSlider = ({ children, ...rest }: HorizontalSliderProps) => {
  return (
    <Flex
      color='white'
      width='100%'
      overflow='auto'
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default HorizontalSlider;
