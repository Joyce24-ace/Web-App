import { renderEvents } from "./eventsUI.js";

let events = [];

/**
 * Initialize Events Module
 */
export function initEvents() {
    const form = document.getElementById("new-event-form");

    // Load initial render
    renderEvents(events);

    // Handle form submit
    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        const newEvent = getEventFromForm();

        if (!newEvent.title || !newEvent.date) {
            alert("Title and Date are required!");
            return;
        }

        addEvent(newEvent);
        form.reset();
    });
}

/**
 * Extract event data from form
 */
function getEventFromForm() {
    return {
        id: Date.now(),
        title: document.getElementById("event-title")?.value.trim(),
        date: document.getElementById("event-date")?.value,
        img: document.getElementById("event-img")?.value || "../images/default.jpg",
        desc: document.getElementById("event-desc")?.value.trim()
    };
}

/**
 * Add event to state
 */
export function addEvent(event) {
    events.unshift(event);
    renderEvents(events);
}

/**
 * Get all events
 */
export function getEvents() {
    return events;
}

/**
 * Optional: set events (useful for future backend/API)
 */
export function setEvents(newEvents) {
    events = newEvents || [];
    renderEvents(events);
}