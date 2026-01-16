import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import './Header.css'
import Button from "../Button/Button";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav>
            <div>
                <span className="header-logo"><Link to="/">weeb</Link></span>
                <Link to="/" className="header-link">À propos</Link>
                <Link to="/contact" className="header-link">Contact</Link>
            </div>

            <div>
                <Link to="/login" className="header-link">Se connecter</Link>
                <Button variant="primary" className="header-link">Nous rejoindre</Button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </div>

            <div className={`header-menu ${isMenuOpen ? "header-open" : ""}`}>
                <Link to="/" onClick={toggleMenu}>À propos</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                <Link to="/login" onClick={toggleMenu}>Se connecter</Link>
                <Button variant="primary" onClick={toggleMenu}>Nous rejoindre</Button>
            </div>

        </nav>
    )
}

export default Header


