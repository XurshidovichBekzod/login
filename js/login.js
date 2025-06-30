const API_URL = "https://dummyjson.com"
const formEl = document.querySelector(".form")
const inputUsernameEl = document.querySelector(".form__username")
const inputPasswordEl = document.querySelector(".form__password")
const messageEl = document.querySelector(".message")

formEl.addEventListener("submit", (e)=> {
    e.preventDefault()
    let user = {
    username: inputUsernameEl.value,
    password: inputPasswordEl.value,
    }
    fetch( `${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(!res.ok){
            throw new Error("Username or Password is incorrect")
        }
        return res.json()
    })
    .then(data => {
        localStorage.setItem("accessToken", data.accessToken)
        open("/profile.html", "_self")
    })
    .catch(err => {
        messageEl.textContent = err.message
    })
})