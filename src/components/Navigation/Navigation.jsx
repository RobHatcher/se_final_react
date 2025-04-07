import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInClick }) {
    return (
    <nav className="nav">
        <Link to="/" className="nav__home">
        Home
        </Link>
        <button className="sign-in__btn" onClick={onSignInClick}>Sign In</button>
    </nav>
    );
} 

export default Navigation;