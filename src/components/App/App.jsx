import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Elements to App
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
// import SavedNews from "../SavedNews/SavedNews";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import About from "../About/About";
// Modal Elements
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSigninClick = () => {
    setActiveModal("login");
  };
  
  const handleSignupClick = () => {
    setActiveModal("register");
  };
  
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogin = () => {
    setIsLoading(true);
    // Login logic will go here
  };

  const handleRegisterUser = () => {
    setIsLoading(true);
    // Register logic will go here
  };

  return (
    <>
      <Header onSignInClick={handleSigninClick} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/saved-news" element={<SavedNews />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      {activeModal === "register" && (
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          onRegister={handleRegisterUser}
          handleLoginClick={handleSigninClick}
          buttonText={isLoading ? "Saving..." : "Sign up"}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          onLogin={handleLogin}
          handleRegisterClick={handleSignupClick}
          buttonText={isLoading ? "Saving..." : "Log in"}
        />
      )}
    </>
  );
}

export default App;
