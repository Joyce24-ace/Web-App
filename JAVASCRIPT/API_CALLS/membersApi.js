import { apiRequest } from "./apiClient.js";

const MembersAPI = {

    getAllMembers() {
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

    patchMember(id, partialData) {
        return apiRequest(`/members/${id}/`, {
            method: "PATCH",
            data: partialData
        });
    },

    deleteMember(id) {
        return apiRequest(`/members/${id}/`, {
            method: "DELETE"
        });
    }
};

export default MembersAPI;