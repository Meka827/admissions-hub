/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./src/components/Reference.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./src/components/Reference.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Reference_checkmark__8HKF7 {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n/* On mouse-over, add a grey background color */\\r\\n.Reference_container__417sf:hover input ~ .Reference_checkmark__8HKF7 {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n/* When the checkbox is checked, add a blue background */\\r\\n.Reference_container__417sf input:checked ~ .Reference_checkmark__8HKF7 {\\r\\n  background-color: #2196f3;\\r\\n}\\r\\n\\r\\n/* Create the checkmark/indicator (hidden when not checked) */\\r\\n.Reference_checkmark__8HKF7:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Show the checkmark when checked */\\r\\n.Reference_container__417sf input:checked ~ .Reference_checkmark__8HKF7:after {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Style the checkmark/indicator */\\r\\n.Reference_container__417sf .Reference_checkmark__8HKF7:after {\\r\\n  left: 9px;\\r\\n  top: 5px;\\r\\n  width: 5px;\\r\\n  height: 10px;\\r\\n  border: solid white;\\r\\n  border-width: 0 3px 3px 0;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.Reference_soso__TsE88 {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  grid-gap: 10px;\\r\\n  gap: 10px;\\r\\n  background-color: #2196f3;\\r\\n  padding: 10px;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/Reference.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA,+CAA+C;AAC/C;EACE,sBAAsB;AACxB;;AAEA,wDAAwD;AACxD;EACE,yBAAyB;AAC3B;;AAEA,6DAA6D;AAC7D;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA,oCAAoC;AACpC;EACE,cAAc;AAChB;;AAEA,kCAAkC;AAClC;EACE,SAAS;EACT,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EAGzB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAS;EAAT,SAAS;EACT,yBAAyB;EACzB,aAAa;AACf\",\"sourcesContent\":[\".checkmark {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n/* On mouse-over, add a grey background color */\\r\\n.container:hover input ~ .checkmark {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n/* When the checkbox is checked, add a blue background */\\r\\n.container input:checked ~ .checkmark {\\r\\n  background-color: #2196f3;\\r\\n}\\r\\n\\r\\n/* Create the checkmark/indicator (hidden when not checked) */\\r\\n.checkmark:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Show the checkmark when checked */\\r\\n.container input:checked ~ .checkmark:after {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Style the checkmark/indicator */\\r\\n.container .checkmark:after {\\r\\n  left: 9px;\\r\\n  top: 5px;\\r\\n  width: 5px;\\r\\n  height: 10px;\\r\\n  border: solid white;\\r\\n  border-width: 0 3px 3px 0;\\r\\n  -webkit-transform: rotate(45deg);\\r\\n  -ms-transform: rotate(45deg);\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.soso {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 10px;\\r\\n  background-color: #2196f3;\\r\\n  padding: 10px;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"checkmark\": \"Reference_checkmark__8HKF7\",\n\t\"container\": \"Reference_container__417sf\",\n\t\"soso\": \"Reference_soso__TsE88\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3JjL2NvbXBvbmVudHMvUmVmZXJlbmNlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLHVFQUF1RSx5QkFBeUIsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0IsNkJBQTZCLEtBQUssbUlBQW1JLDZCQUE2QixLQUFLLDhJQUE4SSxnQ0FBZ0MsS0FBSyw2R0FBNkcsb0JBQW9CLHlCQUF5QixvQkFBb0IsS0FBSyxnSUFBZ0kscUJBQXFCLEtBQUssOEdBQThHLGdCQUFnQixlQUFlLGlCQUFpQixtQkFBbUIsMEJBQTBCLGdDQUFnQywrQkFBK0IsS0FBSyxnQ0FBZ0Msb0JBQW9CLDRDQUE0QyxxQkFBcUIsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsS0FBSyxXQUFXLG9HQUFvRyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxxQ0FBcUMseUJBQXlCLGFBQWEsY0FBYyxtQkFBbUIsa0JBQWtCLDZCQUE2QixLQUFLLGlHQUFpRyw2QkFBNkIsS0FBSyw0R0FBNEcsZ0NBQWdDLEtBQUssNEZBQTRGLG9CQUFvQix5QkFBeUIsb0JBQW9CLEtBQUssOEZBQThGLHFCQUFxQixLQUFLLDRFQUE0RSxnQkFBZ0IsZUFBZSxpQkFBaUIsbUJBQW1CLDBCQUEwQixnQ0FBZ0MsdUNBQXVDLG1DQUFtQywrQkFBK0IsS0FBSyxlQUFlLG9CQUFvQiw0Q0FBNEMsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsS0FBSyx1QkFBdUI7QUFDbi9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZmVyZW5jZS5tb2R1bGUuY3NzPzk1NzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5SZWZlcmVuY2VfY2hlY2ttYXJrX184SEtGNyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXHJcXG4uUmVmZXJlbmNlX2NvbnRhaW5lcl9fNDE3c2Y6aG92ZXIgaW5wdXQgfiAuUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxyXFxuLlJlZmVyZW5jZV9jb250YWluZXJfXzQxN3NmIGlucHV0OmNoZWNrZWQgfiAuUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXHJcXG4uUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjc6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxyXFxuLlJlZmVyZW5jZV9jb250YWluZXJfXzQxN3NmIGlucHV0OmNoZWNrZWQgfiAuUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjc6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxyXFxuLlJlZmVyZW5jZV9jb250YWluZXJfXzQxN3NmIC5SZWZlcmVuY2VfY2hlY2ttYXJrX184SEtGNzphZnRlciB7XFxyXFxuICBsZWZ0OiA5cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLlJlZmVyZW5jZV9zb3NvX19Uc0U4OCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9SZWZlcmVuY2UubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBLCtDQUErQztBQUMvQztFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsNkRBQTZEO0FBQzdEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQVM7RUFBVCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2hlY2ttYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcclxcbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXHJcXG4uY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxyXFxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDlweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc29zbyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjaGVja21hcmtcIjogXCJSZWZlcmVuY2VfY2hlY2ttYXJrX184SEtGN1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlJlZmVyZW5jZV9jb250YWluZXJfXzQxN3NmXCIsXG5cdFwic29zb1wiOiBcIlJlZmVyZW5jZV9zb3NvX19Uc0U4OFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./src/components/Reference.module.css\n"));

/***/ })

});