import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

import { useAuth } from "../../context/AuthProvider";
import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
    const { isLogged } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        
        <nav className={styles.nav}>
            
            <div className={styles.section}>
                <span className={styles.logo}><Link to="/">weeb</Link></span>
                {/* styles.link permet de les cacher sur mobile */}
                <Link to="/blog" className={styles.link}>Blog</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </div>

            <div className={styles.section}>
                {isLogged ? (
                    <>
                        <Link to="/profile" className={styles.link}>Mon profil</Link>   
                        <Button variant="primary" className={styles.link}>
                            <Link to="/logout">Se déconnecter</Link>
                        </Button>
                    </>
                ) : ( 
                    <>
                        <Link to="/login" className={styles.link}>Se connecter</Link>
                        <Button variant="primary" className={styles.link}>
                            <Link to="/signup">Nous rejoindre</Link>
                        </Button>
                    </>
                )}
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </div>

            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`.trim()}>
                <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                {isLogged ? (
                    <>
                        <Link to="/profile" onClick={toggleMenu}>Mon profil</Link>
                        <Link to="/logout" onClick={toggleMenu}>Se déconnecter</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" onClick={toggleMenu}>Se connecter</Link>
                        <Link to="/register" onClick={toggleMenu}>Nous rejoindre</Link>
                    </>
                )}
            </div>

        </nav>
    );
}

export default Header;