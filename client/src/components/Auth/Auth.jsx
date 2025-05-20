import React from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '../../providers/modalProvider';

export default function Auth() {
  const { isOpen, closeModal } = useModal();
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div>Auth</div>
      </Modal>
    </>
  );
}
