let currentGrid = 16;
const container = document.querySelector('.container');

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
  console.log(button.offsetHeight);
  const coeff = window.innerWidth / (window.innerHeight - button.offsetHeight);
  const prcH =
    90 - Math.round((button.offsetHeight * 100) / window.innerHeight);
  let cellH = 0;
  let cellW = 0;
  if (coeff < 1.0) {
    cellH = (prcH / numberCells - 0.01) * coeff;
    cellW = 90 / numberCells - 0.01;
  } else {
    cellH = prcH / numberCells - 0.01;
    cellW = (90 / numberCells - 0.01) / coeff;
  }
  const cell = Math.min(cellH, cellW).toFixed(2);
  for (let i = 1; i <= numberCells; i++) {
    const elem = document.createElement('div');
    elem.style.border = '1px solid black';
    elem.style.height = cellH + 'vh';
    elem.style.display = 'flex';
    elem.style.flexDirection = 'row';
    elem.classList.add('row' + i);
    for (let j = 1; j <= numberCells; j++) {
      const elem_row = document.createElement('div');
      elem_row.classList.add('row' + i + 'col' + j);
      elem_row.style.border = '1px solid black';
      elem_row.style.width = cellW + 'vw';
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
