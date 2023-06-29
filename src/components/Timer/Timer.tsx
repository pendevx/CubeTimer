import React from "react";

const timerDefault : string = "0:00.00";

const formatTimeFromMilliseconds = (milliseconds : number) => {
    var totalSeconds = Math.floor(milliseconds / 1000);
    var totalMinutes = Math.floor(totalSeconds / 60);
  
    var remainingMilliseconds = (milliseconds % 1000).toString().padStart(3, '0');
    var remainingSeconds = (totalSeconds % 60).toString().padStart(2, '0');
  
    return totalMinutes + ':' + remainingSeconds + '.' + remainingMilliseconds;
}

function Timer() {
    const [ timer, setTimer ] = React.useState<string>(timerDefault);
    const [ timerColor, setTimerColor ] = React.useState<string>("white");
    
    let startTime : number;
    let timerCounter : number;
    let spaceBeingPressed : boolean;
    let spacePressID : number;
    let isTiming : boolean;

    const runTimer = () => {
        startTime = Date.now();

        timerCounter = setInterval(() => {
            const currTime = Date.now();
            setTimer(formatTimeFromMilliseconds(currTime - startTime));
        }, 1);
    }

    const stopTimer = () => {
        if (timerCounter) {
            clearInterval(timerCounter);
            timerCounter = NaN;
        }
    }

    React.useEffect(() => {
        const keyDownListener = (e : KeyboardEvent) => {
            const key = e.key;
            if (key === "Escape" && startTime && !timerCounter) {
                setTimer(timerDefault);
                startTime = NaN;
            }
        };

        const keyPressListener = (e : KeyboardEvent) => {
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
            setTimerColor("red");
        
            spacePressID = setTimeout(() => {
                if (!spaceBeingPressed) {
                    return;
                }
        
                setTimerColor("green");
                
                isTiming = true;
            }, 500);
        };

        const keyUpListener = () => {
            setTimerColor("white");
            
            if (spacePressID && !isTiming) {
                clearTimeout(spacePressID);
            } else if (isTiming) {
                runTimer();
            }
        
            spaceBeingPressed = false;
            isTiming = false;
        };

        document.addEventListener("keydown", keyDownListener);
        document.addEventListener("keypress", keyPressListener);
        document.addEventListener("keyup", keyUpListener);

        return () => {
            document.removeEventListener("keydown", keyDownListener);
            document.removeEventListener("keypress", keyPressListener);
            document.removeEventListener("keyup", keyUpListener);
        }
    }, []);

    return (
        <div className="timer">
            <p id="time" style={{ color: timerColor }}>{timer}</p>
        </div>
    );
}

export default Timer;