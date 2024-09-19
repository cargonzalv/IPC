import {
  OPTIONS_DESCRIPTIONS,
  PersonalizationDescriptionTableProps
} from 'app/features/playground/components/constants';
import { ChakraProvider } from '@chakra-ui/provider';
import { buildTheme } from 'app/components/chakratheme';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Table,
  TableContainer, Tag,
  Tbody,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import CustomAccordionButton from 'app/features/playground/components/customAccordion';
import { Text } from '@chakra-ui/layout';
import React from 'react';

export const PersonalizationDescriptionTable = ({ options, keys }: PersonalizationDescriptionTableProps) => {
  return (
    <ChakraProvider theme={buildTheme(options)}>
      <Accordion allowMultiple defaultIndex={0} allowToggle>
        <AccordionItem>
          <CustomAccordionButton text={'Personaliza el tema elegido utilizando variantes'}/>
          <AccordionPanel pb={4}>
            <Text color={'primary.600'}>
              Puedes personalizar aun más el Component modificando las variables dentro del código en cuanto a colores u otros elementos del tema seleccionado:
            </Text>
            <TableContainer margin={5} whiteSpace={'normal'}>
              <Table variant='striped' colorScheme='gray'>
                <Thead borderRadius='lg'>
                  <Tr>
                    <Th color={'primary.600'} fontWeight={700}>
                      VARIABLES
                    </Th>
                    <Th color={'primary.600'} fontWeight={700}>
                      DEFINICIÓN
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {keys.map((item) => (
                    <>
                      <Tr>
                        <td style={{ padding: '15px' }}>
                          <Tag
                            backgroundColor={'secondary.200'}
                            color={'primary.600'}
                            border={'1px solid'}
                            borderColor={'disabled.200'}
                          >
                            {item}
                          </Tag>
                        </td>
                        <td style={{ padding: '15px' }} color={'primary.600'}>
                          {OPTIONS_DESCRIPTIONS[item]}
                        </td>
                      </Tr>
                    </>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ChakraProvider>
  );
};
