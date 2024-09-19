import { Button as ChakraButton } from '@chakra-ui/button';

import { IButton } from './interface';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { isLight } from '../colorHelper';

export const Button = ({
  children,
  disabled,
  isLoading = false,
  onClick,
  type,
  size = 'lg',
  fullWidth = true,
  ...rest
}: IButton) => {
  const TYPE_EVAL = type ? 'submit' : 'button';
  const { colorPrimary } = useThemeConfig();
  const fontColor = isLight(colorPrimary) ? '#000000' : '#ffffff';
  return (
    <ChakraButton
      isLoading={isLoading}
      disabled={disabled}
      onClick={onClick ? () => onClick() : () => null}
      type={TYPE_EVAL}
      size={size}
      {...(fullWidth ? { width: '100%' } : {})}
      {...rest}
      color={fontColor}
    >
      {children}
    </ChakraButton>
  );
};
