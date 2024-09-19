import { customFetch } from 'app/pages/frames/helpers/buildFetch';
import { replaceTrailingSlash } from 'common/util/string';

const baseUrl = `${replaceTrailingSlash(import.meta.env.VITE_BASE_URL)}api/checkout`;

export const monthlyInstallments = async ({ id, bin }: { id: string; bin: string }) => {
  try {
    const url = `${baseUrl}/${id}/monthlyInstallments`;
    const customHeaders = {
      bin,
    };
    const response = await customFetch(url, {
      method: 'GET',
      headers: customHeaders,
    });

    return response;
  } catch (e) {
    throw e;
  }
};
