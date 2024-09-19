import { IOptionsTheme, THEMES } from '../components/constants';
import { useState } from 'react';

export const usePlayground = () => {
  const [ options, setOptions ] = useState<IOptionsTheme>(THEMES.light);
  const [ showComponent, setShowComponent ] = useState(true);
  const [ theme, setTheme ] = useState('light');
  const changeTheme = (newTheme: string) => {
    setShowComponent(false);
    setTheme(newTheme);
    setTimeout(() => {
      setOptions(THEMES[newTheme]);
      setShowComponent(true);
    });
  };

  const copyThemeToClipboard = (themeName: string, setValue: any, value: boolean) => {
    const jsonString = JSON.stringify(THEMES[themeName], null, '    ');
    const unquoted = jsonString.replace(/"([^"]+)":/g, '$1:');
    setValue(!value);
    navigator.clipboard.writeText(`const options = ${unquoted}`);
    setTimeout(() => { setValue(false); }, 1000);
  };

  return {
    theme,
    options,
    showComponent,
    changeTheme,
    copyThemeToClipboard
  };
};
