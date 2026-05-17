let currentNode = null;

export function initEditMemberModal() {
    const modal = document.getElementById("edit-member-modal");
    const form = document.getElementById("edit-member-form");

    // OPEN MODAL (called from onclick in HTML)
    window.openEditModal = (icon) => {
        currentNode = icon.closest(".member-node");

        const name = currentNode.querySelector(".org-name").value;
        const role = currentNode.querySelector(".org-role").textContent;

        document.getElementById("edit-member-name").value = name;
        document.getElementById("edit-member-position").value = role;

        modal.style.display = "flex";
    };

    // CLOSE MODAL
    const close = () => modal.style.display = "none";

    document.getElementById("close-modal")?.addEventListener("click", close);
    document.getElementById("btn-cancel-edit")?.addEventListener("click", close);

    // SAVE CHANGES
    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!currentNode) return;

        const newName = document.getElementById("edit-member-name").value;
        const newRole = document.getElementById("edit-member-position").value;

        currentNode.querySelector(".org-name").value = newName;
        currentNode.querySelector(".org-role").textContent = newRole;

        close();
    });
}