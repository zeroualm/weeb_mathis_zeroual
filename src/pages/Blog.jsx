import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Article from "../components/Article/Article";

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
                const response = await axios.get(djangoApiUrlArticle);
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
        <div className="blog-container">

            <section className="blog-hero">

                <h1>Consulter nos articles</h1>

                <p>Découvrez nos dernières publications et restez informés des dernières actualités.</p>

            </section>
            
           <section className="blog-articles" onClick={() => navigate("/article/1")}>

                {articles.map((article) => (
                    <Article id={article.id} title={article.title} content={article.content} date={article.created_at} />
                ))}

            </section>

        </div>
    );
};

export default Blog;