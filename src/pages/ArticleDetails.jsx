import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetails = () => {

    const { id } = useParams();
    
    const djangoApiUrlArticle = `http://localhost:8000/article/${id}/`; 

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [article, setArticle] = useState({});

    useEffect(() => {

        const getArticle = async () => {
            try {
                console.log("Récupération de l'article ...")
                const response = await axios.get(djangoApiUrlArticle);
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
        <div className="article-container">

            <section className="article-hero">

                <h1>Vous consulter l'article : {article.title}</h1>

            </section>
            
           <section className="article-content">

                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <span className="article-date">Publié le {new Date(article.created_at).toLocaleString('fr-FR')}</span>

            </section>

        </div>
    );
};

export default ArticleDetails;