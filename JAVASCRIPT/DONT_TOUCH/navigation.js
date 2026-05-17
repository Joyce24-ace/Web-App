export function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");

    const views = {
        dashboard: document.querySelector(".main-content"),
        youth: document.getElementById("youth-profiles-content"),
        events: document.getElementById("events-view"),
        settings: document.getElementById("settings-view"),
        org: document.getElementById("organization-view"),
        addYouth: document.getElementById("add-youth-view"),
        addEvent: document.getElementById("add-event-form-view"),
        newYear: document.getElementById("new-year-view")
    };

    const hideAll = () => {
        Object.values(views).forEach(v => v && (v.style.display = "none"));
    };

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            hideAll();

            const text = item.innerText.trim();

            if (text.includes("Dashboard")) views.dashboard.style.display = "block";
            if (text.includes("Youth")) views.youth.style.display = "block";
            if (text.includes("Events")) views.events.style.display = "block";
            if (text.includes("Settings")) views.settings.style.display = "block";
            if (text.includes("Organization")) views.org.style.display = "block";
        });
    });
}