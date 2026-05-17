export function initDashboard() {
    loadStats();
    initCharts();
}

function loadStats() {
    const data = JSON.parse(localStorage.getItem("kkYouthProfiles")) || [];

    const total = data.length;
    const isy = data.filter(d => d.classification === "In School Youth").length;
    const osy = data.filter(d => d.classification === "Out of School Youth").length;
    const working = data.filter(d => d.classification === "Working Youth").length;

    set("total-youth", total);
    set("isy-count", isy);
    set("osy-count", osy);
    set("working-count", working);
}

function set(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function initCharts() {
    const ctx1 = document.getElementById("ageChart");
    const ctx2 = document.getElementById("statusChart");
    const ctx3 = document.getElementById("genderChart");

    if (!ctx1 || !ctx2 || !ctx3) return;

    new Chart(ctx1, { type: "bar", data: { labels: ["10-15","16-18","19-21","22+"], datasets: [{ data: [5,10,20,8] }] } });

    new Chart(ctx2, { type: "pie", data: { labels: ["ISY","OSY","Working"], datasets: [{ data: [10,5,8] }] } });

    new Chart(ctx3, { type: "doughnut", data: { labels: ["Male","Female"], datasets: [{ data: [12,11] }] } });
}