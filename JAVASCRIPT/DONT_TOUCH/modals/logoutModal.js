export function initLogoutModal() {
    const modal = document.getElementById("logoutModal");

    document.getElementById("openModal")?.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    document.getElementById("cancelBtn")?.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.getElementById("confirmBtn")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}