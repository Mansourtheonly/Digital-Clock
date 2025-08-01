function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelectorAll('.time-element')[0].textContent = hours;
    document.querySelectorAll('.time-element')[1].textContent = minutes;
    document.querySelectorAll('.time-element')[2].textContent = seconds;
}



setInterval(updateClock,1000);