const API_KEY = "e3c160b452fd060bf33ae2b5daf7ad97"

const onGeoOk = (position) => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json()
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = `Weather: ${data.weather[0].main}
            Temp: ${data.main.temp}`
    }))
}

const onGeoError = () => {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)