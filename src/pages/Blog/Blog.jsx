import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../context/api";
import Article from "../../components/Article/Article";
import Button from "../../components/Button/Button";
import styles from "./Blog.module.css"

const Blog = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const djangoApiUrlArticle = "http://localhost:8000/article/"

    const [articles, setArticles] = useState([]);
    
    useEffect(() => {

        const getArticles = async () => {
            try {
                console.log("Récupération des articles ...")
                const response = await api.get(djangoApiUrlArticle);
                console.log("Récupération des articles terminée")
                console.log(response.data)
                setArticles(response.data)
                setError(null)
            } catch (err){
                if (err.response && err.response.status === 404) {
                    console.log("Erreur 404 : Aucune catégorie");
                }
                else {
                    console.error("--- ERROR FETCHING DATA ---");
                    console.error(err);
                    setError(err);
                    setArticles([]);
                }
                
            } finally {
                setIsLoading(false);
            }
        };

        getArticles();
    },[]);

    return (
        <div className="page-container">

            <section className={styles.hero}>

                <h1>Consulter nos articles</h1>

                <p>Découvrez nos dernières publications et restez informés des dernières actualités.</p>

                <Link to="/create-article" className="header-link">Créer un article</Link>   

            </section>
            
           <section className={styles.articles}>

                {articles.map((article) => (
                    <Link key={article.id} to={`/article/${article.id}`} className={styles.cardLink}>
                        <Article title={article.title} content={article.content} date={article.created_at} />
                    </Link>
                ))}
                
            </section>

        </div>
    );
};

export default Blog;