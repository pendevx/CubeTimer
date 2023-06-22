window.onload = e => {
    var time = document.getElementById("time");
}

var space_pressed = false;
var start_running = false;

window.addEventListener("keypress", e => {
    if (space_pressed) {
        return;
    }

    const key = e.key;
    if (key != " ") {
        return;
    }

    space_pressed = true;
    time.style.color = "red";

    setTimeout(() => {
        
    }, 1000);
});

window.addEventListener("keyup", e => {
    time.style.color = "white";
    space_pressed = false;
});
