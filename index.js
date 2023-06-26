window.onload = e => {
    var time = document.getElementById("time");
}

let spaceBeingPressed = false;
let isTiming = false;
let timerCounter;
let startTime;
let spacePressID;

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

    // Space is now being pressed
    spaceBeingPressed = true;

    // Stop the timer if the timer counter is not null (timer is running)
    if (timerCounter) {
        stopTimer();
        return;
    }
    
    // Set timer color to red
    time.style.color = "red";

    spacePressID = setTimeout(() => {
        if (!spaceBeingPressed) {
            return;
        }

        time.style.color = "green";
        isTiming = true;
    }, 500);
});

window.addEventListener("keyup", e => {
    time.style.color = "white";
    
    if (spacePressID && !isTiming) {
        clearTimeout(spacePressID);
    } else if (isTiming) {
        runTimer();
    }

    spaceBeingPressed = false;
    isTiming = false;
});
