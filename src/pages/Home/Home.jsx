import { FaArrowRight } from "react-icons/fa";

import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import Desktop from "../../assets/Desktop.webp"
import ArtVenue from "../../assets/ArtVenue.svg"
import Shells from "../../assets/Shells.svg"
import SmartFinder from "../../assets/SmartFinder.svg"
import Waves from "../../assets/Waves.svg"
import Zoomerr from "../../assets/Zoomerr.svg"
import Shapes from "../../assets/Shapes.svg"

import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={`page-container ${styles.container}`}>

            <section className={styles.hero}>

                <h1>Explorez le <span className="secondary-text">Web</span> sous toutes ses <span className="secondary-underline">facettes</span></h1>


                <p>Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.</p>
  
                <div className={styles.btnContainer}>
                    <Button variant="primary"> <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>Découvrir les articles</Link> </Button>
                    
                    <Button variant="secondary">S'abonner à la newsletter</Button>
                </div>

                <img src={Desktop} alt="Image de site web" />

            </section>

            <section className={styles.entreprise}>

                <h2>Ils nous font confiance</h2>

                <div className={styles.entrepriseList}>
                    <img src={SmartFinder} alt="" />
                    <img src={Zoomerr} alt="" />
                    <img src={Shells} alt="" />
                    <img src={Waves} alt="" />
                    <img src={ArtVenue} alt="" />
                </div>

            </section>

            <section className={styles.ressources}>

                <div>

                    <p className="upper-text">Des ressources pour tous les niveaux</p>

                    <h2><span className="secondary-text">Apprenez </span> et <span className="secondary-text">progressez</span></h2>

                    <p>Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.</p>

                    <p>Explorer sur les ressources <FaArrowRight /></p>

                </div>

                <div>

                    <img src={Desktop} alt="Image de site web" />

                </div>

            </section>

            <section className={styles.ecosystem}>
    
                <div>
                    <img src={Shapes} alt="Formes géométriques" />
                </div>
                
                <div>

                    <p className="upper-text">Le web, un écosystème en constante évolution</p>

                    <h2>Restez informé des dernières <span className="secondary-text">tendances</span></h2>

                    <p>Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>

                    <Link to="/blog" >
                        Lire les articles récents <FaArrowRight />
                    </Link>

                </div>
                
            </section>

        </div>
    );
};

export default Home;