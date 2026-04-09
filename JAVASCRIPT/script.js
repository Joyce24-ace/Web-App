

// This is for Hiding the pages

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.querySelector('.main-content');
    const profiles = document.getElementById('youth-profiles-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items and add to clicked one
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const text = item.innerText.trim();

            if (text.includes('Youth Profiles')) {
                dashboard.style.display = 'none'; // Hide Dashboard
                profiles.style.display = 'block'; // Show Profiles
            } else if (text.includes('Dashboard')) {
                dashboard.style.display = 'block'; // Show Dashboard
                profiles.style.display = 'none';  // Hide Profiles
            }
        });
    });
});
