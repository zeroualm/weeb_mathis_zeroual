import { Link } from "react-router-dom";
import Desktop from "../assets/Desktop.png"
import Button from "../components/Button/Button";
import ArtVenue from "../assets/ArtVenue.svg"
import Shells from "../assets/Shells.svg"
import SmartFinder from "../assets/SmartFinder.svg"
import Waves from "../assets/Waves.svg"
import Zoomerr from "../assets/Zoomerr.svg"

const Home = () => {
    return (
        <div className="home-container">

            <section>

                <h1>Explorez le <span>Web</span> sous toutes ses facettes</h1>

                <div>
                    <p>Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.</p>
                    <div>
                        <Button type="btn-primary" label="Découvrir les articles" />
                        <Button type="btn-secondary" label="S'abonner à la newsletter"/>
                    </div>
                </div>

                <img src={Desktop} alt="" />

            </section>

            <section>
                
                <h1>Ils nous font confiance</h1>

                <div className="home-entreprises">
                    <img src={SmartFinder} alt="" />
                    <img src={Zoomerr} alt="" />
                    <img src={Shells} alt="" />
                    <img src={Waves} alt="" />
                    <img src={ArtVenue} alt="" />
                </div>

            </section>

            <section>

                <h2>Des ressources pour tous les niveaux</h2>

                <h1><span className="txt-important">Apprenez </span> et <span className="txt-important">progressez</span></h1>

                <p>Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.</p>

                <p>Explorer sur les ressources</p>

            </section>

            <section>
    
                <img src="" alt="" />

                <div>

                    <h2>Le web, un écosystème en constante évolution</h2>

                    <h1>Restez informé des dernières tendances</h1>

                    <p>Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>

                    <p>Lire les articles récents</p>

                </div>
                
            </section>

            <section>

            </section>

        </div>
    );
};

export default Home;