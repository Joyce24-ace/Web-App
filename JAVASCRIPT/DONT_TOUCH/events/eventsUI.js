export function renderEvents(events) {
    const container = document.getElementById("dynamic-event-list");
    const emptyMsg = document.getElementById("no-events-msg");

    if (!container) return;

    if (!events.length) {
        if (emptyMsg) emptyMsg.style.display = "block";
        container.innerHTML = "";
        return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";

    container.innerHTML = events.map(event => `
        <div class="event-card" style="display:flex; gap:15px; padding:15px; border:1px solid #eee; border-radius:10px;">
            <div>
                <h4>${event.title}</h4>
                <p style="color:#888">${event.date}</p>
                <p>${event.desc}</p>
            </div>
        </div>
    `).join("");
}