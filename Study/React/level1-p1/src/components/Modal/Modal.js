import { createPortal } from 'react-dom';
import style from './Modal.module.css'


const Backdrop = ({close, show}) => <div className={`${style.backDrop} ${show ? style.showBackDrop : ''}`} onClick={close} ></div>
const Overlay = ({children, show}) => {


  return (
  <div className={`${style.overlay} ${show ? style.showOverlay: ''}`}>
    {children}
  </div>
  )
}

const Modal = ({children, show, closeModal}) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show} children={children} />
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}

export default Modal;