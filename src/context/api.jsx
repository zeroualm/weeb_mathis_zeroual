import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
});

// Ajoute automatiquement l'access token sur chaque requête
api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("access");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Gère automatiquement l'expiration de l'access token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (!error.response) {
            return Promise.reject(error);
        }

        // Si c'était une requête refresh qui avait échoué, on coupe tout sans reessayer
        if (originalRequest?.url?.includes("users/token/refresh/")) {
            sessionStorage.removeItem("access");
            sessionStorage.removeItem("refresh"); // MODIFICATION: On nettoie bien les deux
            window.location.href = "/login";
            return Promise.reject(error);
        }

        // Si on reçoit 401 et qu'on n'a pas encore tenté le refresh
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const currentRefreshToken = sessionStorage.getItem("refresh");

                const res = await api.post(
                    "users/token/refresh/",
                    { refresh: currentRefreshToken },
                    { withCredentials: true } 
                );

                // Sauvegarde des tokens
                sessionStorage.setItem("access", res.data.access);
                if (res.data.refresh) {
                    sessionStorage.setItem("refresh", res.data.refresh);
                }

                // Met à jour le header de la requête initiale échouée
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;

                // Rejoue la requête initiale avec la même instance Axios
                return api(originalRequest);

            } catch (refreshError) {
                sessionStorage.removeItem("access");
                sessionStorage.removeItem("refresh");
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;