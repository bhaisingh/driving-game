const $carPos = document.querySelector('.car');

document.addEventListener('keydown', function () {
    switch (event.key) {
        case 'ArrowRight':
            $carPos.setAttribute('class', 'car normal');
            break;
        case 'ArrowDown':
            $carPos.setAttribute('class', 'car down');
            break;
        case 'ArrowLeft':
            $carPos.setAttribute('class', 'car left');
            break;
        case 'ArrowUp':
            $carPos.setAttribute('class', 'car up');
            break;
        default :
            $carPos.setAttribute('class', 'car normal');
            break;
    }

})