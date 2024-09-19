import { AccordionButton, AccordionIcon } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/layout';

const CustomAccordionButton = ({ text }: any) => {
  return (
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          <Text color={'primary.600'} fontWeight={600}>
            { text }
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
};

export default CustomAccordionButton;
