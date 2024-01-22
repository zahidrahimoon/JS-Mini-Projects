const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
    showTime();
});

const showTime = () => {
    const date = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' });
    const [timeString, format] = date.split(' ');

    time.innerHTML = timeString;
    timeformat.innerHTML = format;
};
