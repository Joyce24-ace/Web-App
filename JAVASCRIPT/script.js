document.addEventListener('DOMContentLoaded', () => {
    // --- View Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.querySelector('.main-content');
    const profiles = document.getElementById('youth-profiles-content');
    const addYouthView = document.getElementById('add-youth-view');
    const eventsView = document.getElementById('events-view');
    const addEventFormView = document.getElementById('add-event-form-view');

    // --- Buttons ---
    const btnAddNewYouth = document.querySelector('.btn-add-youth');
    const btnBackToList = document.getElementById('back-to-list');
    const btnShowAddEvent = document.getElementById('btn-show-add-event');
    const btnBackToEvents = document.getElementById('btn-back-to-events');
    const newEventForm = document.getElementById('new-event-form');

    // --- Mock Database for Events ---
    // This stores your added events in memory for this session
    let eventsData = [
        {
            title: "Community Outreach Program",
            date: "March 16, 2024",
            img: "../images/outreach.jpg",
            desc: "A collaboration with the students of Jugaban National High School together with SK Council."
        }
    ];

    // --- Sidebar Navigation Logic ---
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const text = item.innerText.trim();

            // Hide all views first
            [dashboard, profiles, addYouthView, eventsView, addEventFormView].forEach(view => {
                if (view) view.style.display = 'none';
            });

            if (text.includes('Dashboard')) {
                dashboard.style.display = 'block';
            } else if (text.includes('Youth Profiles')) {
                profiles.style.display = 'block';
            } else if (text.includes('Events')) {
                eventsView.style.display = 'block';
                renderEvents(); // Refresh the list every time we click Events
            }
        });
    });

    // --- Youth View Toggles ---
    if (btnAddNewYouth) {
        btnAddNewYouth.addEventListener('click', () => {
            profiles.style.display = 'none';
            addYouthView.style.display = 'block';
        });
    }

    if (btnBackToList) {
        btnBackToList.addEventListener('click', () => {
            addYouthView.style.display = 'none';
            profiles.style.display = 'block';
        });
    }

    // --- Event View Toggles ---
    if (btnShowAddEvent) {
        btnShowAddEvent.addEventListener('click', () => {
            eventsView.style.display = 'none';
            addEventFormView.style.display = 'block';
        });
    }

    if (btnBackToEvents) {
        btnBackToEvents.addEventListener('click', () => {
            addEventFormView.style.display = 'none';
            eventsView.style.display = 'block';
        });
    }

    // --- Dynamic Event Rendering ---
    function renderEvents() {
        const listContainer = document.getElementById('dynamic-event-list');
        if (!listContainer) return;

        listContainer.innerHTML = ''; // Clear current list

        eventsData.forEach(event => {
            const eventCard = `
                <div class="event-card" style="display: flex; gap: 20px; background: #fff; padding: 15px; border-radius: 12px; border: 1px solid #eee; align-items: center;">
                    <img src="${event.img}" alt="Event" style="width: 180px; height: 110px; border-radius: 10px; object-fit: cover;">
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 5px 0;">${event.title}</h4>
                        <p style="color: #888; font-size: 0.85rem; margin-bottom: 8px;">${event.date}</p>
                        <p style="color: #444; font-size: 0.9rem;">${event.desc}</p>
                    </div>
                    <button class="btn-add-youth" style="background-color: #4dabf7; height: fit-content;">View Details</button>
                </div>
            `;
            listContainer.innerHTML += eventCard;
        });
    }

    // --- Form Submission Logic ---
    if (newEventForm) {
        newEventForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page refresh

            // Capture form data
            const newEvent = {
                title: document.getElementById('event-title').value,
                date: document.getElementById('event-date').value,
                img: document.getElementById('event-img').value || '../images/default.jpg', // Default if empty
                desc: document.getElementById('event-desc').value
            };

            // Add to our list
            eventsData.unshift(newEvent); 
            
            // Clear form and go back
            newEventForm.reset();
            btnBackToEvents.click();
            renderEvents();
        });
    }
});