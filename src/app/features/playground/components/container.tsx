import { Box, Text } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/provider';
import {
  Accordion,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/react';
import App from 'App';
import { buildTheme } from 'app/components/chakratheme';
import { Card } from '@chakra-ui/card';
import {
  THEMES,
  componentContainer,
  iframeConfig,
} from './constants';
import { ThemeOptionCard } from './themeOptionCard';
import { OptionButton } from './optionButton';
import CustomAccordionButton from './customAccordion';
import { usePlayground } from 'app/features/playground/hooks/playground';
import { ConfigOptionsSection } from './configOptionsSection';
import { PersonalizationDescriptionTable } from './personalizationDescriptionTable';

export const PlaygroundContainer = () => {
  const { options} = usePlayground();
  const keys = Object.keys(options);
  return (
    <>
      <ChakraProvider theme={buildTheme(options)}>
        <Accordion allowMultiple defaultIndex={0} allowToggle>
          <AccordionItem>
            <CustomAccordionButton text='Comienza seleccionando un tema'/>
            <AccordionPanel pb={4}>
              <Text color={'primary.600'}>
                Selecciona uno de las cuatro diferentes opciones que tenemos y copia el código de la que mayor se adapte
                a tu sitio.
              </Text>
              <Box display='flex' flexWrap={'wrap'} justifyContent='center' mt={3} mb={3}>
                <OptionButtons />
              </Box>
              <PreviewContainer />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ChakraProvider>
      <PersonalizationDescriptionTable options={options} keys={keys} />
    </>
  );
};

const PreviewContainer = () => {
  const { changeTheme, theme, showComponent, options } = usePlayground();
  return (
    <>
    {showComponent && (
      <Card size={'lg'} bg={'disabled.200'}>
        <App {...iframeConfig} options={options} />
        <Box id={componentContainer} />
        <Box display={'flex'} justifyContent={'center'} mb={3} flexWrap={'wrap'}>
          {Object.keys(THEMES).map((themeName) => (
            <ThemeOptionCard key={themeName} themeName={themeName} onClick={changeTheme} themeSelected={theme}/>
          ))}
        </Box>
      </Card>
    )}
      <ConfigOptionsSection options={options} theme={theme} />
    </>
  );
};

const OptionButtons = () => (
  <>
    { Object.keys(THEMES).map((themeName) => <OptionButton themeName={themeName} />)}
  </>
);
