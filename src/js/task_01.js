// Задание 1. Переключатель цветов
const body = document.querySelector('body');
let interval;
let executed = false;
const numbers = [];

body.insertAdjacentHTML('beforeend', '<button type="button" data-action="start">Start</button>');
body.insertAdjacentHTML('beforeend', '<button type="button" data-action="stop">Stop</button>');

const start = document.querySelectorAll('button')[0];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);


};


const randomColor = () => {
    const colors = [
        'red',
        'green',
        'violet',
        'gray',
        'blue',
        'yellow',
    ];
    let num = randomIntegerFromInterval(0, colors.length);
    body.style.backgroundColor = colors[num];
};


const setBtnAbility = (btn) => {
    if(btn === 'start') {
        executed = false;
        start.toggleAttribute('disabled');
    }else if (btn === 'stop'){
        if (!executed) {
            executed = true;
            start.toggleAttribute('disabled');
        }
    }
};

// const setBtnAbility = (btn) => {
//     if (btn === 'start') {
//         start.setAttribute('disabled', 'disabled');
//     } else if (btn === 'stop') {
//         start.removeAttribute('disabled', 'disabled');
//     }
// };


body.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'start') {
        interval = setInterval(() => {
            randomColor();
        }, 1000);
    } else if (event.target.dataset.action === 'stop') {
        clearInterval(interval);
    }
    setBtnAbility(event.target.dataset.action);
});