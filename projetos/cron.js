var hor = 0;
var min = 0;
var seg = 0;

var tempo = 1;
var cron;

function start() {
    cron = setInterval(timer,tempo);
}

function reset() {
    clearInterval(cron);
    hor=0;
    min=0;
    seg=0;
    document.getElementById('contador').innerText = '00:00:00';

}

function stop() {
    clearInterval(cron);
}

function timer() {
    var format = (hor < 10 ? '0' + hor : hor) + ':' + (min < 10 ? '0'+ min: min) + ':' + (seg< 10 ? '0' + seg : seg) ;
    document.getElementById('contador').innerText = format;
    seg++;
    if (seg==60) {
        seg=0;
        min++;
     if (min==60) {
        min=0;
        hor++;
    }
}
}