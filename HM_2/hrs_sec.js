// script to calculate hours to seconds

let hours = prompt("Inser hours")
let seconds = 0
error = false

if (hours === '') {
    alert('No valid input'), error = true
} else if (hours) {
    seconds = Number(hours) * 3600
    alert(seconds + " seconds in hour")
}
