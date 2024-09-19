import { Provider } from 'app/util/constants';
import { ConektaSource } from 'common/constants';

export interface IOptionsTheme {
  backgroundMode: string;
  colorPrimary: string;
  colorText: string;
  colorLabel: string;
  inputType: string;
  hideLogo: boolean | string;
}

export interface PersonalizationDescriptionTableProps {
  options: IOptionsTheme;
  keys: string[];
}

export const OPTIONS_DESCRIPTIONS: IOptionsTheme = {
  colorPrimary: 'Cambia el color de los botones y el indicador de aquellos elementos accionables por los de tu marca.',
  backgroundMode:
    'Los modos permitidos son: lightMode (#FDFEFF) que corresponde a fondo blanco o darkMode (#081133) que corresponde al fondo color.',
  colorText: 'Modifica el color del texto.',
  colorLabel: 'Modifica el color de los labels.',
  hideLogo: 'Reemplaza el logo de Conekta por la versión reducida: Power by Conekta.',
  inputType:
    'Los modos permitidos son: flatMode que corresponde al estilo solid o minimalMode que corresponde al estilo outline.',
};

export const THEMES: Record<string, IOptionsTheme> = {
  light: {
    backgroundMode: 'lightMode',
    colorPrimary: '#081133',
    colorText: '#585987',
    colorLabel: '#585987',
    inputType: 'minimalMode',
    hideLogo: false,
  },
  dark: {
    backgroundMode: 'darkMode',
    colorPrimary: '#2C4CF5',
    colorText: '#B4B5D3',
    colorLabel: '#B4B5D3',
    inputType: 'flatMode',
    hideLogo: false,
  },
  flat: {
    backgroundMode: 'lightMode',
    colorPrimary: '#29CC6A',
    colorText: '#212247',
    colorLabel: '#585987',
    inputType: 'flatMode',
    hideLogo: false,
  },
  minimal: {
    backgroundMode: 'lightMode',
    colorPrimary: '#7B61FF',
    colorText: '#212247',
    colorLabel: '#585987',
    inputType: 'minimalMode',
    hideLogo: false,
  },
};

export const componentContainer = 'componentContainer';

export const iframeConfig = {
  integration: true,
  isSelfHosted: false,
  isPlayground: true,
  playgroundConfig: { provider: Provider.datalogic },
  conektaSource: ConektaSource.COMPONENT,
  config: {
    locale: 'es',
    publicKey: 'key_YXQIoiPhGK7DBo45dsEEEGa',
    targetIFrame: componentContainer,
    checkoutRequestId: '91e227c0-289d-4ecf-9ffa-95dac0bd55ea',
  },
  callbacks: {},
};
