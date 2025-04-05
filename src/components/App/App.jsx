import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
// import SavedNews from "../SavedNews/SavedNews";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import About from "../About/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/saved-news" element={<SavedNews />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
