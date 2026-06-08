import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../context/api";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthProvider";

import styles from "./CreateArticle.module.css"

const CreateArticle = () => {
    
    const { token } = useAuth();

    const djangoApiUrlSignup = `http://localhost:8000/article/`; 

    const [isSent,setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreateArticle = async () => {
         try {
            console.log("Envoi de la requête d'ajout d'article ...")
            const response = await api.post(
                djangoApiUrlSignup, 
                {
                    title: title,
                    content: content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                }
            );
            console.log("Requête d'ajout terminée")
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
        <div className="page-container">

            <section className={styles.hero}>

                {isSent ? (
                    <>
                        <h1>Votre article a été créé</h1>

                        <p>Retrouvez-le sur la page <Link to="/blog" >Blog</Link></p>

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

                        <h2>Créer un nouvel article</h2>

                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCreateArticle();
                                }}
                            >
                               
                                <Input type="text" name="title" id="title" placeholder="Titre de l'article" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                
                                <textarea name="content" id="content" placeholder="Contenu de l'article" className={styles.contentInput} value={content} onChange={(e) => setContent(e.target.value)} required/>
                            
                                <Button type="submit" variant="primary">Envoyer</Button>
                            </form>
                    </>
                ) : null}

            </section>

        </div>
    );
};

export default CreateArticle;