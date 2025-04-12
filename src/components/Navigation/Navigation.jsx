import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIconBlack from "../../assets/logout.svg";
import logoutIconWhite from "../../assets/logout-wht.svg";

function Navigation({
  onSignInClick,
  theme,
  isLoggedIn,
  onLogoutClick,
  currentUser,
}) {
  const navLinkClass = `navigation__link ${
    theme === "dark" ? "navigation__link_dark" : ""
  }`;
  const buttonClass = `navigation__button ${
    theme === "dark" ? "navigation__button_dark" : ""
  }`;

  return (
    <nav className="nav">
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
    </nav>
  );
}

export default Navigation;
