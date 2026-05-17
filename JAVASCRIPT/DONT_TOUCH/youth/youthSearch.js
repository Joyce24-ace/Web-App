export function initYouthSearch(onFilterChange) {
    const searchInput = document.getElementById("search-youth");
    const statusSelect = document.querySelector(".status-select");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            onFilterChange();
        });
    }

    if (statusSelect) {
        statusSelect.addEventListener("change", () => {
            onFilterChange();
        });
    }
}