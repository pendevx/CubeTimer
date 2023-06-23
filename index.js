window.onload = e => {
    var time = document.getElementById("time");
}

let spaceBeingPressed = false;
let isTiming = false;
let timerCounter;
let startTime;

const formatTimeFromMilliseconds = milliseconds => {
    var totalSeconds = Math.floor(milliseconds / 1000);
    var totalMinutes = Math.floor(totalSeconds / 60);
  
    var remainingMilliseconds = (milliseconds % 1000).toString().padStart(3, '0');
    var remainingSeconds = (totalSeconds % 60).toString().padStart(2, '0');
  
    return totalMinutes + ':' + remainingSeconds + '.' + remainingMilliseconds;
}

const runTimer = () => {
    startTime = Date.now();

    timerCounter = setInterval(() => {
        const currTime = Date.now();
        time.innerHTML = formatTimeFromMilliseconds(currTime - startTime);
    }, 1);
}

const stopTimer = () => {
    if (timerCounter) {
        clearInterval(timerCounter);
        timerCounter = null;
    }
}

window.addEventListener("keydown", e => {
    const key = e.key;
    if (key === "Escape" && startTime && !timerCounter) {
        time.innerHTML = "0:00.00";
        startTime = null;
    }
})

window.addEventListener("keypress", e => {
    const key = e.key;
    if (key != " " || spaceBeingPressed) { // only respond to the space button and do not re-run this hook if the space is already being pressed
        return;
    }

    // event types:
    // timer isnt started: start timer, hold 3s then run
    // timer is started: any press will kill the timer


    // timer is started:
    // check if timer is started
    // if timer is started then stop the timer

    if (timerCounter) {
        stopTimer();
        return;
    }

    spaceBeingPressed = true;
    time.style.color = "red";

    setTimeout(() => {
        if (!spaceBeingPressed) {
            return;
        }

        time.style.color = "green";
        isTiming = true;
    }, 500);
});

window.addEventListener("keyup", e => {
    if (isTiming) {
        console.log("ya");
        runTimer();
    }

    time.style.color = "white";
    spaceBeingPressed = false;
    isTiming = false;
});
