const $carDirection = document.querySelector('.car');

function Driver(carDirection) {
    this.carDirection = carDirection;
    this.carPosX = 0;
    this.carPosY = 0;
}

Driver.prototype.turnCar = function (event) {
    switch (event.key) {
        case 'ArrowRight':
            this.carDirection.setAttribute('class', 'car right');
            break;
        case 'ArrowDown':
            this.carDirection.setAttribute('class', 'car down');
            break;
        case 'ArrowLeft':
            this.carDirection.setAttribute('class', 'car left');
            break;
        case 'ArrowUp':
            this.carDirection.setAttribute('class', 'car up');
            break;
        default :
            this.carDirection.setAttribute('class', 'car right');
            break;
    }
}

Driver.prototype.startCar = function () {
    this.carPosX = this.carDirection.style.left;
    this.carPosY = this.carDirection.style.top;
}
 
Driver.prototype.drive = function () {
    let currentDirection = this.carDirection.getAttribute('class');
    let newPos = 0;
    switch (currentDirection) {
        case 'car right':
            newPos = parseInt(this.carPosX) + 8;
            this.carPosX = newPos + 'px';
            this.carDirection.style.left = this.carPosX;
            break;
        case 'car down':
            newPos = parseInt(this.carPosY) + 8;
            this.carPosY = newPos + 'px';
            this.carDirection.style.top = this.carPosY;
            break;
        case 'car left':
            newPos = parseInt(this.carPosX) - 8;
            this.carPosX = newPos + 'px';
            this.carDirection.style.left = this.carPosX;
            break;
        case 'car up':
            newPos = parseInt(this.carPosY) - 8;
            this.carPosY = newPos + 'px';
            this.carDirection.style.top = this.carPosY;
            break;
        default:
            newPos = parseInt(this.carPosX) + 8;
            this.carPosX = newPos + 'px';
            this.carDirection.style.left = this.carPosX;
            break;
    }
        
    return newPos;
}


const timer = function () {
    let vehiclePos = user.drive();
    if (vehiclePos >= screen.width + 150) {
        clearInterval(timerID);
    }
}

const user = new Driver($carDirection);
let timerID = null;
let startCounter = true;

document.addEventListener('keydown', function () {
    if (event.code === 'Space') {
        if (startCounter) { 
            timerID = setInterval(timer, 16);
            startCounter = false;
        } else {
            clearInterval(timerID);
            startCounter = true;
        }
    } else {
        user.turnCar(event);
    }
});

document.addEventListener('DOMContentLoader', function () {
    user.startCar();
});