
class Timer {
    constructor(date) {
        this.date = date;
        this.timer = document.querySelector('.timer');
        this.field = document.querySelectorAll('.field');
        this.days = document.querySelector('span[data-value="days"]');
        this.hours = document.querySelector('span[data-value="hours"]');
        this.minutes = document.querySelector('span[data-value="mins"]');
        this.seconds = document.querySelector('span[data-value="secs"]');
    }
    
    getDistance () {
        return this.date - Date.now();
    }
    getDays () { 
        return Math.floor(this.getDistance() / 1000 / 60 / 60 / 24);
    }
    getHours () {
        return Math.floor(this.getDistance() / 1000 / 60 / 60 ) % 24;
    }
    getMinutes () {
        return Math.floor(this.getDistance() / 1000 / 60) % 60;
    }
    getSeconds () {
        return Math.floor(this.getDistance() / 1000) % 60;
    }
    getTimer () {
        this.getBasicStyle();
        const timer = setInterval(() => {
            this.days.textContent = this.getDays();
            this.hours.textContent = this.getHours();
            this.minutes.textContent = this.getMinutes();
            this.seconds.textContent = this.getSeconds();
            this.clearTimer(timer);
        }, 1000);
        return timer;
    }
    clearTimer (timer) {
        if (this.getDistance() < 0) {
            clearInterval(timer);
            this.timer.innerHTML = '<span>Time is up!</span>';
        }
    }
    getBasicStyle () {
        promotion.timer.style.cssText = 'display: flex; font-size: 40px; border: solid; justify-content: space-around; width: 800px; margin: 0 auto'; 
    }

}
const finish = new Date("September 20, 2021 02:29:00");
const promotion = new Timer(finish);
promotion.getTimer();
