import { apiRequest } from "./apiClient.js";

const KKAPI = {

    // =====================================
    // PROFILING INFORMATIONS
    // =====================================

    // GET ALL
    getProfilingInformations() {
        return apiRequest("/profiling-informations/");
    },

    // GET SINGLE
    getProfilingInformation(id) {
        return apiRequest(`/profiling-informations/${id}/`);
    },

    // POST
    createProfilingInformation(data) {
        return apiRequest("/profiling-informations/", {
            method: "POST",
            data
        });
    },

    // PUT
    updateProfilingInformation(id, data) {
        return apiRequest(`/profiling-informations/${id}/`, {
            method: "PUT",
            data
        });
    },

    // DELETE
    deleteProfilingInformation(id) {
        return apiRequest(`/profiling-informations/${id}/`, {
            method: "DELETE"
        });
    },


    // =====================================
    // KK ADDRESS
    // =====================================

    // GET ALL
    getKKAddresses() {
        return apiRequest("/kk-address/");
    },

    // GET SINGLE
    getKKAddress(id) {
        return apiRequest(`/kk-address/${id}/`);
    },

    // POST
    createKKAddress(data) {
        return apiRequest("/kk-address/", {
            method: "POST",
            data
        });
    },

    // PUT
    updateKKAddress(id, data) {
        return apiRequest(`/kk-address/${id}/`, {
            method: "PUT",
            data
        });
    },

    // DELETE
    deleteKKAddress(id) {
        return apiRequest(`/kk-address/${id}/`, {
            method: "DELETE"
        });
    },


    // =====================================
    // YOUTH STATUS
    // =====================================

    // GET ALL
    getYouthStatuses() {
        return apiRequest("/youth-status/");
    },

    // GET SINGLE
    getYouthStatus(id) {
        return apiRequest(`/youth-status/${id}/`);
    },

    // POST
    createYouthStatus(data) {
        return apiRequest("/youth-status/", {
            method: "POST",
            data
        });
    },

    // PUT
    updateYouthStatus(id, data) {
        return apiRequest(`/youth-status/${id}/`, {
            method: "PUT",
            data
        });
    },

    // DELETE
    deleteYouthStatus(id) {
        return apiRequest(`/youth-status/${id}/`, {
            method: "DELETE"
        });
    }

};

export default KKAPI;