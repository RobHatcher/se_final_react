import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Elements to App
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import About from "../About/About";
// Modal Elements
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
// Mock Authorization
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { register, login, logout, currentUser, token } = useAuth();
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();

  // Handlers
  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("register");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const showConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      await login(values);
      closeActiveModal();
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterUser = async (values) => {
    try {
      setIsLoading(true);
      await register(values);
      return true;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // useEffects
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        if (isConfirmationModalOpen) {
          setIsConfirmationModalOpen(false);
        } else if (activeModal) {
          closeActiveModal();
        }
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal, isConfirmationModalOpen]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                onSignInClick={handleSigninClick}
                theme="light"
                isLoggedIn={!!token}
                currentUser={currentUser?.name}
                onLogoutClick={handleLogout}
                activeModal={activeModal}
                onClose={closeActiveModal}
              />
              <Main isLoggedIn={!!token} />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              <Header
                onSignInClick={handleSigninClick}
                theme="dark"
                isLoggedIn={!!token}
                currentUser={currentUser?.name}
                onLogoutClick={handleLogout}
                activeModal={activeModal}
                onClose={closeActiveModal}
              />
              <SavedNews />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header
                onSignInClick={handleSigninClick}
                theme="light"
                isLoggedIn={!!token}
                currentUser={currentUser?.name}
                onLogoutClick={handleLogout}
                activeModal={activeModal}
                onClose={closeActiveModal}
              />
              <About />
            </>
          }
        />
      </Routes>
      <Footer />
      {activeModal === "register" && (
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          onRegister={handleRegisterUser}
          handleSigninClick={handleSigninClick}
          buttonText={isLoading ? "Saving..." : "Sign up"}
          showConfirmationModal={showConfirmationModal}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          onLogin={handleLogin}
          handleSignupClick={handleSignupClick}
          buttonText={isLoading ? "Saving..." : "Sign in"}
        />
      )}
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleConfirmationModalClose}
      />
    </>
  );
}

export default App;
