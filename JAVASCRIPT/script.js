import { EventsAPI } from "./API_CALLS/eventsApi"
import { MembersAPI } from "./API_CALLS/membersApi"
import { ProfilingAPI } from "./API_CALLS/profilingApi"


document.addEventListener('DOMContentLoaded', () => {
    // --- View Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.querySelector('.main-content');
    const profiles = document.getElementById('youth-profiles-content');
    const addYouthView = document.getElementById('add-youth-view');
    const eventsView = document.getElementById('events-view');
    const addEventFormView = document.getElementById('add-event-form-view');
    const newYearView = document.getElementById('new-year-view');
    const settingsView = document.getElementById('settings-view'); 
    const organizationView = document.getElementById('organization-view');

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
            const allViews = [dashboard, profiles, addYouthView, eventsView, addEventFormView, newYearView, settingsView, organizationView];
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
            
            } else if (text.includes('Organization')) { 
                if (organizationView) organizationView.style.display = 'block';
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
            addEventFormView.scrollIntoView({ behavior: 'smooth' });
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



    // --- Organizational Chart Edit Logic ---
    let currentEditingNode = null; // We will track which box is being edited
    const memberModal = document.getElementById('edit-member-modal');
    const editForm = document.getElementById('edit-member-form');

    // Function to open the modal and populate data
    // Update the function signature to accept the 'icon' element
    window.openEditModal = (icon) => {
        // Find the specific node that was clicked
        currentEditingNode = icon.closest('.member-node');
        
        // Get the current data from that specific box
        const currentName = currentEditingNode.querySelector('.member-name').innerText;
        const currentPosition = currentEditingNode.querySelector('.member-role').innerText;
        const currentPhotoUrl = currentEditingNode.querySelector('.member-photo').src;

        // Populate the Modal Fields
        document.getElementById('edit-member-name').value = currentName;
        document.getElementById('edit-member-position').value = currentPosition;
        
        // Add a hidden or simple text field for photo URL to your Modal HTML
        if (document.getElementById('edit-member-photo-url')) {
            document.getElementById('edit-member-photo-url').value = currentPhotoUrl;
        }

        // Show Modal
        if(memberModal) memberModal.style.display = 'flex';
    }

    const hideModal = () => { if(memberModal) memberModal.style.display = 'none'; };

    // --- Modal Back Buttons and Form Logic (KEEP THIS PART) ---
    const closeModalBtn = document.getElementById('close-modal');
    const cancelModalBtn = document.getElementById('btn-cancel-edit');
    if(closeModalBtn) closeModalBtn.onclick = hideModal;
    if(cancelModalBtn) cancelModalBtn.onclick = hideModal;
    
    // Save the new data back to the dynamic box
    if(editForm) {
        editForm.onsubmit = (e) => {
            e.preventDefault();
            
            // Get values from the form inputs
            const newName = document.getElementById('edit-member-name').value;
            const newPosition = document.getElementById('edit-member-position').value;
            const newPhotoUrl = document.getElementById('edit-member-photo-url') ? document.getElementById('edit-member-photo-url').value : "";

            // Update the dynamic box we are currently editing
            if (currentEditingNode) {
                currentEditingNode.querySelector('.member-name').innerText = newName;
                currentEditingNode.querySelector('.member-role').innerText = newPosition;
                
                if (currentEditingNode.querySelector('.member-photo') && newPhotoUrl) {
                    currentEditingNode.querySelector('.member-photo').src = newPhotoUrl;
                }
            }

            hideModal();
        }
    }



// for Logout Modal
const modal = document.getElementById('logoutModal');
const openBtn = document.getElementById('openModal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Show modal
openBtn.onclick = () => modal.style.display = 'flex';

// Hide modal
cancelBtn.onclick = () => modal.style.display = 'none';

// Redirect on confirm
confirmBtn.onclick = () => {
    window.location.href = "index.html";
};




// --- Youth Profile Registration Logic ---
const addYouthForm = document.getElementById('add-youth-form');

if (addYouthForm) {
    addYouthForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Collect and trim inputs
        const firstName = document.getElementById('firstName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        // 2. Get existing records
        const existingRecords = JSON.parse(localStorage.getItem('kkYouthProfiles')) || [];

        // 3. DUPLICATE CHECK
        const isDuplicate = existingRecords.some(record => {
            return record.firstName.toLowerCase() === firstName.toLowerCase() &&
                   (record.middleName || "").toLowerCase() === middleName.toLowerCase() &&
                   record.lastName.toLowerCase() === lastName.toLowerCase();
        });

        if (isDuplicate) {
            alert(`Error: A profile for "${firstName} ${middleName} ${lastName}" already exists!`);
            return; // Stops the saving process
        }

        // 4. Create the data object
        const youthData = {
            id: Date.now(),
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            age: document.getElementById('age').value,
            birthdate: document.getElementById('birthdate').value,
            sex: document.getElementById('sex').value,
            classification: document.getElementById('classification').value,
            contact: document.getElementById('contact').value,
            address: `${document.getElementById('purok').value}, ${document.getElementById('barangay').value}`
            // Add other fields as needed based on your HTML
        };

        // 5. Save and Refresh
        existingRecords.push(youthData);
        localStorage.setItem('kkYouthProfiles', JSON.stringify(existingRecords));

        alert("Youth profile registered successfully!");
        addYouthForm.reset();
        displayYouthRecords(); // Refresh the table
        
        // Return to the list view
        if(btnBackToList) btnBackToList.click();
    });
}

// Function to display records in your table
function displayYouthRecords() {
    const tableBody = document.getElementById('youth-list');
    if (!tableBody) return;

    // 1. Get current values from the UI
    const searchVal = document.querySelector('.search-container input').value.toLowerCase();
    const statusVal = document.querySelector('.status-select').value; 
    
    // 2. Get data from storage
    const records = JSON.parse(localStorage.getItem('kkYouthProfiles')) || [];
    tableBody.innerHTML = ''; 

    // 3. Apply combined filtering
    const filtered = records.filter(profile => {
        const fullName = `${profile.firstName} ${profile.middleName || ""} ${profile.lastName}`.toLowerCase();
        
        // Check text match
        const matchesSearch = fullName.includes(searchVal);

        // Check dropdown match
        let matchesStatus = true;
        if (statusVal === "ISY") {
            matchesStatus = profile.classification === "In School Youth";
        } else if (statusVal === "OSY") {
            matchesStatus = profile.classification === "Out of School Youth";
        } else if (statusVal === "Working Youth") {
            matchesStatus = profile.classification === "Working Youth";
        }

        return matchesSearch && matchesStatus;
    });


    // --- ADD THIS PART HERE ---
    const countText = document.querySelector('.filter-card p') || document.querySelector('p[style*="color: #666"]');
    if (countText) {
        countText.innerText = `Showing ${filtered.length} of ${allRecords.length} profiles`;
    }
    // ---------------------------

    

    // 5. Render the filtered results
    filtered.forEach(profile => {
        const row = `
            <tr>
                <td>${profile.firstName} ${profile.middleName ? profile.middleName + ' ' : ''}${profile.lastName}</td>
                <td>${profile.age}</td>
                <td>${profile.sex}</td>
                <td><span class="status-badge">${profile.classification}</span></td>
                <td>${profile.address}</td>
                <td>${profile.contact}</td>
                <td>
                    <button onclick="deleteProfile(${profile.id})" class="btn-delete" style="color: #e03131; border: none; background: none; cursor: pointer;">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

displayYouthRecords();


// --- Search Functionality ---
// 1. Add the missing listener for the dropdown
const statusSelect = document.querySelector('.status-select');
if (statusSelect) {
    statusSelect.addEventListener('change', () => {
        displayYouthRecords(); // Re-filter when dropdown changes
    });
}

// 2. Update your existing Search Listener to use displayYouthRecords
if (searchInput) {
    searchInput.addEventListener('input', () => {
        displayYouthRecords(); // Re-filter when typing
    });
}

// 3. Use this consolidated function (Replace your current displayYouthRecords)
function displayYouthRecords() {
    const tableBody = document.getElementById('youth-list');
    if (!tableBody) return;

    // Get current values from BOTH inputs
    const searchVal = document.getElementById('search-youth').value.toLowerCase();
    const statusVal = document.querySelector('.status-select').value; 
    
    const records = JSON.parse(localStorage.getItem('kkYouthProfiles')) || [];
    tableBody.innerHTML = ''; 

    const filtered = records.filter(profile => {
        const fullName = `${profile.firstName} ${profile.middleName || ""} ${profile.lastName}`.toLowerCase();
        
        // Check Name Match
        const matchesSearch = fullName.includes(searchVal);

        // Check Status Match
        let matchesStatus = true;
        if (statusVal === "ISY") {
            matchesStatus = profile.classification === "In School Youth";
        } else if (statusVal === "OSY") {
            matchesStatus = profile.classification === "Out of School Youth";
        } else if (statusVal === "Working Youth") {
            matchesStatus = profile.classification === "Working Youth";
        }

        return matchesSearch && matchesStatus; // Must match BOTH
    });

    // Render the final filtered list
    filtered.forEach(profile => {
        const row = `
            <tr>
                <td>${profile.firstName} ${profile.middleName ? profile.middleName + ' ' : ''}${profile.lastName}</td>
                <td>${profile.age}</td>
                <td>${profile.sex}</td>
                <td><span class="status-badge">${profile.classification}</span></td>
                <td>${profile.address}</td>
                <td>${profile.contact}</td>
                <td>
                    <button onclick="deleteProfile(${profile.id})" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}


}); // End of DOMContentLoaded