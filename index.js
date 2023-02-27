let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let time = true;

function stpwtch() {
    if (time == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        milisec = parseInt(milisec);

        milisec = milisec + 1;
        

        if (milisec == 100) {
            sec = sec + 1;
            milisec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            milisec = 0;
            sec = 0;

        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            milisec = 0;
            sec = 0;
        }   
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        document.getElementById("stopwatch").innerHTML = hr + " : " + min + " : " + sec + " : " + milisec;

        setTimeout("stpwtch()", 10);
    }
}




function startTimer() {
    if (time == true) {
        time = false;
        stpwtch();
    }
}
function stopTimer() {
    if (time == false) {
        time = true;
    }
}
function resetTimer() {
        time = true;
        document.getElementById("stopwatch").innerHTML = "00:00:00:00";
        hr = 0;
        min = 0;
        sec = 0;
        milisec = 0;
}