import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../context/api";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {

    const {logout} = useAuth();
    
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                const refreshToken = sessionStorage.getItem("refresh");
                if (refreshToken) {
                    await api.post("users/logout/", { refresh_token: refreshToken });
                }
            } catch (error) {
                console.error("Erreur API lors de la déconnexion", error);
            } finally {
                logout()
                navigate("/login");
            }
        };

        performLogout();
    }, [navigate]);

    return (
        <>
            <p>Déconnexion en cours...</p>
        </>
    );
};

export default Logout;