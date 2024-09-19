import { datadogLogs } from '@datadog/browser-logs';
import { customFetch } from 'app/pages/frames/helpers/buildFetch';
import { getBinFromCardNumber, getHashFromString } from 'app/util/constants';
import { replaceTrailingSlash } from 'common/util/string';

const baseUrl = `${replaceTrailingSlash(import.meta.env.VITE_BASE_URL)}api/order`;

export const paymentSourceService = async (data: Record<string, any>) => {
  try {
    const response = await customFetch(baseUrl + '/payment-source', {
      method: 'POST',
      data,
    });
    return response;
  } catch (e) {
    datadogLogs.logger.error('payment_source_error', { error: e });
    throw e;
  }
};

export const createOrderService = async (data: Record<string, any>) => {
  try {
    const response = await customFetch(baseUrl, {
      method: 'POST',
      data,
    });
    return response;
  } catch (e) {
    datadogLogs.logger.error('create_order_error', { error: e });
    throw e;
  }
};

export const createOrderWithCreditCardService = async ({
  binNumber = '',
  fingerprint = '',
  data,
}: {
  binNumber?: string;
  fingerprint?: string;
  data: Record<string, any>;
}) => {
  try {
    const body = JSON.stringify(data);
    const customHeaders = {
      Bin: getBinFromCardNumber(binNumber),
      IdempotencyKey: getHashFromString(body),
      userId: fingerprint,
    };
    const response = await customFetch(baseUrl, { method: 'POST', data, headers: customHeaders });
    return response;
  } catch (e) {
    datadogLogs.logger.error('create_order_with_card_error', { error: e });
    throw e;
  }
};
