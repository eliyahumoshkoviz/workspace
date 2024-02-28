import './Modal.css';

function Modal({ closeModal }) {


  return (

    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h4>פרטי שם:</h4>
        <p>שם פרטי</p>
        <h4>כותרת:</h4>
        <p>תיאור</p>
        <h4>מנהל:</h4>
        <button onClick={closeModal}>send</button>
      </div>
    </div>

  );
}

export default Modal;
