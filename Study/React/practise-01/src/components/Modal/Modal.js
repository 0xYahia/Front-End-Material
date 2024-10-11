import { createPortal } from 'react-dom';
import style from './Modal.module.css'

const Backdrop = ({close}) => <div className={style.backDrop} onClick={close} ></div>
const Overlay = () => <div className={style.overlay}></div>


const Modal = ({show, closeModal}) => {
  return (
    <>
      {show && createPortal(
        <>
          <Backdrop close={closeModal} />
          <Overlay />
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}

export default Modal;