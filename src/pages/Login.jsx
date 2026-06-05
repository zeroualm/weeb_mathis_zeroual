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
    const [error,setError] = useState(null)

    const handleLogin = async () => {

        setError(null);

        try {
            const res = await api.post(
                "users/token/",
                { email, password },
                { withCredentials: true }
            );
            login(res.data.access, res.data.refresh);
            navigate("/");
        } catch (err) {
            if (err.response && err.response.status === 404) {
                console.log(err.response.data);
                setError("Erreur 404");
            }
            else {
                console.error("--- ERROR FETCHING DATA ---");
                console.error(err.response);
                if (err.response && err.response.data) {
                    setError(JSON.stringify(err.response.data)); 
                } else {
                    setError(err.message); 
                }
            }
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

                <p>Vous n’avez pas de compte ? Vous pouvez en <Link to="/signup">créer un</Link></p>

                {error ? (
                    <>
                        <h1>Une erreur est survenue</h1>

                        <p>{error.message}</p>
                    </>
                ) : null}
 
            </section>

        </div>
    );
};

export default Login;