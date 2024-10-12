import { createPortal } from 'react-dom';
import style from './Modal.module.css'
import Form from '../Layout/From';

const Backdrop = ({close, show}) => <div className={`${style.backDrop} ${show ? style.showBackDrop : ''}`} onClick={close} ></div>
const Overlay = ({show}) => {
  return (
  <div className={`${style.overlay} ${show ? style.showOverlay: ''}`}>
    <Form>
      <Form.Controller>
          <label htmlFor="name">Name</label>
          <input type="name" placeholder='Enter Name' />
      </Form.Controller>
    </Form>
  </div>
  )
}

const Modal = ({show, closeModal}) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show} />
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}

export default Modal;