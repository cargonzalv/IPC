import { PaymentMethodType, getBinFromCardNumber } from 'app/util/constants';
import { BasicFormCardValues } from 'app/pages/frames/util/interface';
import { datadogLogs } from '@datadog/browser-logs';
import { usePaymentSourceFactory } from 'app/pages/frames/factories/paymentSourceFactory';
import { useTokenFactory } from 'app/pages/frames/factories/tokenFactory';
import { useToken } from 'app/pages/frames/hooks/useToken';
import { useCreditCardSubtmitOrder } from 'app/pages/frames/hooks/creditCardSubmitOrder';

const useFormCard = () => {
  const { createOrder } = useCreditCardSubtmitOrder();
  const { parseFormValuesToPaymentSource } = usePaymentSourceFactory();
  const { parseValuesToTokenDTO } = useTokenFactory();
  const { getToken } = useToken();

  const handleCardFormSubmit = async (values: BasicFormCardValues, initialTime: Date) => {
    const paymentRequestPayload = await parseFormValuesToPaymentSource(values, PaymentMethodType.Card);
    const binNumber = getBinFromCardNumber(values.cardNumber);

    const token = await getToken(parseValuesToTokenDTO(values));
    datadogLogs.logger.info('tokenizer_success');

    paymentRequestPayload.tokenId = token.id;

    await createOrder({
      paymentRequestData: paymentRequestPayload,
      initialTime,
      binNumber,
    });

    return paymentRequestPayload;
  };

  return {
    handleCardFormSubmit,
  };
};

export default useFormCard;
