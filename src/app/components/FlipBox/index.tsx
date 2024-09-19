import { Button } from '@chakra-ui/button';
import { InfoIcon, InfoOutlineIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import { HTMLChakraProps } from '@chakra-ui/system';
import { withClick, WithClickProps } from 'app/util/hooks/withClick';
import { useRef, ReactNode, ComponentType, useState } from 'react';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';

interface FlipBoxProps extends HTMLChakraProps<'div'> {
  front: ReactNode;
  back: ReactNode;
  openButton?: ComponentType<WithClickProps>;
  closeButton?: ComponentType<WithClickProps>;
}

interface ToggleButtonProps {
  ariaLabel: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const ToggleButton = ({ ariaLabel, icon, onClick }: ToggleButtonProps) => {
  const { backgroundColorTheme } = useThemeConfig();
  return (
    <Button
      pt='1'
      color='colorText'
      backgroundColor={backgroundColorTheme}
      _hover={{ bg: backgroundColorTheme }}
      aria-label={ariaLabel}
      variant='link'
      onClick={onClick}
      rightIcon={icon}
    />
  );
};

export const FlipBox = ({ front, back, openButton, closeButton, ...rest }: FlipBoxProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const ref = isFlipped ? frontRef.current : backRef.current;
  const { colorIconOutline, colorIconSolid, validateIcon, hideLogo } = useThemeConfig();
  const DEFAULT_HEIGHT = hideLogo ? 50 : 90;
  const NEW_HEIGHT = ref?.clientHeight ?? DEFAULT_HEIGHT;
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);

  const handleClick = () => {
    setTimeout(() => setHeight(NEW_HEIGHT > DEFAULT_HEIGHT ? NEW_HEIGHT : DEFAULT_HEIGHT), 1000);
    setIsFlipped(!isFlipped);
  };

  const DefaultToggleButton = withClick(ToggleButton, handleClick);
  const CustomOpenButtonComponent = openButton ? withClick(openButton, handleClick) : undefined;
  const CustomCloseButtonComponent = closeButton ? withClick(closeButton, handleClick) : undefined;

  const iconButtonOutline = <InfoOutlineIcon color={colorIconOutline} />;
  const iconButtonSolid = <InfoIcon color={colorIconSolid} />;
  const OpenButton = <DefaultToggleButton ariaLabel='Open' icon={validateIcon(iconButtonSolid, iconButtonOutline)} />;
  const CloseButton = <DefaultToggleButton ariaLabel='Close' icon={<SmallCloseIcon />} />;
  const OpenButtonComponent = CustomOpenButtonComponent ? <CustomOpenButtonComponent /> : OpenButton;
  const CloseButtonComponent = CustomCloseButtonComponent ? <CustomCloseButtonComponent /> : CloseButton;

  return (
    <Box width='full'>
      <Box id='card' position='relative' w='full' h={`${height}px`} overflow='hidden'>
        <Box
          ref={frontRef}
          position='absolute'
          width='100%'
          transition='transform 1s'
          style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            ...(isFlipped ? { transform: 'rotateY(180deg)' } : { transform: 'rotateY(0deg)' }),
          }}
        >
          <Flex
            justify='space-between'
            align='start'
            {...rest}
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              backfaceVisibility: 'hidden',
            }}
          >
            {front}
            {!hideLogo && OpenButtonComponent}
          </Flex>
        </Box>
        {!hideLogo && (
          <Flex
            justify='space-between'
            align='start'
            position='absolute'
            width='100%'
            transition='transform 1s'
            transform='rotateY(180deg)'
            style={{
              backfaceVisibility: 'hidden',
              ...(isFlipped ? { transform: 'rotateY(0deg)' } : { transform: 'rotateY(-180deg)' }),
            }}
            {...rest}
            ref={backRef}
          >
            {back}
            {CloseButtonComponent}
          </Flex>
        )}
      </Box>
    </Box>
  );
};
