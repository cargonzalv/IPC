import { Text, TextProps } from '@chakra-ui/layout';

const EmphasisText = ({ children, ...rest }: TextProps) => (
  <Text fontSize='sm' textTransform='uppercase' paddingBottom='4' fontWeight='semibold' {...rest}>
    {children}
  </Text>
);

export default EmphasisText;
