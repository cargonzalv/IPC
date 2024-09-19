import * as VALID_TOKEN_RESPONSE from './5200000000001096.json';

const VALID_CARD_FOR_TOKENIZATION = '5200000000001096';
const FORMATTED_VALID_CARD_FOR_TOKENIZATION = '5200 0000 0000 1096';
const INVALID_CARD_FOR_TOKENIZATION = '4000000000002701';

const TOKENS_RESPONSE: Record<string, any> = {
  [VALID_CARD_FOR_TOKENIZATION]: VALID_TOKEN_RESPONSE,
};

export {
  TOKENS_RESPONSE,
  VALID_CARD_FOR_TOKENIZATION,
  INVALID_CARD_FOR_TOKENIZATION,
  FORMATTED_VALID_CARD_FOR_TOKENIZATION,
};
