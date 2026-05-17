import { getYouth } from "./youthStorage.js";
import { initYouthSearch } from "./youthSearch.js";

export function initYouthTable() {
    initYouthSearch(renderYouthTable);
    renderYouthTable();
}



export function renderYouthTable() {
    const table = document.getElementById("youth-list");
    if (!table) return;

    const search = document.getElementById("search-youth")?.value.toLowerCase() || "";
    const status = document.querySelector(".status-select")?.value || "All";

    const data = getYouth();

    const filtered = data.filter(d => {
        const name = `${d.firstName} ${d.lastName}`.toLowerCase();
        const matchName = name.includes(search);

        let matchStatus = true;
        if (status === "ISY") matchStatus = d.classification === "In School Youth";
        if (status === "OSY") matchStatus = d.classification === "Out of School Youth";

        return matchName && matchStatus;
    });

    table.innerHTML = filtered.map(d => `
        <tr>
            <td>${d.firstName} ${d.lastName}</td>
            <td>${d.age}</td>
            <td>${d.sex}</td>
            <td>${d.classification}</td>
            <td>${d.address}</td>
            <td>${d.contact}</td>
        </tr>
    `).join("");
}