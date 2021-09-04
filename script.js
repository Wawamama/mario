const mario = document.querySelector('#player')

let posX = mario.getBoundingClientRect().left
let posY = mario.getBoundingClientRect().top

const marioWidth = mario.getBoundingClientRect().width
const marioHeight = mario.getBoundingClientRect().height

const updatePosition = () => {
    position = mario.getBoundingClientRect()
    posX = position.left
    posY = position.top
}

const move = (direction) => {
    if (direction === 'up') {
        mario.src = './images/mario-back-1.png'
        mario.style.top = `${posY-50}px`
    }
    if (direction === 'right') {
        mario.src = './images/mario-right-1.png'
        mario.style.left = `${posX+ marioWidth +50}px`
    }
    if (direction === 'down') {
        mario.src = './images/mario-front-1.png'
        mario.style.top = `${posY + marioHeight +50}px`
    }
    if (direction === 'left') {
        mario.src = './images/mario-left-1.png'
        mario.style.left = `${posX-50}px`
    }
}

window.addEventListener('keydown', (e) => {
    updatePosition()
   switch(e.code) {
       case 'ArrowUp': 
            console.log('up up')
            move('up')
            break;
        case 'ArrowRight': 
            move('right')
            break;
        case 'ArrowDown': 
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break
   }
})