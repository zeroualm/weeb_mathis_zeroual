import "./Article.css";

const Article = ({ id, title, content, date }) => {

    return (
        <div className="article-card">
            <h2 className="article-title">{title}</h2>
            <p className="article-content">{id}</p>
            <p className="article-content">{content}</p>
            <span className="article-date">Publié le {new Date(date).toLocaleString('fr-FR')}</span>
        </div>
    );
};

export default Article