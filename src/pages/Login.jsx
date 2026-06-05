import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from '../components/Input/Input';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../context/api";
import { useAuth } from "../context/AuthProvider";

const Login = () => {

    const {login} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await api.post(
                "users/token/",
                { email, password },
                { withCredentials: true }
            );
            login(res.data.access, res.data.refresh);
            navigate("/");
        } catch (err) {
            alert("Erreur de connexion: " + err);
        }
    };


    return (
        <div className="login-container">

            <section>

                <h1>Se connecter</h1>

                <div>

                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}>

                        <Input type="text" name="email" id="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Button variant="primary">Se connecter</Button>
                    </form>

                </div>
                
                <Link to="/reset-password">Mot de passe oublié ?</Link>

                <p>Vous n’avez pas de compte ? Vous pouvez en <Link to="/register">créer un</Link></p>
 
            </section>

        </div>
    );
};

export default Login;