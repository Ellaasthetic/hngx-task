let date = new Date();
let utcTime = date.toLocaleString('en-US', { timeZone: 'UTC'});
console.log(utcTime);

let hours = date.getHours();
let minutes = date.getMinutes();
let miliseconds = date.getMilliseconds();

let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let day = days[date.getDay()];

//document.querySelector("#currentDayOfTheWeek").innerHTML = `${day}`;
//document.querySelector("#currentUTCTime").innerHTML = `${hours}:${minutes}`;

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `${day}`;
document.querySelector('[data-testid="currentUTCTime"]').innerHTML = `${hours}:${minutes}:${miliseconds}`;