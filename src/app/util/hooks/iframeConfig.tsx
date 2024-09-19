import { useTheme } from '@chakra-ui/react';
import { getColorFromTheme, isAccessible, isLight } from 'app/components/colorHelper';
import { useConfigContext } from 'app/context/ConfigContext';
import { themeMode } from 'common/constants';

export const useThemeConfig = () => {
  const {
    iframe: {
      config: { whiteLabel = false },
      options: {
        colorText = 'primary.600',
        colorLabel = 'primary.600',
        inputType = themeMode.MINIMAL,
        backgroundMode = themeMode.LIGHT,
        colorPrimary = 'primary.400',
        hideLogo = false,
      },
    },
  } = useConfigContext();

  const isFlatMode = inputType === themeMode.FLAT;
  const isDarkMode = backgroundMode === themeMode.DARK;
  const colorIconSolid = 'primary.300';
  const colorIconOutline = 'primary.600';
  const backgroundColorTheme = isDarkMode ? 'primary.400' : 'secondary.300';
  const colorIconTheme = isFlatMode ? colorIconSolid : colorIconOutline;
  const validateColorTheme = isDarkMode ? 'colorPrimary' : 'tertiary.100';
  const validateIcon = (solid: any, outline: any) => (isFlatMode ? solid : outline);
  const paymentMethodIconColor = (isActive: boolean) => (isActive && isFlatMode ? '#F7F9FA' : '#585987');
  const getBorderColor = (isActive = false) => {
    if (isActive) {
      return 'colorPrimary' || 'primary.400';
    }
    if (isFlatMode) {
      return isDarkMode ? 'primary.800' : 'secondary.100';
    }
    return 'disabled.200';
  };
  const getBackgroundColor = (isActive = false) => {
    if (isActive) {
      return isFlatMode ? 'colorPrimary' : 'secondary.200';
    }
    return isFlatMode ? (isDarkMode ? 'primary.800' : 'secondary.100') : 'secondary.300';
  };

  const getColorTextPaymentMethod = (isActive: boolean) => {
    if (isActive && isFlatMode) {
      return 'secondary.200';
    }
    if (isActive) {
      return 'primary.800';
    }
    if (isFlatMode) {
      return isDarkMode ? 'primary.300' : 'primary.600';
    }
    return 'primary.600';
  };

  const getSelectColor = (type: string) => {
    if (isFlatMode) {
      return isDarkMode ? 'primary.800' : 'secondary.100';
    }
    if (type === 'borderColor') {
      return 'disabled.200';
    }
    return 'secondary.300';
  };

  const getPropsCardsPaymentsMethods = (active = false, isDisabled = false) => {
    const theme = useTheme();
    const backgroundColorKey = getBackgroundColor(active);
    const backgroundColor = getColorFromTheme(theme, backgroundColorKey);
    let iconColor = getAccessibleIconColor(backgroundColor, paymentMethodIconColor(active));
    let colorTextKey = getAccessibleTextColor(backgroundColor, getColorTextPaymentMethod(active));
    let disabledFontColorKey = getAccessibleTextColor(
      backgroundColor,
      getColorFromTheme(theme, getDisabledColor(isDisabled)),
    );

    return {
      borderColor: getBorderColor(active),
      backgroundColor: backgroundColorKey,
      colorText: colorTextKey,
      disabledFontColorKey,
      iconsProps: {
        stroke: iconColor,
        fill: iconColor,
      },
    };
  };

  const getPropsConfirmationShare = () => ({
    border: isFlatMode ? 'none' : '1px solid',
    color: isFlatMode ? 'secondary.300' : 'primary.600',
    backgroundColor: isFlatMode ? 'colorPrimary' : 'none',
    colorIcon: isFlatMode ? 'secondary.300' : 'colorPrimary',
  });

  const getPropsButtonCopyClipboard = () => ({
    backgroundColor: validateColorTheme,
    color: isDarkMode ? 'secondary.300' : 'tertiary.500',
    bg_hover: validateColorTheme,
    bg_active: validateColorTheme,
  });

  const getPropsSelect = () => ({
    buttonBackgroundColor: getSelectColor('backgroundColor'),
    buttonBorderColor: getSelectColor('borderColor'),
    color: isDarkMode ? 'secondary.200' : 'primary.800',
    bgItem: isDarkMode ? 'primary.600' : 'secondary.200',
    colorItem: isDarkMode ? 'secondary.300' : 'primary.800',
    bgItem_hover: isDarkMode ? 'primary.600' : 'secondary.200',
  });

  return {
    colorPrimary,
    colorLabel,
    colorText,
    inputType,
    isDarkMode,
    isFlatMode,
    backgroundMode,
    hideLogo,
    whiteLabel,
    colorIconSolid,
    colorIconOutline,
    backgroundColorTheme,
    colorIconTheme,
    validateIcon,
    getPropsCardsPaymentsMethods,
    getPropsConfirmationShare,
    getPropsButtonCopyClipboard,
    getPropsSelect,
  };
};

const getDisabledColor = (isDisabled: boolean) => (isDisabled ? 'disabled.100' : 'primary.900');

const getAccessibleIconColor = (backgroundColor: string, iconColor: string) => {
  if (!isAccessible(backgroundColor, iconColor)) {
    return isLight(backgroundColor) ? '#000000' : iconColor;
  }
  return iconColor;
};

const getAccessibleTextColor = (backgroundColor: string, colorText: string) => {
  if (!isAccessible(backgroundColor, colorText)) {
    return isLight(backgroundColor) ? 'black' : 'white';
  }
  return colorText;
};
