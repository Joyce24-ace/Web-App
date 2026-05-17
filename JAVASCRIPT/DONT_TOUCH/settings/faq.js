export function initFAQ() {
    document.querySelectorAll(".faq-question").forEach(q => {
        q.addEventListener("click", () => {
            const ans = q.nextElementSibling;
            ans.style.display = ans.style.display === "block" ? "none" : "block";
        });
    });
}