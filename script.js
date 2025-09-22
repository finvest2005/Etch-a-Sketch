const container = document.querySelector('.container');

const content = [];
for (let i = 1; i <= 16; i++) {
  const elem = document.createElement('div');
  elem.style.border = '1px solid black';
  elem.style.height = (100 / 16).toFixed(2) + 'vh';
  elem.style.display = 'flex';
  elem.style.flexDirection = 'row';
  elem.classList.add('row' + i);
  for (let j = 1; j <= 16; j++) {
    const elem_row = document.createElement('div');
    elem_row.classList.add('row' + i + 'col' + j);
    elem_row.style.border = '1px solid black';
    elem_row.style.width = (100 / 16).toFixed(2) + 'vw';
    elem.appendChild(elem_row);
  }
  content.push(elem);
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
