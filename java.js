//sukurimas div grid 

const grid = document.getElementById('grid');
const square = document.querySelectorAll('.square');
const slider = document.getElementById('slider');
const sliderOutput = document.getElementById('sliderOutput');

let gridSize = slider.value ** 2;
let isMouseOver = false; 
let isMouseDown = false; 

function addDiv() {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
};

// langeliu spalva

grid.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('square')) {
      isMouseOver = true;
      if (isMouseOver && isMouseDown) { 
        event.target.style.backgroundColor = 'black';
      }
    }
  });
  
grid.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('square')) { 
      isMouseDown = true;
      if (isMouseOver && isMouseDown) { 
        event.target.style.backgroundColor = 'black';
      }
    }
  });
  
grid.addEventListener('mouseup', function(event) {
    isMouseDown = false; // Reset mousedown event state
  });

// langeliu skaicius
makeGrid()
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;
slider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`
    changeSize()
};

slider.addEventListener('oninput', changeSize());

function makeGrid() {
    for (i = 0; i <= slider.value ** 2; i++) {
    addDiv();
    };
};

function clearGrid() {
    grid.innerHTML = '';
};

function changeSize() {
    clearGrid()
    makeGrid()
};

console.log(slider.value)








