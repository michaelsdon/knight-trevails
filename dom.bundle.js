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
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBoard": () => (/* binding */ clearBoard),
/* harmony export */   "setFinal": () => (/* binding */ setFinal),
/* harmony export */   "setPath": () => (/* binding */ setPath),
/* harmony export */   "setStart": () => (/* binding */ setStart)
/* harmony export */ });
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC10cmV2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJldmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodC10cmV2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodC10cmV2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodC10cmV2YWlscy8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBzZXRTdGFydCA9IGZ1bmN0aW9uKGNlbGwpIHtcbiAgbGV0IGpzb25DZWxsID0gSlNPTi5zdHJpbmdpZnkoY2VsbCk7XG5cbiAgbGV0IHN0YXJ0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGpzb25DZWxsKTtcbiAgc3RhcnRDZWxsLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0Q2VsbC50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcbn1cblxuY29uc3Qgc2V0RmluYWwgPSBmdW5jdGlvbihjZWxsKSB7XG4gIGxldCBqc29uQ2VsbCA9IEpTT04uc3RyaW5naWZ5KGNlbGwpO1xuXG4gIGxldCBzdGFydENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChqc29uQ2VsbCk7XG4gIHN0YXJ0Q2VsbC5jbGFzc0xpc3QuYWRkKCdmaW5hbCcpO1xuICBzdGFydENlbGwudGV4dENvbnRlbnQgPSBcIkZpbmFsXCI7XG59XG5cbmNvbnN0IHNldFBhdGggPSBmdW5jdGlvbihwYXRoKSB7XG5cbiAgaWYgKHBhdGgubGVuZ3RoID4gMikge1xuICAgIHBhdGguc2hpZnQoKTtcbiAgICBwYXRoLnBvcCgpO1xuXG4gICAgbGV0IGluZGV4ID0gMjtcblxuICAgIGZvciAobGV0IGNlbGwgb2YgcGF0aCkge1xuICAgICAgbGV0IGpzb25DZWxsID0gSlNPTi5zdHJpbmdpZnkoY2VsbCk7XG4gICAgICBsZXQgcGF0aENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChqc29uQ2VsbCk7XG4gICAgICBwYXRoQ2VsbC5jbGFzc0xpc3QuYWRkKCdwYXRoJylcbiAgICAgIHBhdGhDZWxsLnRleHRDb250ZW50ID0gaW5kZXgrKztcbiAgICB9XG4gIH1cblxufVxuXG5jb25zdCBjbGVhckJvYXJkID0gZnVuY3Rpb24oKSB7XG4gIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgZm9yIChsZXQgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdmaW5hbCcpO1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgncGF0aCcpO1xuICB9XG59XG5cbmV4cG9ydCB7c2V0U3RhcnQsIHNldEZpbmFsLCBzZXRQYXRoLCBjbGVhckJvYXJkfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==