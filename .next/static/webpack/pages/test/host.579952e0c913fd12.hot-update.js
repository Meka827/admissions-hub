/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test/host",{

/***/ "./pages/test/host.js":
/*!****************************!*\
  !*** ./pages/test/host.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/CodeEditor */ \"./src/components/CodeEditor.js\");\n\n\n\nfunction Host() {\n    var roomId;\n    var buttonStyle = {\n        display: \"flex\"\n    };\n    var handleNewRoom = function() {\n        console.log(\"here\");\n        roomId = react_uuid__WEBPACK_IMPORTED_MODULE_1___default()();\n        buttonStyle = {\n            display: \"none\"\n        };\n    };\n    if (!roomId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNewRoom,\n                style: buttonStyle,\n                children: \"Generate a new room\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jones\\\\Documents\\\\VS Projects\\\\admissions-hub\\\\pages\\\\test\\\\host.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CodeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jones\\\\Documents\\\\VS Projects\\\\admissions-hub\\\\pages\\\\test\\\\host.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_c = Host;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Host);\nvar _c;\n$RefreshReg$(_c, \"Host\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0L2hvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBNkI7QUFDNEI7QUFFekQsU0FBU0UsSUFBSSxHQUFHO0lBRVosSUFBSUMsTUFBTTtJQUVWLElBQUlDLFdBQVcsR0FBRztRQUNkQyxPQUFPLEVBQUUsTUFBTTtLQUNsQjtJQUNELElBQU1DLGFBQWEsR0FBRyxXQUFNO1FBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkJMLE1BQU0sR0FBR0gsaURBQUksRUFBRTtRQUNmSSxXQUFXLEdBQUc7WUFDVkMsT0FBTyxFQUFFLE1BQU07U0FDbEI7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDRixNQUFNLEVBQUU7UUFDVCxxQkFDSTtzQkFDQSw0RUFBQ00sUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixhQUFhO2dCQUFFSyxLQUFLLEVBQUVQLFdBQVc7MEJBQUUscUJBQW1COzs7OztvQkFBUzt5QkFFN0UsQ0FDTjtJQUVMLENBQUM7SUFDRCxxQkFDSSw4REFBQ0gsa0VBQVU7Ozs7WUFBRyxDQUNqQjtBQUVMLENBQUM7QUE1QlFDLEtBQUFBLElBQUk7QUE4QmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0L2hvc3QuanM/OThiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJ1xyXG5pbXBvcnQgQ29kZUVkaXRvciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29kZUVkaXRvclwiO1xyXG5cclxuZnVuY3Rpb24gSG9zdCgpIHtcclxuXHJcbiAgICBsZXQgcm9vbUlkO1xyXG5cclxuICAgIGxldCBidXR0b25TdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlTmV3Um9vbSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpXHJcbiAgICAgICAgcm9vbUlkID0gdXVpZCgpXHJcbiAgICAgICAgYnV0dG9uU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcm9vbUlkKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5ld1Jvb219IHN0eWxlPXtidXR0b25TdHlsZX0+R2VuZXJhdGUgYSBuZXcgcm9vbTwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb2RlRWRpdG9yIC8+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9zdDsiXSwibmFtZXMiOlsidXVpZCIsIkNvZGVFZGl0b3IiLCJIb3N0Iiwicm9vbUlkIiwiYnV0dG9uU3R5bGUiLCJkaXNwbGF5IiwiaGFuZGxlTmV3Um9vbSIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test/host.js\n"));

/***/ }),

/***/ "./node_modules/react-uuid/uuid.js":
/*!*****************************************!*\
  !*** ./node_modules/react-uuid/uuid.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/**\nA function that returns a universally unique identifier (uuid).  \nexample: 1b83fd69-abe7-468c-bea1-306a8aa1c81d\n@returns `string` : 32 character uuid (see example)\n*/\nfunction uuid() {\n  const hashTable = [\n    'a',\n    'b',\n    'c',\n    'd',\n    'e',\n    'f',\n    '0',\n    '1',\n    '2',\n    '3',\n    '4',\n    '5',\n    '6',\n    '7',\n    '8',\n    '9',\n  ];\n  let uuid = [];\n  for (let i = 0; i < 35; i++) {\n    if (i === 7 || i === 12 || i === 17 || i === 22) {\n      uuid[i] = '-';\n    } else {\n      uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)];\n    }\n  }\n  return uuid.join('');\n}\n\nmodule.exports = uuid;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXVpZC91dWlkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11dWlkL3V1aWQuanM/NmIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdW5pdmVyc2FsbHkgdW5pcXVlIGlkZW50aWZpZXIgKHV1aWQpLiAgXG5leGFtcGxlOiAxYjgzZmQ2OS1hYmU3LTQ2OGMtYmVhMS0zMDZhOGFhMWM4MWRcbkByZXR1cm5zIGBzdHJpbmdgIDogMzIgY2hhcmFjdGVyIHV1aWQgKHNlZSBleGFtcGxlKVxuKi9cbmZ1bmN0aW9uIHV1aWQoKSB7XG4gIGNvbnN0IGhhc2hUYWJsZSA9IFtcbiAgICAnYScsXG4gICAgJ2InLFxuICAgICdjJyxcbiAgICAnZCcsXG4gICAgJ2UnLFxuICAgICdmJyxcbiAgICAnMCcsXG4gICAgJzEnLFxuICAgICcyJyxcbiAgICAnMycsXG4gICAgJzQnLFxuICAgICc1JyxcbiAgICAnNicsXG4gICAgJzcnLFxuICAgICc4JyxcbiAgICAnOScsXG4gIF07XG4gIGxldCB1dWlkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzU7IGkrKykge1xuICAgIGlmIChpID09PSA3IHx8IGkgPT09IDEyIHx8IGkgPT09IDE3IHx8IGkgPT09IDIyKSB7XG4gICAgICB1dWlkW2ldID0gJy0nO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dWlkW2ldID0gaGFzaFRhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhhc2hUYWJsZS5sZW5ndGggLSAxKV07XG4gICAgfVxuICB9XG4gIHJldHVybiB1dWlkLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-uuid/uuid.js\n"));

/***/ })

});