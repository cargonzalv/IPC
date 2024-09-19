import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ConektaSource } from 'common/constants';

const ERRORS_TO_SHOW = [
  'conekta.errors.processing.bank.insufficient_funds',
  'conekta.errors.processing.bank.declined',
  'conekta.errors.processing.charge.card_payment.suspicious_behaviour',
  'conekta.errors.parameter_validation.card.forbidden_mcc_sivale',
  'conekta.errors.processing.charge.card_payment.declined_by_3ds',
  'conekta.errors.parameter_validation.charge.international_card_not_allowed',
  'conekta.errors.parameter_validation.charge.risk_validation_amount_reaching',
  'conekta.errors.processing.bank.call_issuer',
  'conekta.errors.parameter_validation.charge.blocked_payment_source',
  'conekta.errors.precondition_required.combo.order.cannot_be_updated_because_has_charge_paid',
  'conekta.errors.precondition_required.combo.order.cannot_be_updated_because_has_charge',
  'conekta.errors.parameter_validation.charge.credit_forbidden_mcc',
  'conekta.errors.parameter_validation.card.restricted_bank_18_msi_only',
  'conekta.errors.parameter_validation.card.forbidden_mcc_rappi',
  'conekta.errors.parameter_validation.charge.forbidden_card_for_company',
  'conekta.errors.parameter_validation.charge.cash_payment.oxxo_payment.disabled',
  'conekta.errors.parameter_validation.charge.bank_payment.spei_payment.disabled',
  'conekta.errors.parameter_validation.combo.order.currency_type.card.maximum',
  'conekta.errors.processing.bank.timeout',
  'conekta.errors.processing.bank.amount_over_limit',
  'conekta.errors.processing.bank.invalid_expiration_date',
  'conekta.errors.parameter_validation.charge.monthly_installments_not_supported_for_international_cards',
  'conekta.errors.parameter_validation.payment_method.token_id.incorrect_livemode_of_token',
  'conekta.errors.processing.bank.general_error',
  'conekta.errors.processing.bank.format_error',
  'conekta.errors.processing.bank.communication_error',
  'conekta.errors.processing.bank.invalid_merchant',
  'conekta.errors.processing.bank.invalid_card_security_code',
  'conekta.errors.processing.bank.card_not_supported',
  'conekta.errors.parameter_validation.charge.disabled_msi_company',
  'conekta.errors.parameter_validation.charge.monthly_installments_not_supported_for_debit',
  'conekta.errors.parameter_validation.charge.rejected_by_risk',
  'conekta.errors.parameter_validation.charge.expired_cvv_dynamic',
  'conekta.errors.parameter_validation.charge.invalid_number',
  'conekta.errors.processing.bank.attempts_over_limit',
  'conekta.errors.processing.bank.pick_up_card',
  'conekta.errors.parameter_validation.charge.mcc_forbidden',
];

const DEFAULT_INTERNAL_ERROR_MESSAGE = 'hostedCheckout.internalError.title';
const DEFAULT_BUSINESS_ERROR_MESSAGE = 'hostedCheckout.businessError.title';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const conektaSource = sessionStorage.getItem('conektaSource') || ConektaSource.COMPONENT;

    const customHeaders = {
      'Content-Type': 'application/json',
      'x-source': conektaSource,
    };

    config.headers = { ...config.headers, ...customHeaders };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => parseErrors(error),
);

/**
 * This is temporary until we have a better way to handle errors in the bff
 * @param error
 * @returns
 */
const getErrorMessage = (response: AxiosResponse<any, any>): string => {
  const details = response.data?.details?.[0]?.details;
  const messageToPurchaser = response.data?.message_to_purchaser;

  if (details) {
    const errorMessage = getErrorMessageToShow(details[0]);
    if (errorMessage) {
      return errorMessage;
    }
  }

  if (messageToPurchaser) {
    return messageToPurchaser;
  }

  return DEFAULT_BUSINESS_ERROR_MESSAGE;
};

const getErrorMessageToShow = (errorDetails: any) => {
  const message = errorDetails?.message;
  const errorCode = errorDetails?.code;

  if (ERRORS_TO_SHOW.includes(errorCode)) {
    return message;
  }
  return DEFAULT_BUSINESS_ERROR_MESSAGE;
};

const parseSpecialErrors = (error: AxiosError): string => {
  if (error.response) {
    return getErrorMessage(error.response);
  } else {
    return DEFAULT_BUSINESS_ERROR_MESSAGE;
  }
};

const parseErrors = (error: AxiosError<any>) => {
  const errorMessage = DEFAULT_INTERNAL_ERROR_MESSAGE;
  if (error.response && error.response.status >= 500) {
    error.response.data.checkoutMessage = errorMessage;
  }
  if (error.response && error.response.status >= 400 && error.response.status !== 404) {
    // const message = error.response?.data?.checkoutMessage;
    // errorMessage = message ?? errorMessage;
    // error.response.data.checkoutMessage = errorMessage;
    error.response.data.checkoutMessage = parseSpecialErrors(error);
  }

  return Promise.reject(error);
};

export const customFetch = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  try {
    const response = await axiosInstance.request({ url, method: 'GET', ...config });
    return response.data;
  } catch (e) {
    throw e;
  }
};
