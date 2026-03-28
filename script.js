const container = document.querySelector('.container');
const newGrid = document.querySelector('.newGrid');

container.style.cssText = "display: flex; flex-wrap: wrap; background-color: black; padding: 10px;";

function getRandomNumber(rainbow){
        return rainbow = Math.floor(Math.random() * 256);
};

 
for (let i = 0; i < 256; i++) {

    const grid = document.createElement('div')
    grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #f1f1f1; border: 1px solid black; font-size: 30px; text-align: center;"
    container.appendChild(grid);

    
    let darken = 0;


    grid.addEventListener('mouseover', () => {
        grid.style.cssText = `opacity: ${1 - (darken * 0.1)}; background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}); box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; border: 1px solid black; font-size: 30px; text-align: center;`
        darken++;
    });
}


newGrid.addEventListener('click', () => {
    createGrid();
    
})

function createGrid() {
    container.replaceChildren();
    let userInput = prompt('Create New Grid\nHow many squares? : ');
    console.log(userInput);

    let convertedTotal = Number(userInput);
    const totalGrid = convertedTotal * convertedTotal;
    console.log(totalGrid);
 

for (let i = 0; i < totalGrid; i++) {
    const grid = document.createElement('div')
    let size = 100 / convertedTotal + '%'; 
    grid.style.cssText = `box-sizing: border-box; width: ${size}; aspect-ratio: 1/1; background-color: #f1f1f1; border: 1px solid black; font-size: 30px; text-align: center;`
    container.appendChild(grid);

    grid.addEventListener('mouseover', () => {

        grid.style.cssText = `box-sizing: border-box; width: ${size}; aspect-ratio: 1/1; background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}); border: 1px solid black; font-size: 30px; text-align: center;`
        });
    }
}












