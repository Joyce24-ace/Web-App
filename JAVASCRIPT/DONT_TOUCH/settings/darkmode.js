export function initDarkMode() {
    const toggle = document.getElementById("dark-mode-toggle");

    toggle?.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
    });
}