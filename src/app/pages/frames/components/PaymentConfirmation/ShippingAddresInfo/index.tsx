import { Box, Text } from '@chakra-ui/layout';
import { TFunction } from 'i18next';
import React from 'react';

interface ShippingAddresInfoProps {
  title: string;
  shippingAddress: string;
}

export const ShippingAddresInfo = ({ title, shippingAddress }: ShippingAddresInfoProps) => {
  return (
    <Box marginTop={5}>
      <Text fontSize='sm'>
        {title}
        <br />
        <b>{shippingAddress}</b>
      </Text>
    </Box>
  );
};
