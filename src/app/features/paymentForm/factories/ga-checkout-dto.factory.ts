import { PaymentMethodType, ThreeDsValues } from 'app/util/constants';
import { CheckoutRequest, Entity } from 'common/interface';
import { GACheckoutDTO, GAPurchaseDTO } from '../hooks/GA';
import { getGAClientId } from 'app/util/analytics';

export const useGACheckoutDTOFactory = () => {
  const parseCheckoutToGACheckoutDTO = (checkout: CheckoutRequest, entity: Entity, value: number): GACheckoutDTO => {
    return {
      ga_client_id: getGAClientId(),
      checkout_id: checkout.id,
      live_mode: checkout.liveMode,
      // checkout_status: checkout.status,
      checkout_type: checkout.type,
      is_recurrent: checkout.recurrent,
      needs_shipping_contact: checkout.needsShippingContact,
      // is_monthly_installments_enabled: checkout.monthlyInstallmentsEnabled,
      can_not_expire: checkout.canNotExpire,
      value,
      currency: checkout.orderTemplate.currency,
      // Entity
      company_id: checkout.companyId,
      // company_name: entity.name,
      three_ds_mode: entity.threeDs ? entity.threeDs : ThreeDsValues.off,
      // Customer
      customer_id: checkout.orderTemplate.customerInfo?.customerId ?? '',
      // customer_email: checkout.orderTemplate.customerInfo?.email ?? '',
      // items: checkout.orderTemplate.lineItems.map((item) => ({
      //   item_name: item.name,
      //   price: item.unitPrice,
      //   quantity: item.quantity,
      // })),
    };
  };

  const parseGAPurchaseDTO = (
    checkout: CheckoutRequest,
    entity: Entity,
    value: number,
    selectedPaymentMethod: PaymentMethodType,
  ): GAPurchaseDTO => {
    return {
      ...parseCheckoutToGACheckoutDTO(checkout, entity, value),
      payment_method: selectedPaymentMethod,
    };
  };
  return { parseCheckoutToGACheckoutDTO, parseGAPurchaseDTO };
};
