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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Problems = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), seeProblem1 = ref[0], setSeeProblem1 = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeProblem2 = ref1[0], setSeeProblem2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), seeProblem3 = ref2[0], setSeeProblem3 = ref2[1];\n    var problem1 = \"function addPropertiesToObject(obj1, obj2) {\\n    // Must combine all properties of obj1 to obj2\\n    Object.assign(obj2, obj1); // Use Object.assign to combine obj1 to obj2.\\n    // Must return obj2\\n    return obj2;\\n  } \";\n    var problem2 = \"function createNewArray(arr, func) {\\n  // create new array\\n  var newArr = Array.from(arr, func); //Use Array.from to create a new array that has the given array and function\\n  //Return new array\\n  return newArr;\\n}\";\n    var problem3 = \"function logger(func, str) {\\n    var newStr = '';// create new empty string\\n    // Use a for loop in order to go through each letter of the string\\n    for (var i = 0; i < str.length;i++) {\\n    // assign each letter that has gone through the function to the new string\\n    newStr +=  func(str[i])\\n    }\\n    // return new string\\n    return newStr;\\n    }\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 14\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    if (seeProblem1 === false) {\n                        setSeeProblem1(!seeProblem1);\n                        setSeeProblem2(false);\n                        setSeeProblem3(false);\n                    }\n                },\n                children: \"Problem 1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    if (seeProblem2 === false) {\n                        setSeeProblem2(!seeProblem2);\n                        setSeeProblem1(false);\n                        setSeeProblem3(false);\n                    }\n                },\n                children: \"Problem 2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    if (seeProblem3 === false) {\n                        setSeeProblem3(!seeProblem3);\n                        setSeeProblem1(false);\n                        setSeeProblem2(false);\n                    }\n                },\n                children: \"Problem 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            seeProblem1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 1:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            \" WWorking with Strings and Functions Complete the logger function that takes in a function and a string and returns the result of calling the function on each letter in the string\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this) : null,\n            seeProblem2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 2:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this),\n                            \" Working with Arrays and Functions Complete the createNewArray function that takes in an array and another function, then returns a new array containing the results of calling the input function on each element in the array.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem2\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, _this) : null,\n            seeProblem3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Question 3:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, _this),\n                            ' Working with Objects Given two objects as parameters \"obj1\" and \"obj2\", complete the addPropertiesToObject function that adds all properties of the first object to the second object and returns the second object.'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"black\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: problem3\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Notes:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        style: {\n                            width: 400,\n                            height: 100\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\reave\\\\OneDrive\\\\Desktop\\\\admissions-hub\\\\src\\\\components\\\\Problems.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Problems, \"5SQrbwcgQlDkuH7LjZbDIDo/nNc=\");\n_c = Problems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Problems);\nvar _c;\n$RefreshReg$(_c, \"Problems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0osQ0FBQztHQXJIS3ZCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXVIZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2JsZW1zLmpzPzNiODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9ibGVtcyA9ICgpID0+IHtcclxuICBjb25zdCBbc2VlUHJvYmxlbTEsIHNldFNlZVByb2JsZW0xXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWVQcm9ibGVtMiwgc2V0U2VlUHJvYmxlbTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWVQcm9ibGVtMywgc2V0U2VlUHJvYmxlbTNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwcm9ibGVtMSA9IGBmdW5jdGlvbiBhZGRQcm9wZXJ0aWVzVG9PYmplY3Qob2JqMSwgb2JqMikge1xyXG4gICAgLy8gTXVzdCBjb21iaW5lIGFsbCBwcm9wZXJ0aWVzIG9mIG9iajEgdG8gb2JqMlxyXG4gICAgT2JqZWN0LmFzc2lnbihvYmoyLCBvYmoxKTsgLy8gVXNlIE9iamVjdC5hc3NpZ24gdG8gY29tYmluZSBvYmoxIHRvIG9iajIuXHJcbiAgICAvLyBNdXN0IHJldHVybiBvYmoyXHJcbiAgICByZXR1cm4gb2JqMjtcclxuICB9IGA7XHJcblxyXG4gIGNvbnN0IHByb2JsZW0yID0gYGZ1bmN0aW9uIGNyZWF0ZU5ld0FycmF5KGFyciwgZnVuYykge1xyXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXlcclxuICB2YXIgbmV3QXJyID0gQXJyYXkuZnJvbShhcnIsIGZ1bmMpOyAvL1VzZSBBcnJheS5mcm9tIHRvIGNyZWF0ZSBhIG5ldyBhcnJheSB0aGF0IGhhcyB0aGUgZ2l2ZW4gYXJyYXkgYW5kIGZ1bmN0aW9uXHJcbiAgLy9SZXR1cm4gbmV3IGFycmF5XHJcbiAgcmV0dXJuIG5ld0FycjtcclxufWA7XHJcblxyXG4gIGNvbnN0IHByb2JsZW0zID0gYGZ1bmN0aW9uIGxvZ2dlcihmdW5jLCBzdHIpIHtcclxuICAgIHZhciBuZXdTdHIgPSAnJzsvLyBjcmVhdGUgbmV3IGVtcHR5IHN0cmluZ1xyXG4gICAgLy8gVXNlIGEgZm9yIGxvb3AgaW4gb3JkZXIgdG8gZ28gdGhyb3VnaCBlYWNoIGxldHRlciBvZiB0aGUgc3RyaW5nXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7aSsrKSB7XHJcbiAgICAvLyBhc3NpZ24gZWFjaCBsZXR0ZXIgdGhhdCBoYXMgZ29uZSB0aHJvdWdoIHRoZSBmdW5jdGlvbiB0byB0aGUgbmV3IHN0cmluZ1xyXG4gICAgbmV3U3RyICs9ICBmdW5jKHN0cltpXSlcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBuZXcgc3RyaW5nXHJcbiAgICByZXR1cm4gbmV3U3RyO1xyXG4gICAgfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlZVByb2JsZW0xID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMSghc2VlUHJvYmxlbTEpO1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMihmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFNlZVByb2JsZW0zKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJvYmxlbSAxXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlZVByb2JsZW0yID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMighc2VlUHJvYmxlbTIpO1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMShmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFNlZVByb2JsZW0zKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJvYmxlbSAyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlZVByb2JsZW0zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMyghc2VlUHJvYmxlbTMpO1xyXG4gICAgICAgICAgICBzZXRTZWVQcm9ibGVtMShmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFNlZVByb2JsZW0yKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJvYmxlbSAzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7c2VlUHJvYmxlbTEgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlF1ZXN0aW9uIDE6PC9zdHJvbmc+IFdXb3JraW5nIHdpdGggU3RyaW5ncyBhbmQgRnVuY3Rpb25zXHJcbiAgICAgICAgICAgIENvbXBsZXRlIHRoZSBsb2dnZXIgZnVuY3Rpb24gdGhhdCB0YWtlcyBpbiBhIGZ1bmN0aW9uIGFuZCBhIHN0cmluZ1xyXG4gICAgICAgICAgICBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggbGV0dGVyIGluIHRoZVxyXG4gICAgICAgICAgICBzdHJpbmdcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPGNvZGUgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57cHJvYmxlbTF9PC9jb2RlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxzdHJvbmc+Tm90ZXM6PC9zdHJvbmc+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3sgd2lkdGg6IDQwMCwgaGVpZ2h0OiAxMDAgfX0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtzZWVQcm9ibGVtMiA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+UXVlc3Rpb24gMjo8L3N0cm9uZz4gV29ya2luZyB3aXRoIEFycmF5cyBhbmQgRnVuY3Rpb25zXHJcbiAgICAgICAgICAgIENvbXBsZXRlIHRoZSBjcmVhdGVOZXdBcnJheSBmdW5jdGlvbiB0aGF0IHRha2VzIGluIGFuIGFycmF5IGFuZFxyXG4gICAgICAgICAgICBhbm90aGVyIGZ1bmN0aW9uLCB0aGVuIHJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZlxyXG4gICAgICAgICAgICBjYWxsaW5nIHRoZSBpbnB1dCBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5LlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pntwcm9ibGVtMn08L2NvZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHN0cm9uZz5Ob3Rlczo8L3N0cm9uZz5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17eyB3aWR0aDogNDAwLCBoZWlnaHQ6IDEwMCB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge3NlZVByb2JsZW0zID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5RdWVzdGlvbiAzOjwvc3Ryb25nPiBXb3JraW5nIHdpdGggT2JqZWN0cyBHaXZlbiB0d28gb2JqZWN0c1xyXG4gICAgICAgICAgICBhcyBwYXJhbWV0ZXJzIFwib2JqMVwiIGFuZCBcIm9iajJcIiwgY29tcGxldGUgdGhlIGFkZFByb3BlcnRpZXNUb09iamVjdFxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0aGF0IGFkZHMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc2Vjb25kXHJcbiAgICAgICAgICAgIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2Vjb25kIG9iamVjdC5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPGNvZGUgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57cHJvYmxlbTN9PC9jb2RlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxzdHJvbmc+Tm90ZXM6PC9zdHJvbmc+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3sgd2lkdGg6IDQwMCwgaGVpZ2h0OiAxMDAgfX0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvYmxlbXMiLCJzZWVQcm9ibGVtMSIsInNldFNlZVByb2JsZW0xIiwic2VlUHJvYmxlbTIiLCJzZXRTZWVQcm9ibGVtMiIsInNlZVByb2JsZW0zIiwic2V0U2VlUHJvYmxlbTMiLCJwcm9ibGVtMSIsInByb2JsZW0yIiwicHJvYmxlbTMiLCJkaXYiLCJzdHlsZSIsImZvbnRTaXplIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJzdHJvbmciLCJiciIsImJhY2tncm91bmRDb2xvciIsImNvZGUiLCJjb2xvciIsInRleHRhcmVhIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Problems.js\n"));

/***/ })

});