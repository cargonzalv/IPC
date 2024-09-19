export const isLight = (hex: string): boolean => {
  let [r, g, b] = hexToRgb(hex);
  let lum = luminance(r, g, b);
  return lum > 0.5;
};

const hexToRgb = (hex: string): [number, number, number] => {
  // Eliminar el símbolo '#' si está presente
  hex = hex.replace('#', '');

  // Si el código es de 3 caracteres, expandirlo a 6 caracteres
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
};

const luminance = (r: number, g: number, b: number): number => {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const isAccessible = (foregroundColor: string, backgroundColor: string) => {
  const [r1, g1, b1] = hexToRgb(foregroundColor);
  const [r2, g2, b2] = hexToRgb(backgroundColor);

  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, g2, b2);

  const ratio = contrastRatio(lum1, lum2);

  // Return true if the contrast ratio meets WCAG AA standards (4.5:1 for normal text)
  return ratio >= 4.5;
};

const contrastRatio = (luminance1: number, luminance2: number) => {
  return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
};

export const getColorFromTheme = (theme: any, colorKey: string) => {
  return colorKey.split('.').reduce((acc, part) => acc && acc[part], theme.colors);
};
