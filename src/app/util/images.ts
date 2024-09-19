import {
  imgMainLogoFullBlue,
  imgMainLogoFullWhite,
  imgPoweredLogoBlack,
  imgPoweredLogoWhite
} from 'app/util/constants';

export const getLogo = (logo: any, isDarkMode?: boolean, hideLogo?: boolean, checkBase?: boolean) => {
  const { size, source, typeImage, typeBase64 } = logo;

  let customLogo = false;
  let imgLogo: string =  isDarkMode ? imgMainLogoFullWhite : imgMainLogoFullBlue;

  if (hideLogo) {
    imgLogo = isDarkMode ? imgPoweredLogoBlack : imgPoweredLogoWhite;
  }

  if (size !== 'default' && source !== 'null' && typeImage === 'url') {
    const validationImage = /(https?:\/\/.*\.(?:png|svg|jpg|jpeg))/i;
    if (validationImage.test(source)) {
      customLogo = true;
      imgLogo = source;
    }
  }

  if (checkBase && size !== 'default' && source !== 'null' && typeImage === 'base64' && typeBase64 !== 'null') {
    customLogo = true;
    imgLogo = `data:image/${typeBase64}${typeBase64 === 'svg' ? '+xml' : ''};base64, ${source}`;
  }

  return { customLogo, imgLogo, size };
};
