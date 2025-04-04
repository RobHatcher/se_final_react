import { useContext } from "react";
import "./Header.css";
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg"

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img className="header_logo" src={logo} alt="News Explorer Logo" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button className="sign-in-button">Sign in</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
