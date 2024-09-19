import { useTranslation } from 'react-i18next';
import { TypeButton, VariantType } from '@conekta/frontino-ui/Button/constants';
import { ComponentSize } from '@conekta/frontino-ui/common/constants';
import { REGEX } from 'app/pages/frames/util/validations';
import { PaymentMethodType } from 'app/util/constants';
import { Dispatch, Ref, RefObject, SetStateAction, forwardRef, useEffect, useState } from 'react';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { usePaymentFormStore } from 'app/features/paymentForm/state/paymentFormState';
import { useShareEmail } from './useShareEmail';
import { tRootShare } from './constants';
import { TFunction } from 'i18next';
import { useOrderReference } from 'app/features/ThreeDS/state/selectors';

interface ShareModalProps {
  showModalEmail: boolean;
  setShowModalEmail: Dispatch<SetStateAction<boolean>>;
}

const getModalTexts = (t: TFunction, isCardPayment: boolean) => {
  return {
    title: t(`${tRootShare}.modal.${isCardPayment ? 'title' : 'reference_title'}`),
    subtitle: t(`${tRootShare}.modal.${isCardPayment ? 'subtitle' : 'reference_subtitle'}`),
    inputLabel: t(`${tRootShare}.modal.inputLabel`),
    error: t(`${tRootShare}.modal.error`),
    buttonCancel: t(`${tRootShare}.modal.buttonCancel`),
    buttonSubmit: t(`${tRootShare}.modal.buttonSubmit`),
  };
};

export const ShareByEmailModal = forwardRef<HTMLDivElement, ShareModalProps>(
  ({ showModalEmail, setShowModalEmail }, ref: Ref<HTMLDivElement>) => {
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const { selectedPaymentMethod } = usePaymentFormStore();
    const { sendReferenceOrProofOfPaymentEmail } = useShareEmail();
    const { t } = useTranslation();
    const isCardPayment = selectedPaymentMethod === PaymentMethodType.Card;
    const reference = useOrderReference();
    const { title, subtitle, inputLabel, error, buttonCancel, buttonSubmit } = getModalTexts(t, isCardPayment);

    const handleSendEmail = () => {
      sendReferenceOrProofOfPaymentEmail(emailAddress, reference);
      setEmailAddress('');
      setShowModalEmail(false);
    };

    useEffect(() => {
      setEmailValid(REGEX.email.test(emailAddress));
    }, [emailAddress]);

    const handelCancel = () => {
      setEmailAddress('');
      setShowModalEmail(false);
    };

    return showModalEmail ? (
      <Modal
        isOpen={showModalEmail}
        onClose={() => setShowModalEmail(false)}
        blockScrollOnMount={false}
        portalProps={{ containerRef: ref as RefObject<HTMLElement | null> }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text> {subtitle}</Text>
            <FormControl>
              <FormLabel marginTop={3}>{inputLabel}</FormLabel>
              <Input type='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
              {!emailValid && emailAddress.length > 0 && (
                <Text color='red.500' fontSize='xs'>
                  {t(error)}
                </Text>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handelCancel}
              variant={VariantType.GHOST}
              size={ComponentSize.LARGE}
              height={6}
              fontSize='sm'
              padding={4}
              marginInlineEnd={5}
            >
              {buttonCancel}
            </Button>
            <Button
              isDisabled={!emailValid}
              type={TypeButton.SUBMIT}
              size='sm'
              height={6}
              padding={4}
              fontSize='sm'
              onClick={handleSendEmail}
            >
              {buttonSubmit}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    ) : null;
  },
);

export default ShareByEmailModal;
