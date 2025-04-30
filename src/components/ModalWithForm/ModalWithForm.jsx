import "./ModalWithForm.css";
// Close Icon
import closebtn from "../../assets/close.svg";

function ModalWithForm({
    children,
    title,
    isOpen,
    onClose,
    onSubmit,
    modalType
  }) {
    return (
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <div className={`modal__content modal__content--${modalType}`}>
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={onClose}
            className="modal__close"
            type="button"
          >
            <img src={closebtn} alt="close" className="modal__close-icon" />
          </button>
          <form onSubmit={onSubmit} className="modal__form">
            {children}
          </form>
        </div>
      </div>
    );
  }
  
  export default ModalWithForm;
