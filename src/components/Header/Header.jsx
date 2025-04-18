import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import lightLogo from "../../assets/NewsExplorer.svg";
import darkLogo from "../../assets/NewsExplorerblk.svg";
import Navigation from "../Navigation/Navigation";

function Header({
  onSignInClick,
  theme,
  isLoggedIn,
  currentUser,
  onLogoutClick,
  activeModal,
  onClose
}) {
  const logo = theme === "dark" ? darkLogo : lightLogo;

  return (
    <header className="header">
      <div className="header-content">
        <div className="header__logo">
          <Link to="/">
            <img className="header__img" src={logo} alt="News Explorer Logo" />
          </Link>
        </div>
        <Navigation
          onSignInClick={onSignInClick}
          theme={theme}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogoutClick={onLogoutClick}
          activeModal={activeModal}
          onClose={onClose}
        />
      </div>
    </header>
  );
}

export default Header;
