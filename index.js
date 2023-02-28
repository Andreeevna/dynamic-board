const bord = document.querySelector('#board');
const colors = ['aqua', 'darkorchid', 'deeppink', 'lime', 'darkorange', 'indigo', 'yellow']

const SQUARES_NUMBER = 1008;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    bord.append(square);

    square.addEventListener('mouseover', () => {
        setColor(square)

    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
}

function setColor(el) {
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = ` 0 0 5px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = ` 0 0 5px #000`

}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index]
}