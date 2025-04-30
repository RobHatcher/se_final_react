import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const RegisterModal = ({
  onClose,
  onRegister,
  handleSignupClick,
  handleSigninClick,
  isOpen,
  showConfirmationModal,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const { values, handleChange, setValues } = useForm({
    _id: null,
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await onRegister(values);
      if (success) {
        onClose();
        showConfirmationModal();
      }
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
    setValues({
      email: "",
      password: "",
      name: "",
      avatar: "",
    });
    onClose();
  };

  function resetForm() {
    setValues({
      email: "",
      password: "",
      name: "",
    });
  }

  useEffect(() => {
    const isValid =
      values.email.length > 0 &&
      values.password.length > 0 &&
      values.name.length > 0;

    setIsFormValid(isValid);
  }, [values]);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    console.log("Confirmation modal state changed:", {
      isOpen: isConfirmationModalOpen,
      timestamp: new Date().toLocaleTimeString(),
      stack: new Error().stack 
    });
  }, [isConfirmationModalOpen]);

  return (
    <>
    {isOpen && (
      <ModalWithForm
        title="Sign Up"
        buttonText="Sign Up"
        isOpen={isOpen}
        handleSignupClick={handleSignupClick}
        onClose={onClose}
        onSubmit={handleSubmit}
        modalType="register"
      >
        <label htmlFor="email" className="modal__label">
          Email{" "}
          <input
            type="email"
            className="modal__input"
            name="email"
            id="email"
            placeholder="Enter Email"
            minLength="5"
            maxLength="40"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password" className="modal__label">
          Password{" "}
          <input
            type="password"
            className="modal__input"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </label>
        <label htmlFor="name" className="modal__label">
          Username{" "}
          <input
            type="text"
            className="modal__input"
            name="name"
            id="name"
            placeholder="Create a Username"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <div className="modal__button-container">
          <button
            type="submit"
            className="modal__submit"
            disabled={!isFormValid}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="modal__or-switch-btn"
            onClick={handleSigninClick}
          >
            {" "}
            or <strong>Sign In</strong>
          </button>
        </div>
      </ModalWithForm>
      )}
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleConfirmationModalClose}
      />
    </>
  );
}

export default RegisterModal;
