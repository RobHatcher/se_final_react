import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg"
import Navigation from "../Navigation/Navigation";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header__logo">
          <Link to="/">
          <img className="header__img" src={logo} alt="News Explorer Logo" />
          </Link>
        </div>
        <Navigation onSignInClick={onSignInClick} />
      </div>
    </header>
  );
}

export default Header;
