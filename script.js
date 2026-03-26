const container = document.querySelector('.container');
const newGrid = document.querySelector('.newGrid');



container.style.cssText = "display: flex; flex-wrap: wrap; background-color: dodgerblue; padding: 10px;";

let defaultState = 'on';

if (defaultState == 'on') {
    for (let i = 0; i < 256; i++) {
        const grid = document.createElement('div')
        grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #f1f1f1; border: 1px solid black; font-size: 30px; text-align: center;"
        container.appendChild(grid);


        grid.addEventListener('mouseover', () => {
            grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #fa2f4a; border: 1px solid black; font-size: 30px; text-align: center;"
    
            });
        }
    }
else if (defaultState == 'off') {
    console.log('placeholder');
}




newGrid.addEventListener('click', () => {
    createGrid();
    defaultState = 'off';
})


function createGrid() {
    let width = prompt('Create New Grid\nWidth: ');
    let height = prompt('Create New Grid\nHeight: ');
    let totalGrid = width + height;

    console.log(width);
    console.log(height);

for (let i = 0; i < totalGrid; i++) {
    const grid = document.createElement('div')
    grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #f1f1f1; border: 1px solid black; font-size: 30px; text-align: center;"
    container.appendChild(grid);


    grid.addEventListener('mouseover', () => {
        grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #fa2f4a; border: 1px solid black; font-size: 30px; text-align: center;"
  
        });
    }
}












