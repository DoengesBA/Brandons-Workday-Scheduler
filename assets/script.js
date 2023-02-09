$(document).ready(function() {
    console.log("Ready!");
});
    let now = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = moment().format("HH");