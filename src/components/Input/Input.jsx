import styles from "./Input.module.css";

const Input = ({ className = "", ...props }) => {
    return (
        <input
            className={`${styles.input} ${className}`.trim()}
            {...props}
        />
    );
};

export default Input;