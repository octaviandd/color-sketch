const container = document.querySelector('.container');
let resizeButton = document.getElementById('submitbutton')
let resetButton = document.getElementById('resetbutton')
let gridsize = 16

//-----------------------------------------------------------------------------

// Creating the grid
function makeGrid(gridAmount) {                                                   //Funtion to create grid

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

//-----------------------------------------------------------------------------

const handleOnCellMouseOver = e =>{                                               //Funtion to set the colors of the squares to random colors
  const color = getColor();
  e.target.style.background = color;

}

//-----------------------------------------------------------------------------

makeGrid(gridsize);


function getColor(event) {                                                        //Function to set random colors
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

//-----------------------------------------------------------------------------


const clearGrid = e => {                                                           //Function to clear the grid
  var matches = document.querySelectorAll('#square')
  matches.forEach(function(square) {
    square.style.background = 'white'
  })
}

resetButton.addEventListener('click', clearGrid)

//-----------------------------------------------------------------------------

function deleteGrid() {                                                            //Function to remove the grid
  let x = document.querySelector('.container')
  while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

resizeButton.addEventListener('click', deleteGrid)

//-----------------------------------------------------------------------------

function changeGrid() {                                                           // Function to change the grid Size
  let gridsize = parseInt(prompt('What size would you like: '))
  makeGrid(gridsize)
}

resizeButton.addEventListener('click', changeGrid)
