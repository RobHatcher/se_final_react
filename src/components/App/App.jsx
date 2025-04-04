import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../Header/header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import About from "../About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
        

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/saved-news" element={<SavedNews />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
