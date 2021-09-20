const board = document.querySelector('#board');

let squareNumber = 500;

const colors = ['red','blue','white','green','yellow','pink','purple']

for (let i = 0; i < squareNumber; i++) {
    let square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })


    board.appendChild(square)
}


function setColor(element) {
    let color = randomColor();
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}`
}


function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
    let color = Math.floor(Math.random() * colors.length)
    return colors[color]
}