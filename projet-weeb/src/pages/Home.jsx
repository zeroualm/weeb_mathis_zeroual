import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Button from "../components/Button/Button";

import Desktop from "../assets/Desktop.png"
import ArtVenue from "../assets/ArtVenue.svg"
import Shells from "../assets/Shells.svg"
import SmartFinder from "../assets/SmartFinder.svg"
import Waves from "../assets/Waves.svg"
import Zoomerr from "../assets/Zoomerr.svg"
import Shapes from "../assets/Shapes.svg"

const Home = () => {
    return (
        <div className="home-container">

            <section className="home-hero">

                <h1>Explorez le <span className="secondary-text">Web</span> sous toutes ses <span className="secondary-underline">facettes</span></h1>


                <p>Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.</p>
  
                <div className="home-btn-container">
                    <Button type="btn-primary" label="Découvrir les articles" />
                    <Button type="btn-secondary" label="S'abonner à la newsletter"/>
                </div>

                <img src={Desktop} alt="Image de site web" />

            </section>

            <section className="home-entreprise">

                <h1>Ils nous font confiance</h1>

                <div className="home-entreprise-list">
                    <img src={SmartFinder} alt="" />
                    <img src={Zoomerr} alt="" />
                    <img src={Shells} alt="" />
                    <img src={Waves} alt="" />
                    <img src={ArtVenue} alt="" />
                </div>

            </section>

            <section className="home-ressources">

                <div>

                    <h2 className="upper-text">Des ressources pour tous les niveaux</h2>

                    <h1><span className="secondary-text">Apprenez </span> et <span className="secondary-text">progressez</span></h1>

                    <p>Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.</p>

                    <p>Explorer sur les ressources <FaArrowRight /></p>

                </div>

                <div>

                    <img src={Desktop} alt="Image de site web" />

                </div>

            </section>

            <section className="home-ecosystem">
    
                <div>
                    <img src={Shapes} alt="Formes géométriques" />
                </div>
                
                <div>

                    <h2 className="upper-text">Le web, un écosystème en constante évolution</h2>

                    <h1>Restez informé des dernières <span className="secondary-text">tendances</span></h1>

                    <p>Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>

                    <p>Lire les articles récents <FaArrowRight /></p> 

                </div>
                
            </section>

        </div>
    );
};

export default Home;