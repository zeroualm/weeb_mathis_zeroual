import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../context/api";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./ForgotPassword.module.css"

const ForgotPassword = () => {
    const djangoApiUrlReset = `http://localhost:8000/api/users/password-reset/request/`; 

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleResetPassword = async () => {
        setIsLoading(true);
        try {
            console.log("Envoi de la requête de réinitialisation du mot de passe ...")
            const response = await api.post(djangoApiUrlReset, {
                email: email
            });
            console.log("Requête de réinitialisation du mot de passe terminée");
            console.log(response.data);
            setIsSent(true);

        } catch (err){
            if (err.response && err.response.status === 404) {
                console.log("Erreur 404 : Utilisateur non trouvé"); 
            } else {
                console.error("--- ERROR FETCHING DATA ---");
                console.error(err);
                setError(err);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-container">
            <section className={styles.hero}>

                {isSent ? (
                    <>
                        <h1>Demande envoyée</h1>

                        <p>Le protocole de réinitialition de mot de passe a été envoyé à l'adresse mail renseignée</p>

                    </>
                ) : 
                    <>
                        <h1>Mot de passe oublié</h1>
                        <p>Entrez votre adresse e-mail pour recevoir les instructions de réinitialisation du mot de passe.</p>

                        <form onSubmit={(e) => {
                                e.preventDefault();
                                handleResetPassword();
                            }}>
                            
                                <Input type="email" name="email" id="email"  placeholder="Adresse e-mail" value={email}  onChange={(e) => setEmail(e.target.value)} />

                                <Button variant="primary">
                                    Réinitialiser le mot de passe
                                </Button>
                        </form>
                    </>
                }
            </section>
        </div>
    );
};

export default ForgotPassword;