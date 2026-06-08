import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from '../components/Input/Input';
import { useState, useEffect } from "react";
import api from "../context/api";

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSent, setIsSent] = useState(false);

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    const djangoApiUrlContact = "http://127.0.0.1:8000/contact/"

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            console.log("Envoie du messages en cours ...")
            const response = await api.post(djangoApiUrlContact, {
                last_name: nom,
                first_name: prenom,
                phone_number: telephone,
                email: email,
                message: message
            });
            console.log("Envoie du message terminé")
            setError(null)
            setIsSent(true)

        } catch (err){
            if (err.response && err.response.status === 404) {
                console.log("Erreur 404 : Aucune catégorie");
            }
            else {
                console.error("--- ERROR ---");
                console.error(err);
                setError(err);
            }
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-container">      

            {isSent ? (
                <div className="contact-success-message">
                    <h2>Merci pour votre message !</h2>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>

                    <h2>Résumé de votre message :</h2>
                    <p><strong>Nom :</strong> {nom}</p>
                    <p><strong>Prénom :</strong> {prenom}</p>
                    <p><strong>Téléphone :</strong> {telephone}</p>
                    <p><strong>Email :</strong> {email}</p>
                    <p><strong>Message :</strong> {message}</p>

                    <Link to="/">Retour à l'accueil</Link>
                </div>
            ) : null}

            {isLoading ? (
                <div className="contact-loading-message">
                    <h2>Envoie du message en cours ...</h2>
                </div>
            ) : null
            }

            {error ? (
                <div className="contact-error-message">
                    <h2>Une erreur est survenue lors de l'envoie du message. Veuillez réessayer plus tard.</h2>
                </div>
            ) : null
            }

            {!isSent && !isLoading && !error ? (
                <>
                
                    <section className="contact-form">
                        <form action="" onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                
                            <div className="contact-form-grid">

                                <Input type="text" name="nom" id="nom" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                                <Input type="text" name="prenom" id="prenom" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

                                <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                                <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                                <textarea name="message" id="message" placeholder="Message" className="contact-message-input" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <div className="submit-btn-container">
                                <Button variant="primary">Contact</Button>
                            </div>

                        </form>
                    </section>
                </>
            ) : null
            }

            

        </div>
    );
};

export default Contact;