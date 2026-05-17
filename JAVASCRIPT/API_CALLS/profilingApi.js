import { apiRequest } from "./apiClient.js";

const ProfilingAPI = {

    // ADDRESS

    createAddress(addressData) {
        return apiRequest("/kk-address/", {
            method: "POST",
            data: addressData
        });
    },

    // STATUS

    createYouthStatus(statusData) {
        return apiRequest("/youth-status/", {
            method: "POST",
            data: statusData
        });
    },

    // PROFILE

    createProfile(profileData) {
        return apiRequest(
            "/profiling-informations/",
            {
                method: "POST",
                data: profileData
            }
        );
    },

    getProfiles() {
        return apiRequest(
            "/profiling-informations/"
        );
    },

    getProfile(id) {
        return apiRequest(
            `/profiling-informations/${id}/`
        );
    },

    updateProfile(id, profileData) {
        return apiRequest(
            `/profiling-informations/${id}/`,
            {
                method: "PUT",
                data: profileData
            }
        );
    },

    deleteProfile(id) {
        return apiRequest(
            `/profiling-informations/${id}/`,
            {
                method: "DELETE"
            }
        );
    }
};

export default ProfilingAPI;