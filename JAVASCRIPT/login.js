import AuthAPI from "./API_CALLS/authApi.js";

const loginForm = document.getElementById("loginForm"); // FIXED
const username = document.getElementById("user");
const password = document.getElementById("pass");
const rememberUser = document.getElementById("remember_user");

const loginButton = loginForm.querySelector("button[type='submit']");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
        username: username.value.trim(),
        password: password.value.trim()
    };

    try {
        // Loading state
        if (loginButton) {
            loginButton.disabled = true;
            loginButton.textContent = "Logging in...";
        }

        const response = await AuthAPI.login(userData);

        // Handle API error (from apiRequest wrapper)
        if (response?.success === false) {
            alert(response.error || "Login failed");
            return;
        }

        // Remember me handling
        if (!rememberUser.checked) {
            const access = localStorage.getItem("access_token");
            const refresh = localStorage.getItem("refresh_token");

            if (access && refresh) {
                sessionStorage.setItem("access_token", access);
                sessionStorage.setItem("refresh_token", refresh);

                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
            }
        }

        // Redirect after login
        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("Login failed:", error);
        alert("Invalid username or password");
    } finally {
        // Reset button state
        if (loginButton) {
            loginButton.disabled = false;
            loginButton.textContent = "Login";
        }
    }
});