import { CardValues } from '../hooks/helpers';
import { BasicFormCardValues } from '../util/interface';

export const useTokenFactory = () => {
  const parseValuesToTokenDTO = (values: BasicFormCardValues): CardValues => {
    const { cardExpMonthYear, ...restValues } = values;
    const cardExpValues = cardExpMonthYear.split('/');
    const formCardValues: CardValues = {
      cardExpMonth: cardExpValues[0],
      cardExpYear: cardExpValues[1],
      ...restValues,
    };
    return formCardValues;
  };
  return { parseValuesToTokenDTO };
};
