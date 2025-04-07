import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";

const LoginModal = ({
  onClose,
  onLogin,
  isOpen,
  handleSigninClick,
  handleSignupClick,
}) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  function resetForm() {
    setValues({
      email: "",
      password: "",
    });
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      handleSigninClick={handleSigninClick}
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
      <div>
        <button type="submit" className="modal__submit">
          Sign In
        </button>
        <button
          type="button"
          className="modal__or-login-btn"
          onClick={handleSignupClick}
        >
          {" "}
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;