import { Global } from '@emotion/react';
import { fontFace, interFontFace, interVarExperimentalFontFace, interVarFontFace } from './util';

const iconsFont = `${fontFace(
  'Material Icons',
  'normal',
  400,
  'swap',
  'url(https://fonts.gstatic.com/s/materialicons/v103/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")',
)}

${fontFace(
  'Material Symbols Outlined',
  'normal',
  400,
  'swap',
  'url(https://fonts.gstatic.com/s/sandbox/materialsymbolsoutlined/v7/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOelbd5zrDAt.woff) format("woff")',
)}`;

export const Fonts = () => {
  const fontsCss = `
    ${interFontFace('normal', 100, 'swap', 'Inter-Thin')}
    ${interFontFace('normal', 200, 'swap', 'Inter-ExtraLight')}
    ${interFontFace('normal', 300, 'swap', 'Inter-Light')}
    ${interFontFace('normal', 400, 'swap', 'Inter-Regular')}
    ${interFontFace('normal', 500, 'swap', 'Inter-Medium')}
    ${interFontFace('normal', 600, 'swap', 'Inter-SemiBold')}
    ${interFontFace('normal', 700, 'swap', 'Inter-Bold')}
    ${interFontFace('normal', 800, 'swap', 'Inter-ExtraBold')}
    ${interFontFace('normal', 900, 'swap', 'Inter-Black')}
    ${interVarFontFace('100 900', 'swap', 'Regular')}
    ${interVarExperimentalFontFace('100 900', 'swap', 'Inter.var')}
    ${iconsFont}
  `;

  return <Global styles={fontsCss} />;
};
