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
  drawGrid(num);
}

function drawGrid(numberCells) {
  for (let i = 1; i <= numberCells; i++) {
    const elem = document.createElement('div');
    elem.style.border = '1px solid black';
    elem.style.height = (90 / numberCells - 0.01).toFixed(2) + 'vh';
    elem.style.display = 'flex';
    elem.style.flexDirection = 'row';
    elem.classList.add('row' + i);
    for (let j = 1; j <= numberCells; j++) {
      const elem_row = document.createElement('div');
      elem_row.classList.add('row' + i + 'col' + j);
      elem_row.style.border = '1px solid black';
      elem_row.style.width = (90 / numberCells - 0.01).toFixed(2) + 'vw';
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

  const button = document.querySelector('.changeGrid');
  button.addEventListener('click', changeGrid);
}

drawGrid(16);
