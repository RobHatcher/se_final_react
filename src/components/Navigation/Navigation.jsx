import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
//Mobile Menu logos
import menuIconBlack from "../../assets/menublk.svg";
import menuIconWhite from "../../assets/menu.svg";
//Logout logos
import logoutIconBlack from "../../assets/logout.svg";
import logoutIconWhite from "../../assets/logout-wht.svg";
//NewsExplorer Logo
import lightLogo from "../../assets/NewsExplorer.svg";
//Close For Mobile Menu
import closeIcon from "../../assets/close.svg";

function Navigation({
  onSignInClick,
  theme,
  isLoggedIn,
  onLogoutClick,
  currentUser,
  activeModal,
  onClose,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = `navigation__link ${
    theme === "dark" ? "navigation__link--theme-dark" : ""
  }`;
  const buttonClass = `navigation__button ${
    theme === "dark" ? "navigation__button--theme-dark" : ""
  }`;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeModal) {
      onClose();
    }
  };

  return (
    <nav className="nav">
      {/* Mobile Menu Button */}
      <button
        className="navigation__menu-button"
        onClick={handleMobileMenuToggle}
      >
        <img
          src={
            isMobileMenuOpen || activeModal
              ? closeIcon
              : theme === "dark"
              ? menuIconBlack
              : menuIconWhite
          }
          alt={isMobileMenuOpen ? "close menu" : "menu"}
          className="navigation__menu-icon"
        />
      </button>

      {/* Desktop Navigation */}
      <div className="navigation__desktop-links">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/saved-news" className={navLinkClass}>
              Saved Articles
            </NavLink>
            <div className="navigation__user-container">
              <button
                className={`${buttonClass} navigation__logout-btn`}
                onClick={onLogoutClick}
              >
                <span className="navigation__logout-text">{currentUser}</span>
                <img
                  src={theme === "dark" ? logoutIconBlack : logoutIconWhite}
                  alt="logout"
                  className="navigation__logout-icon"
                />
              </button>
            </div>
          </>
        ) : (
          <button className={buttonClass} onClick={onSignInClick}>
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navigation__mobile-menu ${
          isMobileMenuOpen ? "navigation__mobile-menu--state-opened" : ""
        }`}
      >
        <div className="navigation__mobile-header">
          <img
            src={lightLogo}
            alt="NewsExplorer Logo White"
            className="navigation__mobile-logo"
          />
        </div>
        <div className="navigation__mobile-container">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={handleMobileMenuToggle}
          >
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                to="/saved-news"
                className={navLinkClass}
                onClick={handleMobileMenuToggle}
              >
                Saved Articles
              </NavLink>
              <button
                className={`${buttonClass} navigation__logout-btn navigation__logout-btn--view-mobile`}
                onClick={() => {
                  onLogoutClick();
                  handleMobileMenuToggle();
                }}
              >
                <span className="navigation__logout-text">{currentUser}</span>
                <img
                  src={theme === "dark" ? logoutIconWhite : logoutIconWhite}
                  alt="logout"
                  className="navigation__logout-icon"
                />
              </button>
            </>
          ) : (
            <button
              className={buttonClass}
              onClick={() => {
                onSignInClick();
                handleMobileMenuToggle();
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
