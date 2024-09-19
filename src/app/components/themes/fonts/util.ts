const s3Url = 'https://assets.conekta.com/cpanel/statics/assets';

export const fontFace = (
  fontFamily: string,
  fontStyle: string,
  fontWeight: number | string,
  fontDisplay: string,
  src: string,
) => `
    @font-face {
      font-family: '${fontFamily}';
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      font-display: ${fontDisplay};
      src: ${src};
    }
  `;
export const interFontFace = (fontStyle: string, fontWeight: number, fontDisplay: string, fileName: string) => {
  return fontFace(
    'Inter',
    fontStyle,
    fontWeight,
    fontDisplay,
    `url('${s3Url}/fonts/Inter/${fileName}.woff2?v=3.13') format('woff2'),
       url('${s3Url}/fonts/Inter/${fileName}.woff?v=3.13') format('woff');`,
  );
};

export const interVarFontFace = (fontWeight: string, fontDisplay: string, fileName: string) => {
  return fontFace(
    'Inter var',
    'normal',
    fontWeight,
    fontDisplay,
    `url('${s3Url}/fonts/Inter/${fileName}.woff2?v=3.13') format('woff2');`,
  );
};

export const interVarExperimentalFontFace = (fontWeight: number | string, fontDisplay: string, fileName: string) => {
  return fontFace(
    'Inter var experimental',
    'oblique 0deg 10deg',
    fontWeight,
    fontDisplay,
    `url('${s3Url}/fonts/Inter/${fileName}.woff2?v=3.13') format('woff2');`,
  );
};
