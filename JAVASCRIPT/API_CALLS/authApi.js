import {
    apiRequest,
    setTokens,
    clearTokens
} from "./apiClient.js";


const AuthAPI = {

    async login(username, password) {

        const response = await apiRequest(
            "/token/",
            {
                method: "POST",
                requiresAuth: false,
                data: {
                    username,
                    password
                }
            }
        );

        // Save JWT Tokens
        if (response?.access && response?.refresh) {

            setTokens(
                response.access,
                response.refresh
            );
        }

        return response;
    },

    logout() {

        clearTokens();

        return apiRequest(
            "/logout/",
            {
                method: "POST"
            }
        );
    },

    refreshToken() {

        const refresh =
            localStorage.getItem("refresh_token");

        return apiRequest(
            "/token/refresh/",
            {
                method: "POST",
                requiresAuth: false,
                data: { refresh }
            }
        );
    }
};


export default AuthAPI;