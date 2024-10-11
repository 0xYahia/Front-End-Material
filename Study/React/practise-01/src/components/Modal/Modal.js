import { createPortal } from 'react-dom';
import style from './Modal.module.css'

const Backdrop = () => <div className={style.backDrop}></div>
const Overlay = () => <div className={style.overlay}></div>


const Modal = () => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop />
          <Overlay />
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}

export default Modal;