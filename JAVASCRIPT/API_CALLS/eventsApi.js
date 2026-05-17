import { apiRequest } from "./apiClient.js";

const EventsAPI = {

    getEvents() {
        return apiRequest("/events/");
    },

    getEvent(id) {
        return apiRequest(`/events/${id}/`);
    },

    createEvent(eventData) {
        return apiRequest("/events/", {
            method: "POST",
            data: eventData
        });
    },

    updateEvent(id, eventData) {
        return apiRequest(`/events/${id}/`, {
            method: "PUT",
            data: eventData
        });
    },

    deleteEvent(id) {
        return apiRequest(`/events/${id}/`, {
            method: "DELETE"
        });
    }
};

export default EventsAPI;