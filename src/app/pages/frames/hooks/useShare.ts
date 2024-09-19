import { useTranslation } from 'react-i18next';
import {
  PaymentConfirmationShareIcons,
  PAYMENT_CONFIRMATION_SHARE_WHATSAPP_URL,
  PaymentMethodType,
} from 'app/util/constants';
import { useState } from 'react';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { buildCanvasAndShare, handleCopyContent, handleShareNative } from '../util/share';
import { useAnalytics } from 'app/features/paymentForm/hooks/useAnalytics';

const tRootShare = 'iFrame.confirmation.common.share';
const timeDisabledCopyButton = 2000;

export const useShare = (containerId: string) => {
  const { t } = useTranslation();
  const fileShareName = t(`${tRootShare}.fileShareName`);
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [showModalEmail, setShowModalEmail] = useState<boolean>(false);
  const { selectedPaymentMethod } = usePaymentFormStore();
  const isPaymentMethodCard = PaymentMethodType.Card === selectedPaymentMethod;
  const { sendShare } = useAnalytics();

  const handleCopyButtonClick = async (divContainer: HTMLElement) => {
    if (!isCopying) {
      setIsCopying(true);
      sendShare('copy_image');
      await buildCanvasAndShare(divContainer, handleCopyContent);
      setTimeout(() => {
        setIsCopying(false);
      }, timeDisabledCopyButton);
    }
  };

  const handleWhatsappButtonClick = (amount: string, reference: string, concept: string) => {
    const message = t(
      `${tRootShare}.${isPaymentMethodCard ? 'whatsAppPaymentConfirmationMessage' : 'whatsAppReferenceMessage'}`,
      { amount, reference, concept },
    );
    sendShare('whatsapp');
    window.open(`${PAYMENT_CONFIRMATION_SHARE_WHATSAPP_URL}${message}`);
  };

  const handleSeveralButtonClick = async (divContainer: HTMLElement) => {
    sendShare('mobile_native');
    await buildCanvasAndShare(divContainer, (data: Blob) => handleShareNative(data, fileShareName));
  };

  const handleClick = async (icon: string, amount: string, reference: string, concept: string) => {
    const divContainer: HTMLElement | null = document.querySelector(`#${containerId}`);
    switch (icon) {
      case PaymentConfirmationShareIcons.ContentCopy:
        handleCopyButtonClick(divContainer!);
        break;
      case PaymentConfirmationShareIcons.Whatsapp:
        handleWhatsappButtonClick(amount, reference, concept);
        break;
      case PaymentConfirmationShareIcons.Several:
        handleSeveralButtonClick(divContainer!);
        break;
      case PaymentConfirmationShareIcons.Mail:
        setShowModalEmail(true);
        break;
    }
  };
  return {
    action: handleClick,
    isCopying,
    showModalEmail,
    setShowModalEmail,
  };
};
