import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../context/api";
import styles from "./ArticleDetails.module.css"

const ArticleDetails = () => {

    const { id } = useParams();
    
    const djangoApiUrlArticle = `http://localhost:8000/article/${id}/`; 

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [article, setArticle] = useState({});

    useEffect(() => {

        const getArticle = async () => {
            try {
                console.log("Récupération de l'article ...")
                const response = await api.get(djangoApiUrlArticle);
                console.log("Récupération de l'article terminée")
                console.log(response.data)
                setArticle(response.data)
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

        getArticle();
    },[]);


    return (
        <div className={`page-container ${styles.container}`}>

            <section className={styles.hero}>

                <h1>{article.title}</h1>

            </section>
            
           <section className={styles.content}>

                <div className={styles.description}>
                    <p>Auteur : {article.author} John Doe</p>
                    <span className="secondary-text">Publié le {new Date(article.created_at).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                </div>

                <div className={styles.body}>
                    <p>{article.content}</p>
                </div>  

            </section>

        </div>
    );
};

export default ArticleDetails;