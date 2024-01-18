let hr = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    let hh = date.getUTCHours() + 5;
    hh = hh >= 24 ? hh - 24 : hh; 
    let mm = date.getUTCMinutes();
    let ss = date.getUTCSeconds();
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
