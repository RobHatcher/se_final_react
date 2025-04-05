import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="left__footer">
        <p className="footer__text">
          &copy;{currentYear} Supersite, Powered by News API
        </p>
      </div>
      <div className="right__footer">
        <a href="/" className="footer__link">
          Home
        </a>
        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TripleTen
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
