import { apiRequest } from "./apiClient.js";

const SKAPI = {


    getMembers() {
        return apiRequest("/members/");
    },

    getMember(id) {
        return apiRequest(`/members/${id}/`);
    },


    createMember(memberData) {
        return apiRequest("/members/", {
            method: "POST",
            data: memberData
        });
    },


    updateMember(id, memberData) {
        return apiRequest(`/members/${id}/`, {
            method: "PUT",
            data: memberData
        });
    },


    deleteMember(id) {
        return apiRequest(`/members/${id}/`, {
            method: "DELETE"
        });
    }

};

export default SKAPI;