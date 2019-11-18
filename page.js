const container = document.querySelector('.container');
let gridsize = document.getElementById('gridsize').value;
let resizeButton = document.getElementById('submitbutton')
let resetButton = document.getElementById('resetbutton')



function makeGrid(gridAmount) {

  for (var i = 0; i < gridAmount; i++) {
    const row = document.createElement('div');
    container.appendChild(row);


    for (var j = 0; j < gridAmount; j++) {
      const cell = document.createElement('div')
      cell.setAttribute('id', 'square')
      cell.classList.add('cell')
      cell.addEventListener('mouseover', handleOnCellMouseOver)
      cell.style.width = `${600 / gridAmount}px`
      cell.style.height = `${600 / gridAmount}px`
      row.appendChild(cell)
    }
  }
}

const handleOnCellMouseOver = e =>{
  const color = getColor();
  e.target.style.background = color;

}


makeGrid(gridsize);


function getColor(event) {
    let square = document.querySelectorAll('cell')
    let black = `rgb(0,0,0)`
    let white = `rgb(255,255,255)`
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);



    if (document.getElementById('color').checked) {
      return `rgb(${red},${green},${blue})`
    }else if (document.getElementById('black').checked){
      return 'rgb(0,0,0)'
    }
}

getColor();



resetButton.addEventListener('click', function reset() {
  var allCells = document.getElementById('square');
  for (var i = 0; i < allCells.length; i++) {
    allCells.style.backgroundColor = 'white'
  }
})

console.log(gridsize);
