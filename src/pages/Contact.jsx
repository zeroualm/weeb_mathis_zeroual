import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from '../components/Input/Input';

const Contact = () => {
    return (
        <div className="contact-container">

            <section className="contact-hero">

                <h1>Votre avis compte !</h1>

                <p>Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante. </p>

            </section>
            
           <section className="contact-form">
                <form action="">
        
                    <div className="contact-form-grid">

                        <Input type="text" name="nom" id="nom" placeholder="Nom" />
                        <Input type="text" name="prenom" id="prenom" placeholder="Prénom" />

                        <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" />
                        <Input type="email" name="email" id="email" placeholder="Email" />

                        <textarea name="message" id="message" placeholder="Message" className="contact-message-input"/>
                    </div>

                    <div className="submit-btn-container">
                        <Button variant="primary">Contact</Button>
                    </div>

                </form>
            </section>

        </div>
    );
};

export default Contact;