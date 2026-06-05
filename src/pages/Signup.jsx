import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const Signup = () => {
    
    const djangoApiUrlSignup = `http://localhost:8000/api/users/signup/`; 

    const [isSent,setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
         try {
            console.log("Envoi de la requête d'enregistrement ...")
            const response = await axios.post(djangoApiUrlSignup, {
                email: email,
                last_name: nom,
                first_name: prenom,
                password: password
            });
            console.log("Requête d'enregistrement terminée")
            console.log(response.data)
            setIsSent(true)
            setError(null)
        } catch (err){
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
                setError(err);
            }
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-container">

            <section className="signup-hero">

                {isSent ? (
                    <>
                        <h1>La demande de compte a été envoyée</h1>

                        <p>Votre compte est en attente de validation par nos équipes, vous recevrez un email lorsque cela sera fait. </p>
                    </>
                ) : null}
                

                {error ? (
                    <>
                        <h1>Une erreur est survenue</h1>

                        <p>{error.message}</p>
                    </>
                ) : null}

                {!isSent && !error ? (
                    <>

                     <h1>S'inscrire</h1>

                    <p>Entrez vos informations pour créer un compte.</p>

                    <form action="" onSubmit={(e) => {
                            e.preventDefault();
                            handleSignup();
                        }}>

                            <Input type="text" name="email" id="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="text" name="nom" id="nom" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                            <Input type="text" name="prenom" id="prenom" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            <Input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button variant="primary">S'inscrire</Button>
                        </form>
                    </>
                ) : null}

            </section>

        </div>
    );
};

export default Signup;