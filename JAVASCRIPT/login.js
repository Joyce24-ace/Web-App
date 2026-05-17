import AuthAPI from "./API_CALLS/authApi.js";

const loginForm = document.getElementById("login-form");
const username = document.getElementById("user");
const password = document.getElementById("pass");
const rememberUser = document.getElementById("remember_user");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userData = {
        username: username.value,
        password: password.value,
        remember: rememberUser.checked
    };
    try {
        const response = await AuthAPI.login(userData);
        // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
        // Handle login error
        console.error("Login failed:", error);
    }
});