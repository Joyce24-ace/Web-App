import {
    apiRequest,
    setTokens,
    clearTokens
} from "./apiClient.js";

const UserAPI = {


    async login(credentials) {

        const response = await apiRequest("/login/", {
            method: "POST",
            data: credentials,
            requiresAuth: false
        });

        // Save JWT tokens if login successful
        if (response.access && response.refresh) {

            setTokens(
                response.access,
                response.refresh
            );
        }

        return response;
    },

    async logout() {

        const response = await apiRequest("/logout/", {
            method: "POST"
        });

        clearTokens();

        return response;
    },


    getUsers() {
        return apiRequest("/users/");
    },


    createUser(userData) {
        return apiRequest("/users/", {
            method: "POST",
            data: userData
        });
    },



    deleteUser(id) {
        return apiRequest(`/users/${id}/`, {
            method: "DELETE"
        });
    }

};

export default UserAPI;