import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    
    const classes = `${styles.btn} ${styles[variant]} ${className}`.trim();

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;