import { RefObject } from 'react';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import { useThreeDSMFContainer } from '../hooks/useThreeDSMFContainer';

interface ThreeDSComponentProps {
  modalContainerRef?: RefObject<HTMLDivElement>;
}

export const ThreeDSMFContainer = ({ modalContainerRef }: ThreeDSComponentProps) => {
  const { showThreeDSModal, handleCloseModal, url } = useThreeDSMFContainer();
  return (
    <>
      {showThreeDSModal && (
        <Modal
          isOpen={showThreeDSModal}
          onClose={handleCloseModal}
          blockScrollOnMount={false}
          portalProps={{ containerRef: modalContainerRef }}
        >
          <ModalOverlay />
          <ModalContent padding={5} minWidth={{ base: '100%', md: '500px' }} paddingTop={12}>
            <ModalCloseButton paddingTop={4} />
            <iframe id='iframe' src={url} style={{ border: 'none', width: '100%', height: '600px' }}></iframe>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
