import { datadogLogs } from '@datadog/browser-logs';
import { useCheckoutFrameContext } from 'app/features/paymentForm/state/CheckoutFrameContext';
import { useConfigContext } from 'app/context/ConfigContext';
import { IConektaTokenData } from 'app/pages/frames/components/Form/FormCard/interfaces';
import { requestToken, updateToken } from 'app/pages/frames/helpers/tokenization';
import { CardValues, buildTokenData, cleanSensitiveData } from './helpers';
import { CheckoutRequest } from 'common/interface';

export const useToken = () => {
  const { checkoutRequest } = useCheckoutFrameContext();
  const {
    iframe: {
      conektaSource,
      config: { publicKey },
      callbacks: { onCreateTokenError },
    },
  } = useConfigContext();
  const { needsShippingContact = false, recurrent: isRecurrent = false } = checkoutRequest;

  const conektaErrorResponseHandler = (response: any) => {
    onCreateTokenError?.(response);
    if (response.config?.data) {
      response.config.data = cleanSensitiveData(response.config.data);
    }
    datadogLogs.logger.error('tokenizer_error', { error: response });
    const errorTemplate: Record<string, any> = { type: 'error', show: true, message: response?.message_to_purchaser };
    throw errorTemplate;
  };

  const getToken = async (values: CardValues): Promise<any> => {
    try {
      const conektaTokenData: IConektaTokenData = buildTokenPayload(
        values,
        isRecurrent,
        checkoutRequest,
        needsShippingContact,
      );

      // the merchant could have created a token previously by api, if so we update and reuse it
      const tokenService = !conektaTokenData.token_id ? requestToken : updateToken;
      return await tokenService(publicKey, {
        tokenForm: conektaTokenData,
        originType: conektaSource,
      });
    } catch (e) {
      conektaErrorResponseHandler(e);
    }
  };
  return { getToken };
};

const buildTokenPayload = (
  values: CardValues,
  isRecurrent: boolean,
  checkoutRequest: CheckoutRequest,
  needsShippingContact: boolean,
) => {
  const { customerInfo } = values;
  const checkoutCustomerName = checkoutRequest.orderTemplate.customerInfo?.name ?? '';
  const customerName: string = isRecurrent ? customerInfo?.name : checkoutCustomerName;
  const tokenId: string = checkoutRequest.token?.tokenId ?? '';
  return buildTokenData({
    tokenId,
    customerName,
    needsShippingContact,
    cardValues: values,
  });
};
