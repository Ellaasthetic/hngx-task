/*let date = new Date();
let utcTime = date.toLocaleString('en-US', { timeZone: 'UTC'});
console.log(utcTime);

let hours = date.getHours();
let minutes = date.getMinutes();
let miliseconds = date.getMilliseconds();

let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let day = days[date.getDay()];*/

//document.querySelector("#currentDayOfTheWeek").innerHTML = `${day}`;
//document.querySelector("#currentUTCTime").innerHTML = `${hours}:${minutes}`;

const hours = Math.floor(miliseconds / (1000 * 60 * 60));
const minutes =Math.floor((miliseconds % (1000 * 60 * 60))/ (1000 * 60)); 
const seconds = Math.floor((miliseconds % (1000 * 60 ))/ 1000 ); 

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `${day}`;
document.querySelector('[data-testid="currentUTCTime"]').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;