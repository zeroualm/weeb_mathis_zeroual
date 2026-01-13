import { Link } from "react-router-dom";
import './Button.css'

const Button = (props) => {
    return <button className={props.type}>{props.label}</button>;
}

export default Button