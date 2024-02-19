let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let errorMsgHours = "Please enter a valid number of hours.";
let errorMsgMinutes = "Please enter a valid number of Minutes.";



function convertToSeconds() {
    let minutesInput = minutesInputEl.value;
    let hoursInput = hoursInputEl.value;

    if (hoursInput === "") {
        errorMsgEl.textContent = errorMsgHours;
    }
    if (minutesInput === "") {
        errorMsgEl.textContent = errorMsgMinutes;
    } else if ((parseInt(hoursInput) > 0) && (parseInt(minutesInput) > 0)) {
        let timeInSeconds = (parseInt(hoursInput) * 3600) + (parseInt(minutesInput) * 60);
        console.log(timeInSeconds);
        timeInSecondsEl.textContent = timeInSeconds + "s";
        timeInSecondsEl.classList.add("time-in-seconds");
        errorMsgEl.textContent = "";


    }



}

convertBtnEl.addEventListener("click", convertToSeconds);