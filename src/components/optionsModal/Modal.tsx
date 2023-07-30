import './Modal.style.css';
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = {
  onClose: () => void;
  children: React.ReactElement | React.ReactNode;
  open: boolean;
};

const Modal = ({ onClose, children, open }: ModalProps) => {
  if (!open) return;
  return (
    <>
      <div className='overlay' onClick={onClose}></div>
      <div className='modal'>
        <button onClick={onClose} className='modal__close-button'>
          <AiOutlineClose className='modal__close-icon' />
        </button>
        {children}
      </div>
    </>
  );
};
export default Modal;
