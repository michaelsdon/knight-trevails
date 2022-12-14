import './style.css';
import { knightPath } from './algo';
import { clearBoard, setFinal, setPath, setStart } from './dom';

let cells = document.querySelectorAll('.cell');
let clear = document.querySelector('button');

let start = null;
let final = null;

const clearBtn = function() {

  start = null;
  final = null;

  clearBoard();
}

const updateBoard = function(e) {
  if (!start) {

    start = JSON.parse(e.target.id);
    setStart(start);

  } else if (!final) {

    final = JSON.parse(e.target.id);
    setFinal(final);
    let path = knightPath(start, final);
    console.log(path);

    setPath(path);

  } else {

    console.log('path already chosen - press clear to find new path');

  }
}

for (let cell of cells) {
  cell.addEventListener('click', updateBoard)
}

clear.addEventListener('click', clearBtn);

console.log(clear);
