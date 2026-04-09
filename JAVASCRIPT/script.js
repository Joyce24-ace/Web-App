document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.querySelector('.main-content');
    const profiles = document.getElementById('youth-profiles-content');
    const addYouthView = document.getElementById('add-youth-view');

    // Buttons for navigation between table and form
    const btnAddNewYouth = document.querySelector('.btn-add-youth');
    const btnBackToList = document.getElementById('back-to-list');

    // Sidebar Navigation logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const text = item.innerText.trim();

            // Reset all views first
            dashboard.style.display = 'none';
            profiles.style.display = 'none';
            addYouthView.style.display = 'none';

            if (text.includes('Youth Profiles')) {
                profiles.style.display = 'block';
            } else if (text.includes('Dashboard')) {
                dashboard.style.display = 'block';
            }
        });
    });

    // Toggle Add Youth Form
    if (btnAddNewYouth) {
        btnAddNewYouth.addEventListener('click', () => {
            profiles.style.display = 'none';
            addYouthView.style.display = 'block';
        });
    }

    // Toggle Back to Table
    if (btnBackToList) {
        btnBackToList.addEventListener('click', () => {
            addYouthView.style.display = 'none';
            profiles.style.display = 'block';
        });
    }
});