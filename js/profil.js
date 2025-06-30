const API_URL = "https://dummyjson.com";
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

function checkToken() {
    const token = localStorage.getItem("accessToken");
    if (token) {
        fetch(`${API_URL}/auth/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Token is fake");
            }
            return res.json();
        })
        .then(data => {
            profileName.textContent = `${data.firstName} ${data.lastName}`;
            profileEmail.textContent = data.email;
        })
        .catch(err => {
            localStorage.removeItem("accessToken");
            return window.location.replace("../page/login.html");
        });
    } else {
        return window.location.replace("../page/login.html");
    }
}
window.onload = () => {
    checkToken();
};
function logout() {
    localStorage.removeItem("accessToken");
    open("../page/login.html", "_self");
}