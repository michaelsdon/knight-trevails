const setStart = function(cell) {
  let jsonCell = JSON.stringify(cell);

  let startCell = document.getElementById(jsonCell);
  startCell.classList.add('start');
  startCell.textContent = "Start";
}

const setFinal = function(cell) {
  let jsonCell = JSON.stringify(cell);

  let startCell = document.getElementById(jsonCell);
  startCell.classList.add('final');
  startCell.textContent = "Final";
}

const setPath = function(path) {

  if (path.length > 2) {
    path.shift();
    path.pop();

    let index = 2;

    for (let cell of path) {
      let jsonCell = JSON.stringify(cell);
      let pathCell = document.getElementById(jsonCell);
      pathCell.classList.add('path')
      pathCell.textContent = index++;
    }
  }

}

const clearBoard = function() {
  let cells = document.querySelectorAll('.cell');

  for (let cell of cells) {
    cell.textContent = '';
    cell.classList.remove('start');
    cell.classList.remove('final');
    cell.classList.remove('path');
  }
}

export {setStart, setFinal, setPath, clearBoard}