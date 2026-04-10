document.addEventListener('DOMContentLoaded', () => {
    // --- View Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.querySelector('.main-content');
    const profiles = document.getElementById('youth-profiles-content');
    const addYouthView = document.getElementById('add-youth-view');
    const eventsView = document.getElementById('events-view');
    const addEventFormView = document.getElementById('add-event-form-view');
    const newYearView = document.getElementById('new-year-view');
    const settingsView = document.getElementById('settings-view'); // Target the settings ID

    // --- Buttons ---
    const btnAddNewYouth = document.querySelector('.btn-add-youth');
    const btnBackToList = document.getElementById('back-to-list');
    const btnShowAddEvent = document.getElementById('btn-show-add-event');
    const btnBackToEvents = document.getElementById('btn-back-to-events');
    const newEventForm = document.getElementById('new-event-form');
    
    // New Year Buttons
    const btnOpenNewYear = document.querySelector('.btn-new-year'); 
    const btnBackFromNewYear = document.getElementById('back-from-new-year');
    const btnCancelYear = document.getElementById('cancel-year-action');

    // --- Settings Tab Elements ---
    const tabGuide = document.getElementById('tab-guide');
    const tabFaq = document.getElementById('tab-faq');
    const guideContent = document.getElementById('guide-content');
    const faqContent = document.getElementById('faq-content');

    // --- Mock Database for Events ---
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

            // Hide ALL views first to prevent overlapping
            const allViews = [dashboard, profiles, addYouthView, eventsView, addEventFormView, newYearView, settingsView];
            allViews.forEach(view => {
                if (view) view.style.display = 'none';
            });

            if (text.includes('Dashboard')) {
                dashboard.style.display = 'block';
            } else if (text.includes('Youth Profiles')) {
                profiles.style.display = 'block';
            } else if (text.includes('Events')) {
                eventsView.style.display = 'block';
                renderEvents(); 
            } else if (text.includes('Settings')) {
                if (settingsView) settingsView.style.display = 'block'; // Show settings
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

    if (btnOpenNewYear) {
        btnOpenNewYear.addEventListener('click', () => {
            profiles.style.display = 'none';
            newYearView.style.display = 'block';
        });
    }

    const closeNewYearView = () => {
        newYearView.style.display = 'none';
        profiles.style.display = 'block';
    };

    if (btnBackFromNewYear) btnBackFromNewYear.addEventListener('click', closeNewYearView);
    if (btnCancelYear) btnCancelYear.addEventListener('click', closeNewYearView);

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

    // --- Settings Tab Logic (Now inside DOMContentLoaded) ---
    if (tabGuide && tabFaq) {
        tabGuide.addEventListener('click', () => {
            // Update Tab styles
            tabGuide.style.color = '#0d6efd';
            tabGuide.style.fontWeight = 'bold';
            tabFaq.style.color = '#666';
            tabFaq.style.fontWeight = 'normal';

            // Switch Content
            guideContent.style.display = 'block';
            faqContent.style.display = 'none';
        });

        tabFaq.addEventListener('click', () => {
            // Update Tab styles
            tabFaq.style.color = '#0d6efd';
            tabFaq.style.fontWeight = 'bold';
            tabGuide.style.color = '#666';
            tabGuide.style.fontWeight = 'normal';

            // Switch Content
            guideContent.style.display = 'none';
            faqContent.style.display = 'block';
        });
    }

    // --- Dynamic Event Rendering ---
    function renderEvents() {
        const listContainer = document.getElementById('dynamic-event-list');
        if (!listContainer) return;
        listContainer.innerHTML = ''; 

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

    // --- Event Form Submission ---
    if (newEventForm) {
        newEventForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const newEvent = {
                title: document.getElementById('event-title').value,
                date: document.getElementById('event-date').value,
                img: document.getElementById('event-img').value || '../images/default.jpg',
                desc: document.getElementById('event-desc').value
            };
            eventsData.unshift(newEvent); 
            newEventForm.reset();
            btnBackToEvents.click();
            renderEvents();
        });
    }

    // --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (darkModeToggle) darkModeToggle.checked = true;
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// --- FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');

            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                if (icon) icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                question.style.borderRadius = '8px'; 
            } else {
                answer.style.display = 'block';
                if (icon) icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                question.style.borderRadius = '8px 8px 0 0'; 
            }
        });
    });



}); // End of DOMContentLoaded