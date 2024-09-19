export interface GACheckoutDTO {
  ga_client_id: string;
  checkout_id: string;
  live_mode: boolean;
  // checkout_status: string;
  checkout_type: string;
  is_recurrent: boolean;
  needs_shipping_contact: boolean;
  // is_monthly_installments_enabled: boolean;
  can_not_expire: boolean;
  // items: GAItemDTO[];
  value: number; // formatted_amount
  currency: string;
  // allowed_payment_methods: string[];
  // Entity
  company_id: string;
  // company_name: string; //entity.name
  three_ds_mode: string; // entity.threeDs
  // Customer
  customer_id: string;
  // customer_email: string;
}

export interface GAItemDTO {
  item_name: string;
  price: number;
  quantity: number;
}

export interface GAPurchaseDTO extends GACheckoutDTO {
  payment_method: string;
}
