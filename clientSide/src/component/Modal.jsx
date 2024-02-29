import  Input  from './Input';
import './modal.css';

function Modal({ closeModal }) {


  return (

    <div className="modal" >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <Input type={"text"} placeholder={"enter discription"} />
        <Input type={"text"} placeholder={"enter discription"} />
        <Input type={"text"} placeholder={"enter discription"} />
       
        <button onClick={closeModal}>send</button>
      </div>
    </div>

  );
}

export default Modal;
