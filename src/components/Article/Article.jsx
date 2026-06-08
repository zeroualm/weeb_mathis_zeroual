import styles from "./Article.module.css";

const Article = ({ id, title, content, date }) => {

    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
            <span className="secondary-text">Publié le {new Date(date).toLocaleString('fr-FR')}</span>
        </article>
    );
};

export default Article