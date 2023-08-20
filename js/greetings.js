const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const onLoginSubmit = (e) => {
    e.preventDefault()

    const username = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)

    paintGreetings(username)

    localStorage.setItem(USERNAME_KEY, username)
}

loginForm.addEventListener("submit", onLoginSubmit)

const paintGreetings = (username) => {
    document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}