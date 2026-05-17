const BASE_URL = "http://127.0.0.1:8000/api";


// ================================
// TOKEN HELPERS
// ================================

function getAccessToken() {
    return localStorage.getItem("access_token");
}

function setTokens(access, refresh) {
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
}

function clearTokens() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
}


// ================================
// GENERIC REQUEST FUNCTION
// ================================

async function apiRequest(
    endpoint,
    {
        method = "GET",
        data = null,
        requiresAuth = true
    } = {}
) {

    try {

        const headers = {
            "Content-Type": "application/json"
        };

        // Attach JWT Token
        if (requiresAuth) {

            const token = getAccessToken();

            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
        }

        const options = {
            method,
            headers
        };

        // Attach body if data exists
        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(
            `${BASE_URL}${endpoint}`,
            options
        );

        // Unauthorized
        if (response.status === 401) {

            clearTokens();

            throw new Error("Unauthorized");
        }

        // Other HTTP Errors
        if (!response.ok) {

            const errorText = await response.text();

            throw new Error(
                `HTTP ${response.status}: ${errorText}`
            );
        }

        // Handle empty responses
        const text = await response.text();

        return text ? JSON.parse(text) : null;

    } catch (error) {

        console.error(
            `[API ERROR] ${method} ${endpoint}`,
            error
        );

        return {
            success: false,
            error: error.message
        };
    }
}


export {
    apiRequest,
    setTokens,
    clearTokens,
    getAccessToken
};