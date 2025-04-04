import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__name">Developed by Robert Hatcher</p>
      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;