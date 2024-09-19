import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { awsS3UrlCheckout } from 'app/util/constants';

interface ThemeOptionCardProps {
  themeName: string;
  themeSelected: string;
  onClick: (themeName: string) => void;
}

export const ThemeOptionCard = ({ themeName, onClick, themeSelected }: ThemeOptionCardProps) => {
  const capitalizedThemeName = themeName.charAt(0).toUpperCase() + themeName.slice(1);
  const isSelected = themeName === themeSelected;
  return (
    <Box
      borderRadius='lg'
      maxW='sm'
      style={{ cursor: 'pointer', textAlign: 'center' }}
      onClick={() => onClick(themeName)}
    >
      <Image
        src={`${awsS3UrlCheckout}/${capitalizedThemeName} Mode.png`}
        alt={`${capitalizedThemeName} Mode`}
        borderRadius='lg'
        ml={3}
        mr={3}
        width={150}
        border={isSelected ? '2px solid' : 'none'}
        borderColor={isSelected ? 'tertiary.500' : 'none'}
      />
      <Text color={ isSelected ? 'black' : 'primary.600' }  style={{ fontWeight: '600' }}>{capitalizedThemeName} Mode</Text>
    </Box>
  );
};
