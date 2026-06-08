import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../context/api";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const ResetPassword = () => {

    const [searchParams] = useSearchParams();

    const uidb64 = searchParams.get("uidb64")
    const token = searchParams.get("token")

    const djangoApiUrlReset = `http://localhost:8000/api/users/password-reset/confirm/`; 

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleResetPassword = async () => {
        setIsLoading(true);
        try {
            
            console.log("Envoi de la requête de réinitialisation du mot de passe ...")
            const response = await api.post(djangoApiUrlReset, {
                uidb64:uidb64,
                token:token,
                password: password
            });
            console.log("Réinitialisation du mot de passe terminée")
            console.log(response.data)
            setError(null)

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
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="article-container">
            {error ? (
                    <>
                        <h1>Une erreur est survenue</h1>

                        <p>{error.message}</p>
                    </>
                ) : null
            }
            <section className="article-hero">
                <h1>Mot de passe oublié</h1>
                <p>Entrez votre adresse e-mail pour recevoir les instructions de réinitialisation du mot de passe.</p>

                <form onSubmit={(e) => {
                        e.preventDefault();
                        handleResetPassword();
                    }}>

                        <Input type="password" name="password" id="password"  placeholder="Mot de passe" value={password}  onChange={(e) => setPassword(e.target.value)} />

                        <Button variant="primary">
                            Réinitialiser le mot de passe
                        </Button>
                    </form>
            </section>
        </div>
    );
};

export default ResetPassword;