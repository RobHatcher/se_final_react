import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
    <nav className="nav">
        <Link to="/" className="nav__home">
        Home
        </Link>
        <button className="sign-in__btn">Sign In</button>
    </nav>
    );
} 

export default Navigation;