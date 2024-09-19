export interface IPaymentReferenceContent {
  referenceExpiredAt: string;
  reference: string;
  name: string;
  barcodeUrl?: string;
  paymentMethodType: string;
}
