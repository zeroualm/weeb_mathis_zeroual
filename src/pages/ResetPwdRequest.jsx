import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const ResetPwdRequest = () => {

    const { id } = useParams();
    
    const djangoApiUrlReset = `http://localhost:8000/api/users/reset-password/request`; 

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const RequestPassword = async () => {
            try {
                console.log("Envoi de la requête de réinitialisation du mot de passe ...")
                const response = await axios.post(djangoApiUrlReset, {
                });
                console.log("Requête de réinitialisation du mot de passe terminée")
                console.log(response.data)
                setError(null)
            } catch (err){
                if (err.response && err.response.status === 404) {
                    console.log("Erreur 404 : Aucune catégorie");
                }
                else {
                    console.error("--- ERROR FETCHING DATA ---");
                    console.error(err);
                    setError(err);
                    setArticle({});
                }
                
            } finally {
                setIsLoading(false);
            }
        };

        RequestPassword();
    },[]);


    return (
        <div className="article-container">

            <section className="article-hero">

                <h1>Mot de passe oublié</h1>

                <p>Entrez votre adresse e-mail pour recevoir les instructions de réinitialisation du mot de passe.</p>

                <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        handleResetPassword();
                    }}>

                        <Input type="text" name="email" id="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="primary">Réinitialiser le mot de passe</Button>
                    </form>

            </section>

        </div>
    );
};

export default ResetPwdRequest;