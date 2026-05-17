import { initNavigation } from "./navigation.js";
import { initDashboard } from "./dashboard.js";
import { initYouthForm } from "./youth/youthForm.js";
import { initYouthTable } from "./youth/youthTable.js";
import { initEvents } from "./events/eventsCore.js";
import { initSettings } from "./settings/settingsTabs.js";
import { initDarkMode } from "./settings/darkMode.js";
import { initFAQ } from "./settings/faq.js";
import { initLogoutModal } from "./modals/logoutModal.js";
import { initOrgChart } from "./organization/orgChart.js";
import { initEditMemberModal } from "./modals/editMemberModal.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initDashboard();
    initYouthForm();
    initYouthTable();
    initEvents();
    initSettings();
    initDarkMode();
    initFAQ();
    initLogoutModal();
    initOrgChart();
    initEditMemberModal();

});