import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm
      title="Registration Successfully Completed!"
      isOpen={isOpen}
      onClose={onClose}
      modalType="confirmation"
    >
      <div className="modal__button-container">
        <button 
          type="button" 
          className="modal__submit"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </ModalWithForm>
  );
};

export default ConfirmationModal;