const KEY = "kkYouthProfiles";

export function getYouth() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveYouth(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}