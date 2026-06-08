import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import './Header.css'
import Button from "../Button/Button";
import { useAuth } from "../../context/AuthProvider";

const Header = () => {
    
    const { isLogged } = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav>
            <div>
                <span className="header-logo"><Link to="/">weeb</Link></span>
                <Link to="/blog" className="header-link">Blog</Link>
                <Link to="/contact" className="header-link">Contact</Link>
            </div>

            <div>
                {isLogged ? (
                    <>
                        <Link to="/profile" className="header-link">Mon profil</Link>   
                        <Button variant="primary" className="header-link"><Link to="/logout">Se déconnecter</Link></Button>
                    </>
                ) : ( 
                    <>
                        <Link to="/login" className="header-link">Se connecter</Link>
                        <Button variant="primary" className="header-link"><Link to="/signup" className="header-link">Nous rejoindre</Link></Button>
                    </>
                )}
                
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </div>

            <div className={`header-menu ${isMenuOpen ? "header-open" : ""}`}>
                <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                {isLogged ? (
                    <>
                        <Link to="/profile" className="header-link" onClick={toggleMenu}>Mon profil</Link>
                        <Link to="/logout" className="header-link" onClick={toggleMenu}>Se déconnecter</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="header-link" onClick={toggleMenu}>Se connecter</Link>
                        <Link to="/register" className="header-link" onClick={toggleMenu}>Nous rejoindre</Link>
                    </>
                )}
            </div>

        </nav>
    )
}

export default Header;