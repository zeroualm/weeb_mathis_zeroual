import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // State pour suivre si l'utilisateur est connecté ou pas
    const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem("access"));

    // Fonction login
    const login = (accessToken, refreshToken) => {
        sessionStorage.setItem("access", accessToken);
        setIsLogged(true);
    };

    // Fonction logout
    const logout = () => {
        sessionStorage.removeItem("access");
        setIsLogged(false);
    };

    // Variables et fonctions accessibles partout
    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook pour accéder au contexte 
export const useAuth = () => {
    return useContext(AuthContext);
};