import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";

const RegisterModal = ({
  onClose,
  onRegister,
  handleSignupClick,
  handleSigninClick,
  isOpen,
}) => {
  const { values, handleChange, setValues } = useForm({
    _id: null,
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  function resetForm() {
    setValues({
      email: "",
      password: "",  
      name: "",
    });
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign UP"
      isOpen={isOpen}
      handleSignupClick={handleSignupClick}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          name="email"
          id="email"
          placeholder="Email"
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
          placeholder="Password"
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
          placeholder="Username"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      {/* <label htmlFor="avatar" className="modal__link">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          name="avatar"
          id="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label> */}
      <div className="modal__button-wrapper">
        <button type="submit" className="modal__submit">Sign Up</button>
        <button type="button" className="modal__or-register-btn" onClick={handleSigninClick}>
          {" "}
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;