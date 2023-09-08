
function utcTime() {
    let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    let currentTime = document.querySelector('[data-testid="currentUTCTime"]');
    const setValue = (current, val) => {	current.innerHTML = val }
    setValue(currentDay, days[new Date().getUTCDay()])
	window.setInterval(()=> {
		setValue(currentDay, days[new Date().getUTCDay()])
	}, 1000)
	const timer = () => {
		window.setInterval(() => {
			setValue(currentTime, Date.now())
			}, 100)
 	}
	timer()

}

window.addEventListener('DOMContentLoaded', (event) => { utcTime() });