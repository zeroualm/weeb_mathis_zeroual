import { Link } from "react-router-dom";
import './Header.css'
import Button from "../Button/Button";

const Header = () => {
    return(
        <nav>
            <div>
                <span className="header-logo"><Link to="/">weeb</Link></span>
                <Link to="/">À propos</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div>
                <Link to="/login">Se connecter</Link>
                <Button variant="primary">Nous rejoindre</Button>
            </div>

        </nav>
    )
}

export default Header


