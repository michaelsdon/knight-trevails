function knightPath(start, finish) {

  let explored = [];
  let paths = [[start]];

  if (start.toString() === finish.toString()) {
    return start;
  }

  while (paths.length) {
    let currPath = paths.shift();
    let lastMove = currPath[currPath.length - 1];
    let moves = getKnightMoves(lastMove);

    for (let move of moves) {

      if (explored.indexOf(move) < 0) {
        let newPath = currPath.concat([move])
        if (move.toString() === finish.toString()) {
          return newPath;
        }
        paths.push(newPath);
      }
    }

    explored.push(lastMove);
  }
}

function isValidMove(move) {
  let x = move[0];
  let y = move[1];

  if (0 <= x && x < 8 && 0 <= y && y < 8) {
    return true;
  }

  return false;
}

function getKnightMoves(position) {

    let array = new Array();

    moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1]
  ]

  for (let move of moves) {
    let newMove = [position[0] + move[0], position[1] + move[1]]
    if (isValidMove(newMove)) {
      array.push(newMove);
    }
  }

  return array;
}

console.log(knightPath([0,0], [7,7]))
