/*const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null

const trafficLight = (event) => {
    stopAuto();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2){
    colorIndex++
}
    else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAuto = () => {
    clearInterval (intervalId)
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);

*/

const semaforo_left = document.getElementById('img');
const semaforo_right = document.getElementById('img2');

const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
const auto = document.getElementById('automatic');

let intervalId = null;

buttonLeft.addEventListener('click', () => {
    console.log("Clicou left");
    turnOff.left();
}); 

buttonRight.addEventListener('click', () => {
    console.log("click right")
    turnOff.right();
});

const turnOff = {
    left: () => {
    semaforo_left.src = './img/amarelo.png';

    setTimeout(() => {
        semaforo_left.src = './img/vermelho.png';
        semaforo_right.src = './img/verde.png';
    }, 1000);
    },
    right: () => {
    semaforo_right.src = './img/amarelo.png';

    setTimeout(() => {
            semaforo_left.src = './img/verde.png';
            semaforo_right.src = './img/vermelho.png';
    }, 1000);
    }
}



