import { ModalHeader } from '@chakra-ui/modal';
import { Alert } from '@chakra-ui/alert';
import { darkTheme } from './themes/dark';
import { ListItem, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { themeMode } from 'common/constants';
import { IPersonalizationOptions } from 'common/interface';
import { MenuItem, MenuList } from '@chakra-ui/react';

const GENERIC_DEFAULT_PROPS = {
  fontFamily: 'body',
  fontWeight: 'light',
};

const getColor = (inputType: string, backgroundMode: string) => {
  if (inputType === themeMode.FLAT) {
    if (backgroundMode === themeMode.DARK) {
      return 'primary.800';
    }
    return 'secondary.100';
  }
  return undefined;
};

const getInputColor = (inputType: string, backgroundMode: string) => {
  if (inputType === themeMode.FLAT && backgroundMode === themeMode.DARK) {
    return 'disabled.200';
  }
  return 'primary.800';
};

const setModalHeaderDefaults = () => {
  ModalHeader.defaultProps = {
    ...ModalHeader.defaultProps,
    fontFamily: 'body',
  };
};

const setButtonDefaults = () => {
  Button.defaultProps = {
    ...Button.defaultProps,
    backgroundColor: 'colorPrimary',
    _hover: {
      bg: 'colorPrimary',
    },
    fontFamily: 'body',
  };
};

const setTextDefaults = () => {
  Text.defaultProps = {
    ...Text.defaultProps,
    color: 'colorText',
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setAlertDefaults = () => {
  Alert.defaultProps = {
    ...Alert.defaultProps,
    ...GENERIC_DEFAULT_PROPS,
    gap: '8px',
  };
};

const setFormControlDefaults = () => {
  FormControl.defaultProps = {
    ...FormControl.defaultProps,
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setInputDefaults = (inputType: string, backgroundMode: string) => {
  Input.defaultProps = {
    ...Input.defaultProps,
    color: getInputColor(inputType, backgroundMode),
    _focus: {
      borderColor: inputType === themeMode.FLAT ? 'primary.400' : 'disabled.200',
    },
    _focusVisible: {
      borderColor: inputType === themeMode.FLAT ? 'primary.400' : 'disabled.200',
    },
    backgroundColor: getColor(inputType, backgroundMode),
    borderColor: getColor(inputType, backgroundMode),
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setFormLabelDefaults = () => {
  FormLabel.defaultProps = {
    ...FormLabel.defaultProps,
    color: 'colorLabel',
    marginBottom: 1,
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setListItemDefaults = () => {
  ListItem.defaultProps = {
    ...ListItem.defaultProps,
    color: 'colorText',
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setMenuItemDefaults = (inputType: string, backgroundMode: string) => {
  MenuItem.defaultProps = {
    ...MenuItem.defaultProps,
    color: 'colorLabel',
    fontSize: '14px',
    backgroundColor: backgroundMode === themeMode.DARK ? 'primary.800' : 'secondary.300',
    ...GENERIC_DEFAULT_PROPS,
  };
};

const setMenuListDefaults = (inputType: string, backgroundMode: string) => {
  MenuList.defaultProps = {
    ...MenuList.defaultProps,
    border: 'none',
    backgroundColor: backgroundMode === themeMode.DARK ? 'primary.800' : 'secondary.300',
    ...GENERIC_DEFAULT_PROPS,
  };
};

const PROPS_THEMES = (options: IPersonalizationOptions) => {
  const { inputType = themeMode.MINIMAL, backgroundMode = themeMode.LIGHT } = options;

  setModalHeaderDefaults();
  setButtonDefaults();
  setTextDefaults();
  setAlertDefaults();
  setFormControlDefaults();
  setInputDefaults(inputType, backgroundMode);
  setMenuItemDefaults(inputType, backgroundMode);
  setMenuListDefaults(inputType, backgroundMode);
  setFormLabelDefaults();
  setListItemDefaults();
};
export const buildTheme = (options: any) => {
  PROPS_THEMES(options);
  return darkTheme(options);
};
