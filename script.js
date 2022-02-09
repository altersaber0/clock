const hourContainer = document.querySelector(".hour-container")
const minuteContainer = document.querySelector(".minute-container")
const secondContainer = document.querySelector(".second-container")

setInterval(() => {
    const day = new Date()

    // converting time to circle degrees
    const hourDeg = day.getHours() * 30
    const minDeg = day.getMinutes() * 6
    const secDeg = day.getSeconds() * 6

    // updating rotateZ every interval tick
    hourContainer.style.transform = `rotateZ(${hourDeg+(minDeg/12)}deg)`
    minuteContainer.style.transform = `rotateZ(${minDeg}deg)`
    secondContainer.style.transform = `rotateZ(${secDeg}deg)`
})