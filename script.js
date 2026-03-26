const container = document.querySelector('.container');


container.style.cssText = "display: flex; flex-wrap: wrap; background-color: dodgerblue; padding: 10px;";



for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div')
    grid.style.cssText = "box-sizing: border-box; width: 6.25%; aspect-ratio: 1/1; background-color: #f1f1f1; border: 1px solid black; font-size: 30px; text-align: center;"
    container.appendChild(grid);
}





