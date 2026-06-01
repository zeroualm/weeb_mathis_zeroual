import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from '../components/Input/Input';

const Login = () => {
    return (
        <div className="login-container">

            <section>

                <h1>Se connecter</h1>

                <div>

                    <form action="">
                        <Input type="text" name="email" id="email" placeholder="Adresse e-mail" />
                        <Input type="password" name="password" id="password" placeholder="Mot de passe" />

                        <Button variant="primary">Se connecter</Button>
                    </form>

                </div>
                
                <Link to="/login">Mot de passe oublié ?</Link>

                <p>Vous n’avez pas de compte ? Vous pouvez en <Link to="/login">créer un</Link></p>
 
            </section>

        </div>
    );
};

export default Login;