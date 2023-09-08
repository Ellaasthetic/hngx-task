let date = new Date();
//let utcTime = date.toLocaleString('en-US', { timeZone: 'UTC'});
let utcTime = new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (60 * 60000));
console.log(utcTime);

//let hours = date.getHours();
//let minutes = date.getMinutes();
let miliseconds = utcTime.getTime();

let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let day = days[date.getDay()];

//document.querySelector("#currentDayOfTheWeek").innerHTML = `${day}`;
//document.querySelector("#currentUTCTime").innerHTML = `${hours}:${minutes}`;
 

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `${day}`;
document.querySelector('[data-testid="currentUTCTime"]').innerHTML = `${miliseconds}`;