/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/algo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knightPath": () => (/* binding */ knightPath)
/* harmony export */ });
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

  let moves = [
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyZXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodC10cmV2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyZXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyZXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyZXZhaWxzLy4vc3JjL2FsZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBrbmlnaHRQYXRoKHN0YXJ0LCBmaW5pc2gpIHtcblxuICBsZXQgZXhwbG9yZWQgPSBbXTtcbiAgbGV0IHBhdGhzID0gW1tzdGFydF1dO1xuXG4gIGlmIChzdGFydC50b1N0cmluZygpID09PSBmaW5pc2gudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBzdGFydDtcbiAgfVxuXG4gIHdoaWxlIChwYXRocy5sZW5ndGgpIHtcbiAgICBsZXQgY3VyclBhdGggPSBwYXRocy5zaGlmdCgpO1xuICAgIGxldCBsYXN0TW92ZSA9IGN1cnJQYXRoW2N1cnJQYXRoLmxlbmd0aCAtIDFdO1xuICAgIGxldCBtb3ZlcyA9IGdldEtuaWdodE1vdmVzKGxhc3RNb3ZlKTtcblxuICAgIGZvciAobGV0IG1vdmUgb2YgbW92ZXMpIHtcblxuICAgICAgaWYgKGV4cGxvcmVkLmluZGV4T2YobW92ZSkgPCAwKSB7XG4gICAgICAgIGxldCBuZXdQYXRoID0gY3VyclBhdGguY29uY2F0KFttb3ZlXSlcbiAgICAgICAgaWYgKG1vdmUudG9TdHJpbmcoKSA9PT0gZmluaXNoLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3UGF0aDtcbiAgICAgICAgfVxuICAgICAgICBwYXRocy5wdXNoKG5ld1BhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV4cGxvcmVkLnB1c2gobGFzdE1vdmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRNb3ZlKG1vdmUpIHtcbiAgbGV0IHggPSBtb3ZlWzBdO1xuICBsZXQgeSA9IG1vdmVbMV07XG5cbiAgaWYgKDAgPD0geCAmJiB4IDwgOCAmJiAwIDw9IHkgJiYgeSA8IDgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0S25pZ2h0TW92ZXMocG9zaXRpb24pIHtcblxuICBsZXQgYXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuICBsZXQgbW92ZXMgPSBbXG4gICAgWy0yLCAxXSxcbiAgICBbLTEsIDJdLFxuICAgIFsxLCAyXSxcbiAgICBbMiwgMV0sXG4gICAgWzIsIC0xXSxcbiAgICBbMSwgLTJdLFxuICAgIFstMSwgLTJdLFxuICAgIFstMiwgLTFdXG4gIF1cblxuICBmb3IgKGxldCBtb3ZlIG9mIG1vdmVzKSB7XG4gICAgbGV0IG5ld01vdmUgPSBbcG9zaXRpb25bMF0gKyBtb3ZlWzBdLCBwb3NpdGlvblsxXSArIG1vdmVbMV1dXG4gICAgaWYgKGlzVmFsaWRNb3ZlKG5ld01vdmUpKSB7XG4gICAgICBhcnJheS5wdXNoKG5ld01vdmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHtrbmlnaHRQYXRofVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9