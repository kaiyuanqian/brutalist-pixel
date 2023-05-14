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
            square.style.padding = '0.1vh';
            square.style.margin = 0;
            square.style.border = 0;
            square.style.width = '5vh';
            square.style.height = '5vh';
            square.style.boxShadow = 'inset 0 0 0 0.1vh black';

            square.addEventListener('mouseover', () => {
                square.style.boxShadow = 'inset 0 0 0 0.1vh #FFD93D';
                
            });
            square.addEventListener('mouseout', () => {
                const gridStatus = document.querySelector('.gridlines');
                if (gridStatus.classList.contains('on')) {
                    square.style.boxShadow = 'inset 0 0 0 0.1vh black';
                } else {
                    square.style.boxShadow = 'none';
                }
                
            });
            row.appendChild(square);
        }
    }
}

function toggleErase() {
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

function toggleGrid() {
    const gridButton = document.querySelector('.gridlines');
    if (gridButton.classList.contains('on')) {
        gridButton.classList.remove('on');

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.style.boxShadow = 'none');
    } else {
        gridButton.classList.add('on');

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.style.boxShadow = 'inset 0 0 0 0.1vh black');
    }
}

makeGrid();

const erase = document.querySelector('.erase');
erase.addEventListener('click', toggleErase);

const gridButton = document.querySelector('.gridlines');
gridButton.addEventListener('click', toggleGrid);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mousedown', () => {
    square.style.backgroundColor = 'black';
}));
squares.forEach(square => square.addEventListener('mouseenter', () => {
if (isMouseDown) {
    square.style.backgroundColor = 'black';
}
}));