const container = document.querySelector('.container');


container.style.cssText = "display: grid; grid-template-columns: auto auto auto; background-color: dodgerblue; padding: 10px;";



for (let i = 0; i < 16; i++) {
    const grid = document.createElement('div')
    grid.style.cssText = "background-color: #f1f1f1; border: 1px solid black; padding: 10px; font-size: 30px; text-align: center;"
    container.appendChild(grid);
}





