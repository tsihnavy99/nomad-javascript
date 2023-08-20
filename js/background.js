const images = ["sky1.jpg", "sky2.jpg", "sky3.jpg", "sky4.jpg", "sky5.jpg"]

const chosenImage = `img/${images[Math.floor(Math.random()*images.length)]}`

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

// document.body.appendChild(bgImage)
document.body.style.background = `url(${chosenImage}) no-repeat center`
document.body.style.backgroundSize = "cover"