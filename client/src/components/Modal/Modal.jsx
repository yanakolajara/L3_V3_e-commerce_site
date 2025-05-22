import { useModal } from '../../providers/modalProvider';
import './Modal.css';

const Modal = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal__background' onClick={closeModal} />
          <div className='modal__container'>
            <div className='modal__controls'>
              <button
                className='modal__close'
                type='button'
                onClick={closeModal}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
