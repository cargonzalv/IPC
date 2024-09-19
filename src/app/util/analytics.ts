import { v4 as uuidv4 } from 'uuid';

export const getGAClientId = () => {
  let gaClientID = 'GA-';
  const gaCookie = document.cookie.split('; ').find((row) => row.startsWith('_ga='));
  if (gaCookie) {
    const gaCookieValue = gaCookie.split('=')[1];
    gaClientID += gaCookieValue.split('.').slice(2).join('.');
  } else {
    gaClientID += generateGAClientId();
  }
  return gaClientID;
};

/**
 * this function is called onlye when the user dont accept cookies
 * @returns generatedGAUserId
 */
const generateGAClientId = (): string => {
  if (!localStorage.getItem('unique_ga_client_id')) {
    localStorage.setItem('unique_ga_client_id', generateUniqueId());
  }
  return localStorage.getItem('unique_ga_client_id')!;
};

const generateUniqueId = () => {
  return uuidv4();
};

export const sendDataToDataLayer = (eventName: string, data: any) => {
  const browserWindow = window as any;
  if (browserWindow.dataLayer) {
    browserWindow.dataLayer.push({
      event: eventName,
      ...data,
    });
  } else {
    console.error('GTM dataLayer not found');
  }
};
