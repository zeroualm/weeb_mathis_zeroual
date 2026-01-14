import { Link } from "react-router-dom";


const Login = () => {
    return (
        <section className="login-container">

        <section>

            <h1>Login</h1>

            <div>
                <Link to="/about"> À propos de nous</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </section>

        </section>
    );
};

export default Login;