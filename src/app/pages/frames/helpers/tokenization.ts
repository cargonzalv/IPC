import { customFetch } from 'app/pages/frames/helpers/buildFetch';
import { TokenRequest } from 'common/interface';
import { replaceTrailingSlash } from 'common/util/string';
import { Base64Tokenization, objectKeys } from 'common/util/tokenizationHandle';
import { Fingerprint } from './fingerprint';
import { Method } from 'axios';

export const conektaBackendUrl = replaceTrailingSlash(import.meta.env.VITE_CONEKTA_URL || '');

const errorHandler = (data: Record<string, any>) => {
  if (typeof data !== 'object') {
    throw {
      object: 'error',
      type: 'invalid_request_error',
      message: "Supplied parameter 'token' is not a javascript object or a form",
      message_to_purchaser: 'The card could not be processed, please try again later',
    };
  }
  if (objectKeys(data).length <= 0) {
    throw {
      object: 'error',
      type: 'invalid_request_error',
      message:
        "supplied parameter 'token' is usable object but has no values (e.g. amount, description) associated with it", // eslint-disable-line max-len
      message_to_purchaser: 'The card could not be processed, please try again later',
    };
  }
  if (!data?.card) {
    throw {
      object: 'error',
      type: 'invalid_request_error',
      message:
        "The form or hash has no attributes 'card'.  If you are using a form, please ensure that you have have an input or text area with the data-conekta attribute 'card[number]'.  For an example form see: https://github.com/conekta/conekta.js/blob/master/examples/credit_card.html", // eslint-disable-line max-len
      message_to_purchaser: 'The card could not be processed, please try again later',
    };
  }
};

const successCallback = (data: Record<string, any>) => {
  if (!data || data.object === 'error' || !data.id) {
    throw (
      data || {
        object: 'error',
        type: 'api_error',
        message: "Something went wrong on Conekta's end",
        message_to_purchaser: 'Your code could not be processed, please try again later',
      }
    );
  }
  return data;
};
export const requestToken = async (publicKey: string, { tokenForm }: TokenRequest): Promise<any> => {
  const url = 'tokens';
  return commonTokenServiceLogic(publicKey, url, 'POST', tokenForm);
};

// the merchant could have created a token previously by api, if so we update and reuse it
export const updateToken = async (publicKey: string, { tokenForm }: TokenRequest): Promise<any> => {
  if (!tokenForm.token_id) {
    throw {
      object: 'error',
      type: 'invalid_request_error',
      message: 'The token_id parameter is required for update token.',
      message_to_purchaser: 'The card could not be processed, please try again later',
    };
  }
  const url = 'tokens/' + tokenForm.token_id;
  return commonTokenServiceLogic(publicKey, url, 'PUT', tokenForm);
};

const commonTokenServiceLogic = async (
  publicKey: string,
  url: string,
  method: Method,
  tokenForm: Record<string, any>,
): Promise<any> => {
  try {
    errorHandler(tokenForm);
    if (tokenForm?.card?.address) {
      delete tokenForm.card.address;
    }
    tokenForm.card.device_fingerprint = await Fingerprint.getVisitorId();

    const headers: Record<string, any> = buildTokenizationHeaders(publicKey);
    const response = await customFetch(conektaBackendUrl + url, {
      method,
      data: tokenForm,
      headers: headers,
    });

    return successCallback(response);
  } catch (e) {
    throw e;
  }
};

const buildTokenizationHeaders = (publicKey: string) => {
  return {
    RaiseHtmlError: false,
    Accept: 'application/vnd.conekta-v' + import.meta.env.VITE_CONEKTA_API + '+json',
    'Conekta-Client-User-Agent':
      '{"agent":"Conekta JavascriptBindings-AJAX/' +
      import.meta.env.VITE_CONEKTA_VERSION +
      ' build ' +
      import.meta.env.VITE_CONEKTA_BUILD +
      '"}',
    Authorization: 'Basic ' + Base64Tokenization.encode(publicKey + ':'),
  };
};
