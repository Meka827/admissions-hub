"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Problems.js":
/*!************************************!*\
  !*** ./src/components/Problems.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Problems = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), seeProblem1 = ref[0], setSeeProblem1 = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeProblem2 = ref1[0], setSeeProblem2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeProblem3 = ref2[0], setSeeProblem3 = ref2[1];\n    var problem1 = \"function addPropertiesToObject(obj1, obj2) {\\n    // Must combine all properties of obj1 to obj2\\n    Object.assign(obj2, obj1); // Use Object.assign to combine obj1 to obj2.\\n    // Must return obj2\\n    return obj2;\\n  } \";\n    var problem2 = \"function createNewArray(arr, func) {\\n  // create new array\\n  var newArr = Array.from(arr, func); //Use Array.from to create a new array that has the given array and function\\n  //Return new array\\n  return newArr;\\n}\";\n    var problem3 = \"function logger(func, str) {\\n    var newStr = '';// create new empty string\\n    // Use a for loop in order to go through each letter of the string\\n    for (var i = 0; i < str.length;i++) {\\n    // assign each letter that has gone through the function to the new string\\n    newStr +=  func(str[i])\\n    }\\n    // return new string\\n    return newStr;\\n    }\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 13\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-around\",\n                    paddingBottom: 10,\n                    paddingTop: 5\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            if (seeProblem1 === false) {\n                                setSeeProblem1(!seeProblem1);\n                                setSeeProblem2(false);\n                                setSeeProblem3(false);\n                            }\n                        },\n                        children: \"Problem 1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            if (seeProblem2 === false) {\n                                setSeeProblem2(!seeProblem2);\n                                setSeeProblem1(false);\n                                setSeeProblem3(false);\n                            }\n                        },\n                        children: \"Problem 2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            if (seeProblem3 === false) {\n                                setSeeProblem3(!seeProblem3);\n                                setSeeProblem1(false);\n                                setSeeProblem2(false);\n                            }\n                        },\n                        children: \"Problem 3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            seeProblem1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            paddingBottom: 20\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 1:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, _this),\n                            \" Working with Strings and Functions Complete the logger function that takes in a function and a string and returns the result of calling the function on each letter in the string\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, _this) : null,\n            seeProblem2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 2:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this),\n                            \" Working with Arrays and Functions Complete the createNewArray function that takes in an array and another function, then returns a new array containing the results of calling the input function on each element in the array.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem2\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, _this) : null,\n            seeProblem3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 3:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, _this),\n                            ' Working with Objects Given two objects as parameters \"obj1\" and \"obj2\", complete the addPropertiesToObject function that adds all properties of the first object to the second object and returns the second object.'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem3\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Problems, \"5SQrbwcgQlDkuH7LjZbDIDo/nNc=\");\n_c = Problems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Problems);\nvar _c;\n$RefreshReg$(_c, \"Problems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDSixRQUFNO2tDQUFDLFFBQU07Ozs7OzZCQUFTO2tDQUN2Qiw4REFBQ0ssVUFBUTt3QkFBQ2QsS0FBSyxFQUFFOzRCQUFFZSxLQUFLLEVBQUUsR0FBRzs0QkFBRUMsTUFBTSxFQUFFLEdBQUc7eUJBQUU7Ozs7OzZCQUFhOzs7Ozs7cUJBQ3JELEdBQ0osSUFBSTs7Ozs7O2FBQ0osQ0FDTjtBQUNKLENBQUM7R0E3SEszQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUErSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtcy5qcz8zYjg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvYmxlbXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlZVByb2JsZW0xLCBzZXRTZWVQcm9ibGVtMV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VlUHJvYmxlbTIsIHNldFNlZVByb2JsZW0yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VlUHJvYmxlbTMsIHNldFNlZVByb2JsZW0zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcHJvYmxlbTEgPSBgZnVuY3Rpb24gYWRkUHJvcGVydGllc1RvT2JqZWN0KG9iajEsIG9iajIpIHtcclxuICAgIC8vIE11c3QgY29tYmluZSBhbGwgcHJvcGVydGllcyBvZiBvYmoxIHRvIG9iajJcclxuICAgIE9iamVjdC5hc3NpZ24ob2JqMiwgb2JqMSk7IC8vIFVzZSBPYmplY3QuYXNzaWduIHRvIGNvbWJpbmUgb2JqMSB0byBvYmoyLlxyXG4gICAgLy8gTXVzdCByZXR1cm4gb2JqMlxyXG4gICAgcmV0dXJuIG9iajI7XHJcbiAgfSBgO1xyXG5cclxuICBjb25zdCBwcm9ibGVtMiA9IGBmdW5jdGlvbiBjcmVhdGVOZXdBcnJheShhcnIsIGZ1bmMpIHtcclxuICAvLyBjcmVhdGUgbmV3IGFycmF5XHJcbiAgdmFyIG5ld0FyciA9IEFycmF5LmZyb20oYXJyLCBmdW5jKTsgLy9Vc2UgQXJyYXkuZnJvbSB0byBjcmVhdGUgYSBuZXcgYXJyYXkgdGhhdCBoYXMgdGhlIGdpdmVuIGFycmF5IGFuZCBmdW5jdGlvblxyXG4gIC8vUmV0dXJuIG5ldyBhcnJheVxyXG4gIHJldHVybiBuZXdBcnI7XHJcbn1gO1xyXG5cclxuICBjb25zdCBwcm9ibGVtMyA9IGBmdW5jdGlvbiBsb2dnZXIoZnVuYywgc3RyKSB7XHJcbiAgICB2YXIgbmV3U3RyID0gJyc7Ly8gY3JlYXRlIG5ldyBlbXB0eSBzdHJpbmdcclxuICAgIC8vIFVzZSBhIGZvciBsb29wIGluIG9yZGVyIHRvIGdvIHRocm91Z2ggZWFjaCBsZXR0ZXIgb2YgdGhlIHN0cmluZ1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoO2krKykge1xyXG4gICAgLy8gYXNzaWduIGVhY2ggbGV0dGVyIHRoYXQgaGFzIGdvbmUgdGhyb3VnaCB0aGUgZnVuY3Rpb24gdG8gdGhlIG5ldyBzdHJpbmdcclxuICAgIG5ld1N0ciArPSAgZnVuYyhzdHJbaV0pXHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gbmV3IHN0cmluZ1xyXG4gICAgcmV0dXJuIG5ld1N0cjtcclxuICAgIH1gO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXHJcbiAgICAgICAgICBwYWRkaW5nVG9wOiA1LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWVQcm9ibGVtMSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBzZXRTZWVQcm9ibGVtMSghc2VlUHJvYmxlbTEpO1xyXG4gICAgICAgICAgICAgIHNldFNlZVByb2JsZW0yKGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXRTZWVQcm9ibGVtMyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUHJvYmxlbSAxXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VlUHJvYmxlbTIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VlUHJvYmxlbTIoIXNlZVByb2JsZW0yKTtcclxuICAgICAgICAgICAgICBzZXRTZWVQcm9ibGVtMShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VlUHJvYmxlbTMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFByb2JsZW0gMlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZVByb2JsZW0zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHNldFNlZVByb2JsZW0zKCFzZWVQcm9ibGVtMyk7XHJcbiAgICAgICAgICAgICAgc2V0U2VlUHJvYmxlbTEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldFNlZVByb2JsZW0yKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQcm9ibGVtIDNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzZWVQcm9ibGVtMSA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMjAgfX0+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+UXVlc3Rpb24gMTo8L3N0cm9uZz4gV29ya2luZyB3aXRoIFN0cmluZ3MgYW5kIEZ1bmN0aW9uc1xyXG4gICAgICAgICAgICBDb21wbGV0ZSB0aGUgbG9nZ2VyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gYSBmdW5jdGlvbiBhbmQgYSBzdHJpbmdcclxuICAgICAgICAgICAgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBvbiBlYWNoIGxldHRlciBpbiB0aGVcclxuICAgICAgICAgICAgc3RyaW5nXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntwcm9ibGVtMX08L2NvZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHN0cm9uZz5Ob3Rlczo8L3N0cm9uZz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17eyB3aWR0aDogNDAwLCBoZWlnaHQ6IDEwMCB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge3NlZVByb2JsZW0yID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5RdWVzdGlvbiAyOjwvc3Ryb25nPiBXb3JraW5nIHdpdGggQXJyYXlzIGFuZCBGdW5jdGlvbnNcclxuICAgICAgICAgICAgQ29tcGxldGUgdGhlIGNyZWF0ZU5ld0FycmF5IGZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gYW4gYXJyYXkgYW5kXHJcbiAgICAgICAgICAgIGFub3RoZXIgZnVuY3Rpb24sIHRoZW4gcmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mXHJcbiAgICAgICAgICAgIGNhbGxpbmcgdGhlIGlucHV0IGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkuXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgIDxjb2RlIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e3Byb2JsZW0yfTwvY29kZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8c3Ryb25nPk5vdGVzOjwvc3Ryb25nPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7IHdpZHRoOiA0MDAsIGhlaWdodDogMTAwIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7c2VlUHJvYmxlbTMgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlF1ZXN0aW9uIDM6PC9zdHJvbmc+IFdvcmtpbmcgd2l0aCBPYmplY3RzIEdpdmVuIHR3byBvYmplY3RzXHJcbiAgICAgICAgICAgIGFzIHBhcmFtZXRlcnMgXCJvYmoxXCIgYW5kIFwib2JqMlwiLCBjb21wbGV0ZSB0aGUgYWRkUHJvcGVydGllc1RvT2JqZWN0XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRoYXQgYWRkcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzZWNvbmRcclxuICAgICAgICAgICAgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzZWNvbmQgb2JqZWN0LlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntwcm9ibGVtM308L2NvZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHN0cm9uZz5Ob3Rlczo8L3N0cm9uZz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17eyB3aWR0aDogNDAwLCBoZWlnaHQ6IDEwMCB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ibGVtcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9ibGVtcyIsInNlZVByb2JsZW0xIiwic2V0U2VlUHJvYmxlbTEiLCJzZWVQcm9ibGVtMiIsInNldFNlZVByb2JsZW0yIiwic2VlUHJvYmxlbTMiLCJzZXRTZWVQcm9ibGVtMyIsInByb2JsZW0xIiwicHJvYmxlbTIiLCJwcm9ibGVtMyIsImRpdiIsInN0eWxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic3Ryb25nIiwiYmFja2dyb3VuZENvbG9yIiwiY29kZSIsImNvbG9yIiwiYnIiLCJ0ZXh0YXJlYSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Problems.js\n"));

/***/ })

});