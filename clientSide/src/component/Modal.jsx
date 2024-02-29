import Input from './Input';
import "./modal.css";

function Modal({ closeModal }) {


  return (

    <div className="modal" >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h3 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Enter group details</h3>
        <Input type={"text"} placeholder={"enter name"} />
        <Input type={"text"} placeholder={"enter description"} />
        <div className="text-center mt-4">
          <button onClick={closeModal} type="button" className="text-white bg-gradient-to-r from-sky-600 to-cyan-400  hover:bg-sky-800 focus:ring-2  focus:ring-sky-600  rounded-full  p-2.5  me-2">
            <svg className="w-48 h-4" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Modal;
