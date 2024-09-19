import { customFetch } from 'app/pages/frames/helpers/buildFetch';
import { replaceTrailingSlash } from 'common/util/string';

const baseUrl = `${replaceTrailingSlash(import.meta.env.VITE_BASE_URL)}api/3ds`;

export const generateJWT = async ({ data }: { data: any }) => {
  try {
    const url = `${baseUrl}/generate`;
    const response = await customFetch(url, {
      method: 'POST',
      data,
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const checkEnroll = async ({ data }: { data: any }) => {
  try {
    const url = `${baseUrl}/check-enroll`;
    const response = await customFetch(url, {
      method: 'POST',
      data,
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const validate = async ({ data }: { data: any }) => {
  try {
    const url = `${baseUrl}/validate`;
    const response = await customFetch(url, {
      method: 'POST',
      data,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
