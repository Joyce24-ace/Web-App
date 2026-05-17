import { getYouth, saveYouth } from "./youthStorage.js";
import { renderYouthTable } from "./youthTable.js";

export function initYouthForm() {
    const form = document.getElementById("add-youth-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const records = getYouth();

        const firstName = document.getElementById("firstName").value.trim();
        const middleName = document.getElementById("middleName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        const exists = records.some(r =>
            r.firstName === firstName &&
            r.middleName === middleName &&
            r.lastName === lastName
        );

        if (exists) {
            alert("Duplicate record!");
            return;
        }

        records.push({
            id: Date.now(),
            firstName,
            middleName,
            lastName,
            age: document.getElementById("age").value,
            sex: document.getElementById("sex").value,
            classification: document.getElementById("classification").value,
            contact: document.getElementById("contact").value,
            address: document.getElementById("barangay").value
        });

        saveYouth(records);

        form.reset();
        renderYouthTable();
    });
}