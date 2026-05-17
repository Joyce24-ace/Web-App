import { apiRequest } from "./apiClient.js";

const UsersAPI = {

    getUsers() {
        return apiRequest("/users/");
    },

    createUser(userData) {
        return apiRequest("/users/", {
            method: "POST",
            data: userData
        });
    },

    deleteUser(userId) {
        return apiRequest(`/users/${userId}/`, {
            method: "DELETE"
        });
    }
};

export default UsersAPI;