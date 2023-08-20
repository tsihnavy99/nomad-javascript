const clock = document.querySelector("h2#clock")
const today = document.querySelector("#time span")
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const getClock = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    today.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()} ${day[date.getDay()]}`
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)