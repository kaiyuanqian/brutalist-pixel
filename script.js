function makeGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
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

function highlightSquare() {

}

makeGrid();