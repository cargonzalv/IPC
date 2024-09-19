export interface PaymentMethod {
  name: string;
  expMonth?: string;
  expYear?: string;
  authCode?: string;
  type?: string;
  card_type?: string;
  last4?: string;
  brand?: string;
  issuer?: string;
  accountType?: string;
  barcodeUrl: string;
  expiresAt?: number;
  reference?: string;
  clabe?: string;
  providerUrl?: string;
  provider?: string;
}
