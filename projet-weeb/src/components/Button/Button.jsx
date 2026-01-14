import { Link } from "react-router-dom";
import './Button.css'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    
    const classes = `btn btn-${variant} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button