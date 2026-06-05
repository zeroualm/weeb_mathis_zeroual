import "./Article.css";

const Article = ({ id, title, content, date }) => {

    return (
        <div className="article-card">
            <h2 className="article-card-title">{title}</h2>
            <p className="article-card-content">{content}</p>
            <span className="secondary-text">Publié le {new Date(date).toLocaleString('fr-FR')}</span>
        </div>
    );
};

export default Article