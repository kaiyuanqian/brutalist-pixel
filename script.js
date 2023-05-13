var isMouseDown = false;
document.addEventListener('mousedown', () => isMouseDown = !isMouseDown);
document.addEventListener('mouseup', () => isMouseDown = !isMouseDown);

function makeGrid() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.padding = 0;
            square.style.margin = 0;
            square.style.border = '0.1vh solid black';
            square.style.width = '5vh';
            square.style.height = '5vh';

            square.addEventListener('mouseover', () => {
                square.style.border = '0.1vh solid #FFD93D';
            });
            square.addEventListener('mouseout', () => {
                square.style.border = '0.1vh solid black';
            });
            row.appendChild(square);
        }
    }
}

function toggleMode() {
    const erase = document.querySelector('.erase');
    if (erase.classList.contains('off')) {
        erase.classList.remove('off');
        erase.style.backgroundColor = '#add8e6'; 
        
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.addEventListener('mousedown', () => {
            square.style.backgroundColor = 'white';
        }));
        squares.forEach(square => square.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'white';
            }
        }));
    } else {
        erase.classList.add('off');
        erase.style.backgroundColor = '#f0f0f0'

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.addEventListener('mousedown', () => {
            square.style.backgroundColor = 'black';
        }));
        squares.forEach(square => square.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
        }));
    }
    
}

makeGrid();

const erase = document.querySelector('.erase');
erase.addEventListener('click', toggleMode);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mousedown', () => {
    square.style.backgroundColor = 'black';
}));
squares.forEach(square => square.addEventListener('mouseenter', () => {
if (isMouseDown) {
    square.style.backgroundColor = 'black';
}
}));