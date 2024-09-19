import { Fingerprint } from 'app/pages/frames/helpers/fingerprint';
import { fingerprintHashSeed } from 'common/constants';

export const awsS3Url = 'https://assets.conekta.com/cpanel/statics/assets';
export const awsS3UrlCheckout = 'https://assets.conekta.com/checkout/img';
export const favicon = 'https://assets.conekta.com/website/Home/favicon.ico';
export const imgMainLogo = `${awsS3Url}/brands/logos/conekta-logo-24px.svg`;
export const imgMainLogoFullBlue = `${awsS3Url}/img/conekta-logo-blue-full.svg`;
export const imgMainLogoFullWhite = `${awsS3Url}/img/conekta-logo-full.svg`;
export const imgPoweredLogoWhite = `${awsS3Url}/img/powered-by-conekta-light.png`;
export const imgPoweredLogoBlack = `${awsS3Url}/img/powered-by-conekta-dark.png`;
export const imgMainLogoWhite = `${awsS3Url}/img/conekta_white.svg`;
export const imgPaymentButtonLogoConekta = `${awsS3Url}/img/conekta-logo-symbol.svg`;
export const imgPaymentButtonLogoConektaWhite = `${awsS3Url}/img/conekta-logo-symbol-inverse.svg`;
export const successLogo = 'https://assets.conekta.com/checkout/img/success-card-component.svg';
export const cardLogo = `${awsS3UrlCheckout}/icons/icono-carta.png`;

export const firstImgBackgroundAmount = `${awsS3Url}/img/bg-esfera.svg`;
export const secondImgBackgroundAmount = `${awsS3Url}/img/bg-media-esfera.svg`;
export const disabledOpenAmountImg = `${awsS3Url}/img/Ilustraciones/empty-box.svg`;

export const imgAllCards = `${awsS3Url}/brands/logos/MC%3AVisa%3AAMEX-rounded.svg`;

export const imgWhiteLabel2 = `${awsS3Url}/img/powered_by_conekta.svg`;
export const imgPoweredByMainLogo = `${awsS3Url}/img/conekta-powered-by-20px.svg`;
export const imgPadlock = `${awsS3Url}/img/https_black_24dp-%201.svg`;

export const imgError404 = `${awsS3Url}/img/link/icon_404.svg`;
export const imgTimeOut = `${awsS3Url}/img/time.svg`;
export const imgTime = `${awsS3Url}/img/link/time.svg`;
export const imgIconError = `${awsS3Url}/img/link/icon_error.svg`;
export const imgBill = `${awsS3Url}/img/link/bill.svg`;
export const imgIconCancelled = `${awsS3Url}/img/link/icon_cancelled.svg`;
export const imgCalendar = `${awsS3Url}/img/link/calendar.svg`;
export const imgShoppingCart = `${awsS3Url}/img/icons/white-shopping-cart-24px.svg`;
export const cvvIcon = `${awsS3Url}/img/icons/cvv-icon-32x32.svg`;

export const paymentBrandLogos = {
  american_express_24px: `${awsS3UrlCheckout}/logos/amex.svg`,
  american_express: `${awsS3Url}/brands/logos/amex.svg`,
  cards_logos: `${awsS3Url}/brands/logos/Sellos-bancarios-24-px.svg`,
  carnet: `${awsS3Url}/img/carnet.svg`,
  mc_24px: `${awsS3UrlCheckout}/logos/master-card.svg`,
  mc: `${awsS3Url}/brands/logos/mastercard.svg`,
  oxxo: `${awsS3Url}/brands/logos/OXXO_PAY_logo.svg`,
  oxxo_img: `${awsS3Url}/img/oxxo-pay-2019.svg`,
  spei: `${awsS3Url}/brands/logos/transfer-circular.svg`,
  spei_img: `${awsS3Url}/img/spei.svg`,
  visa_24px: `${awsS3UrlCheckout}/logos/visa.svg`,
  visa: `${awsS3Url}/brands/logos/visa.svg`,
  nelo: `${awsS3Url}/brands/logos/nelo.svg`,
  seven_eleven: `${awsS3UrlCheckout}/logos/logo-seven-eleven.png`,
  farmacias_ahorro: `${awsS3UrlCheckout}/logos/logo-farmacia-del-ahorro.png`,
  circlek: `${awsS3UrlCheckout}/logos/logo-circlek.png`,
  extra: `${awsS3UrlCheckout}/logos/logo-extra.png`,
  benavides: `${awsS3UrlCheckout}/logos/logo-benavides.png`,
  wallmart: `${awsS3Url}/brands/logos/wallmart-24x24.svg`,
  bodega_aurrera: `${awsS3Url}/brands/logos/bodegaaurrera-24x24.svg`,
  sams: `${awsS3Url}/brands/logos/sams-24x24.svg`,
  super_kiosko: `${awsS3Url}/brands/logos/superkiosko-24x24.svg`,
  waldos: `${awsS3Url}/brands/logos/waldos-24x24.svg`,
};


export const paymentBrands: Record<string, any> = {
  american_express: {
    alt: 'American Express',
    className: 'american_express',
    src: paymentBrandLogos.american_express_24px,
  },
  american_express2: {
    alt: 'American Express',
    className: 'american_express',
    src: paymentBrandLogos.american_express,
  },
  cards_logos: {
    alt: 'Cards Logos',
    className: 'cards_logos',
    src: paymentBrandLogos.cards_logos,
  },
  carnet: {
    alt: 'Carnet',
    className: 'carnet',
    src: paymentBrandLogos.carnet,
  },
  oxxo: {
    alt: 'Oxxo',
    className: 'oxxo',
    src: paymentBrandLogos.oxxo_img,
  },
  bnpl: {
    alt: 'Bnpl',
    className: 'bnpl',
    src: paymentBrandLogos.nelo,
  },
  oxxo_cash: {
    alt: 'Oxxo',
    className: 'oxxo_cash',
    src: paymentBrandLogos.oxxo_img,
  },
  oxxo_recurrente: {
    alt: 'Oxxo',
    className: 'oxxo_recurrente',
    src: paymentBrandLogos.oxxo_img,
  },
  mastercard: {
    alt: 'Mastercard',
    className: 'mastercard',
    src: paymentBrandLogos.mc_24px,
  },
  mastercard2: {
    alt: 'Mastercard',
    className: 'mastercard',
    src: paymentBrandLogos.mc,
  },
  spei: {
    alt: 'SPEI',
    className: 'spei',
    src: paymentBrandLogos.spei_img,
  },
  visa: {
    alt: 'visa',
    className: 'visa',
    src: paymentBrandLogos.visa_24px,
  },
  visa2: {
    alt: 'visa',
    className: 'visa',
    src: paymentBrandLogos.visa,
  },
  seven_eleven: {
    alt: 'seven_eleven',
    src: paymentBrandLogos.seven_eleven,
  },
  farmacias_ahorro: {
    alt: 'farmarcias_ahorro',
    src: paymentBrandLogos.farmacias_ahorro,
  },
  circlek: {
    alt: 'circlek',
    src: paymentBrandLogos.circlek,
  },
  extra: {
    alt: 'extra',
    src: paymentBrandLogos.extra,
  },
  benavides: {
    alt: 'benavides',
    src: paymentBrandLogos.benavides,
  },
  wallmart: {
    alt: 'wallmart',
    src: paymentBrandLogos.wallmart,
  },
  bodega_aurrera: {
    alt: 'bodega_aurrera',
    src: paymentBrandLogos.bodega_aurrera,
  },
  sams: {
    alt: 'sams',
    src: paymentBrandLogos.sams,
  },
  super_kiosko: {
    alt: 'super_kiosko',
    src: paymentBrandLogos.super_kiosko,
  },
  waldos: {
    alt: 'waldos',
    src: paymentBrandLogos.waldos,
  },
};

export const brandsDataLogic = [
  paymentBrands.seven_eleven,
  paymentBrands.farmacias_ahorro,
  paymentBrands.circlek,
  paymentBrands.extra,
];

export const brandsPespay = [
  paymentBrands.wallmart,
  paymentBrands.farmacias_ahorro,
  paymentBrands.bodega_aurrera,
  paymentBrands.sams,
  paymentBrands.super_kiosko,
  paymentBrands.waldos,
];

export const getBinFromCardNumber = (value: string): string => value?.substring(0, 6);

export const getHashFromString = (value: string, seed: number = fingerprintHashSeed): string =>
  Fingerprint.x64Hash128(value, seed);

export const getFingerprint = (values: any[]): string => {
  const valuesFromComponent = values.map(({ value }: any) => value);
  return getHashFromString(valuesFromComponent.join(''));
};

export const paymentMethodLogos: Record<string, any> = {
  BankTransfer: [paymentBrands.spei],
  Card: [paymentBrands.cards_logos],
  Cash: [paymentBrands.oxxo],
  Bnpl: [paymentBrands.bnpl],
};

export enum PaymentMethodType {
  BankTransfer = 'BankTransfer',
  Card = 'Card',
  Cash = 'Cash',
  Bnpl = 'Bnpl',
}

export enum PaymentMethodForEmail {
  BankTransfer = 'spei',
  Cash = 'cash',
}

export enum Provider {
  nelo = 'nelo',
  datalogic = 'datalogic',
  pespay = 'pespay',
}

export const checkoutRequestType = {
  hostedPayment: 'HostedPayment',
  integration: 'Integration',
};

export const truncateButtonStringLength = 20;

export enum ThreeDsValues {
  enable = 'Enabled',
  dynamic = 'EnabledDynamic',
  not = 'NotValid',
  off = 'Off',
}

export enum CardType {
  visa = 'visa',
  amex = 'amex',
  mastercard = 'mc',
}

export const CardTypeRegex = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  simpleVisa: /^4/,
  amex: /^3[47][0-9]{13}$/,
  simpleAmex: /^3[47]/,
  mastercard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
  simpleMC: /^5[1-5]/,
};

export const isAvailableThreeDS: string[] = [ThreeDsValues.enable, ThreeDsValues.dynamic];
export const monthlyInstallmentsInitialValue: number = 1;

export enum PaymentConfirmationShareIcons {
  Mail = 'email',
  Whatsapp = 'whatsapp',
  Several = 'share',
  ContentCopy = 'content_copy',
  Check = 'check',
  Close = 'close',
  Print = 'print',
}

export enum AnalyticEvents {
  paymentMethodsMenu = 'payment_methods_menu',
  paymentMethodCash = 'Cash',
  paymentMethodBankTransfer = 'BankTransfer',
  paymentMethodCard = 'Card',
  paymentMethodBnpl = 'Bnpl',
  successPage = 'success_page',
  shipmentInfo = 'shipment_info',
  shareEmail = 'share_email',

  cvvInfo = 'cvv_info',
  monthlyInstallments = 'monthly_installments',
  cardType = 'card_type',
  threeDsMfEnabled = 'three_ds_mf_enabled',
  changePaymentMethod = 'change_payment_method',
  paymentButton = 'payment_button',
  nextStep = 'next_step',

  name = 'customer_info.name',
  email = 'customer_info.email',

  phone = 'shipment_info.phone',
  postalCode = 'shipment_info.postal',
  state = 'shipment_info.state',
  city = 'shipment_info.city',
  street1 = 'shipment_info.street',
  street2 = 'shipment_info.neighborhood',

  cardNumber = 'card_info.number',
  cardExpMonthYear = 'card_info.month_year',
  cardVerificationValue = 'card_info.cvv',
  cardholderName = 'card_info.cardholder',
}

export const DECIMAL_DIGITS_ALLOWED: number = 2;
export const DECIMAL_POINT_CHAR: string = '.';
export const ONE_DECIMAL_POINT: number = 1;
export const SEPARATOR: string = '';
export const PAYMENT_CONFIRMATION_SHARE_WHATSAPP_URL: string = 'https://api.whatsapp.com/send?text=';
