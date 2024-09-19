import { customFetch } from 'app/pages/frames/helpers/buildFetch';
import { ReferenceNotificationBody } from 'common/interface';
import { replaceTrailingSlash } from 'common/util/string';

const baseUrl = `${replaceTrailingSlash(import.meta.env.VITE_BASE_URL)}api`;

export const getCheckoutById = async (id: string) => {
  try {
    const response = await customFetch(`${baseUrl}/checkout/${id}`, {
      method: 'GET',
    });
    return response;
  } catch (e) {
    throw e;
  }
};
export const postSendEmail = async (id: string, email: string, clientName: string) => {
  try {
    const response = await customFetch(`${baseUrl}/checkout/${id}/sendEmail`, {
      method: 'PUT',
      data: { email, clientName },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const postSendReferenceEmail = async ({ checkoutRequestId, ...rest }: ReferenceNotificationBody) => {
  const data = {
    checkoutRequestId,
    ...rest,
  };
  const response = await customFetch(`${baseUrl}/checkout/${checkoutRequestId}/sendReferenceEmail`, {
    method: 'PUT',
    data,
  });
  return response;
};

export const getEntityById = async (id: string) => {
  try {
    const response = await customFetch(`${baseUrl}/entity/${id}`, {
      method: 'GET',
    });
    return response;
  } catch (e) {
    throw e;
  }
};
