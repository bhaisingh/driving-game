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
    let newPos = parseInt(this.carPosX) + 8;
    this.carPosX = newPos + 'px';
    this.carDirection.style.left = this.carPosX;
    
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

document.addEventListener('keydown', function () {
    if (event.code === 'Space') { 
        timerID = setInterval(timer, 16);
    } else {
        user.turnCar(event);
    }
});

document.addEventListener('DOMContentLoader', function () {
    user.startCar();
});