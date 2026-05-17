import { apiRequest } from "./apiClient.js";

const EventsAPI = {

    // =========================
    // GET ALL EVENTS
    // =========================
    getEvents() {
        return apiRequest("/events/");
    },

    // =========================
    // GET SINGLE EVENT
    // =========================
    getEvent(id) {
        return apiRequest(`/events/${id}/`);
    },

    // =========================
    // CREATE EVENT (POST)
    // =========================
    createEvent(eventData) {
        return apiRequest("/events/", {
            method: "POST",
            data: eventData
        });
    },

    // =========================
    // UPDATE EVENT (PUT)
    // =========================
    updateEvent(id, eventData) {
        return apiRequest(`/events/${id}/`, {
            method: "PUT",
            data: eventData
        });
    },

    // =========================
    // DELETE EVENT
    // =========================
    deleteEvent(id) {
        return apiRequest(`/events/${id}/`, {
            method: "DELETE"
        });
    }
};

export default EventsAPI;
