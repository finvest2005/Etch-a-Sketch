let currentGrid = 16;
const container = document.querySelector('.container');

function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/);
  var q = Number(parts[1]);
  var side =
    window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]];
  return side * (q / 100);
}

function changeGrid() {
  let xx = prompt('Enter new grid Size (from 2 to 100)', '16');
  let num = parseInt(xx);
  while (xx < 2 || xx > 100) {
    alert('Keep size of grid from 2 to 100');
    xx = prompt('Enter new grid Size (from 2 to 100)', '16');
    num = parseInt(xx);
  }
  container.replaceChildren();
  currentGrid = num;
  drawGrid(num);
}

function drawGrid(numberCells) {
  const button = document.querySelector('.changeGrid');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonHeight = parseFloat(getComputedStyle(button).height, 10);

  const cellW_ = Math.max(0, (windowWidth - 30) / currentGrid);
  const cellH_ = Math.max(0, (windowHeight - buttonHeight - 30) / currentGrid);

  const cellH = Math.min(cellW_, cellH_);
  const cellW = Math.min(cellW_, cellH_);

  for (let i = 1; i <= numberCells; i++) {
    const elem = document.createElement('div');
    elem.style.border = '1px solid black';
    elem.style.height = cellH.toFixed(20) + 'px';
    elem.style.display = 'flex';
    elem.style.flexDirection = 'row';
    elem.classList.add('row' + i);
    for (let j = 1; j <= numberCells; j++) {
      const elem_row = document.createElement('div');
      elem_row.classList.add('row' + i + 'col' + j);
      elem_row.style.border = '1px solid black';
      elem_row.style.width = cellW.toFixed(20) + 'px';
      elem.appendChild(elem_row);
    }
    container.appendChild(elem);
  }

  container.addEventListener('mouseover', function (e) {
    const elem = e.target;
    elem.style.backgroundColor = 'pink';
  });

  container.addEventListener('mouseout', function (e) {
    const elem = e.target;
    elem.style.backgroundColor = 'white';
  });

  button.addEventListener('click', changeGrid);
}

window.onresize = function (event) {
  container.replaceChildren();
  drawGrid(currentGrid);
};

drawGrid(currentGrid);
