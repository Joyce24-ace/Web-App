export function initSettings() {
    const guide = document.getElementById("tab-guide");
    const faq = document.getElementById("tab-faq");

    const guideContent = document.getElementById("guide-content");
    const faqContent = document.getElementById("faq-content");

    guide?.addEventListener("click", () => {
        guideContent.style.display = "block";
        faqContent.style.display = "none";
    });

    faq?.addEventListener("click", () => {
        guideContent.style.display = "none";
        faqContent.style.display = "block";
    });
}