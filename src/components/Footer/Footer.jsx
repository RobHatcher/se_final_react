import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer__copyright">
          <p className="footer__text">
            &copy;{currentYear} Supersite, Powered by News API
          </p>
        </div>
        <div className="footer__navigation">
          <Link to="/" className="footer__link">
            Home
          </Link>
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
            <FaGithub />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
