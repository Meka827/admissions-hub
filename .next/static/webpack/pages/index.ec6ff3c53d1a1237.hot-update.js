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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Reference_checkmark__8HKF7 {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n/* On mouse-over, add a grey background color */\\r\\n.Reference_container__417sf:hover input ~ .Reference_checkmark__8HKF7 {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n/* When the checkbox is checked, add a blue background */\\r\\n.Reference_container__417sf input:checked ~ .Reference_checkmark__8HKF7 {\\r\\n  background-color: #2196f3;\\r\\n}\\r\\n\\r\\n/* Create the checkmark/indicator (hidden when not checked) */\\r\\n.Reference_checkmark__8HKF7:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Show the checkmark when checked */\\r\\n.Reference_container__417sf input:checked ~ .Reference_checkmark__8HKF7:after {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Style the checkmark/indicator */\\r\\n.Reference_container__417sf .Reference_checkmark__8HKF7:after {\\r\\n  left: 9px;\\r\\n  top: 5px;\\r\\n  width: 5px;\\r\\n  height: 10px;\\r\\n  border: solid white;\\r\\n  border-width: 0 3px 3px 0;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.Reference_referenceGrid__Cyb6U {\\r\\n  display: grid;\\r\\n  grid-template-columns: 100px 100px;\\r\\n  grid-gap: 10px;\\r\\n  gap: 10px;\\r\\n  background-color: #2196f3;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.Reference_referenceGrid__Cyb6U > div {\\r\\n  background-color: rgba(255, 255, 255, 0.8);\\r\\n  text-align: center;\\r\\n  padding: 20px 0;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/Reference.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA,+CAA+C;AAC/C;EACE,sBAAsB;AACxB;;AAEA,wDAAwD;AACxD;EACE,yBAAyB;AAC3B;;AAEA,6DAA6D;AAC7D;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA,oCAAoC;AACpC;EACE,cAAc;AAChB;;AAEA,kCAAkC;AAClC;EACE,SAAS;EACT,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EAGzB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,cAAS;EAAT,SAAS;EACT,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB\",\"sourcesContent\":[\".checkmark {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n/* On mouse-over, add a grey background color */\\r\\n.container:hover input ~ .checkmark {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n/* When the checkbox is checked, add a blue background */\\r\\n.container input:checked ~ .checkmark {\\r\\n  background-color: #2196f3;\\r\\n}\\r\\n\\r\\n/* Create the checkmark/indicator (hidden when not checked) */\\r\\n.checkmark:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Show the checkmark when checked */\\r\\n.container input:checked ~ .checkmark:after {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Style the checkmark/indicator */\\r\\n.container .checkmark:after {\\r\\n  left: 9px;\\r\\n  top: 5px;\\r\\n  width: 5px;\\r\\n  height: 10px;\\r\\n  border: solid white;\\r\\n  border-width: 0 3px 3px 0;\\r\\n  -webkit-transform: rotate(45deg);\\r\\n  -ms-transform: rotate(45deg);\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.referenceGrid {\\r\\n  display: grid;\\r\\n  grid-template-columns: 100px 100px;\\r\\n  gap: 10px;\\r\\n  background-color: #2196f3;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.referenceGrid > div {\\r\\n  background-color: rgba(255, 255, 255, 0.8);\\r\\n  text-align: center;\\r\\n  padding: 20px 0;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"checkmark\": \"Reference_checkmark__8HKF7\",\n\t\"container\": \"Reference_container__417sf\",\n\t\"referenceGrid\": \"Reference_referenceGrid__Cyb6U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3JjL2NvbXBvbmVudHMvUmVmZXJlbmNlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLHVFQUF1RSx5QkFBeUIsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0IsNkJBQTZCLEtBQUssbUlBQW1JLDZCQUE2QixLQUFLLDhJQUE4SSxnQ0FBZ0MsS0FBSyw2R0FBNkcsb0JBQW9CLHlCQUF5QixvQkFBb0IsS0FBSyxnSUFBZ0kscUJBQXFCLEtBQUssOEdBQThHLGdCQUFnQixlQUFlLGlCQUFpQixtQkFBbUIsMEJBQTBCLGdDQUFnQywrQkFBK0IsS0FBSyx5Q0FBeUMsb0JBQW9CLHlDQUF5QyxxQkFBcUIsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsS0FBSywrQ0FBK0MsaURBQWlELHlCQUF5QixzQkFBc0Isc0JBQXNCLEtBQUssV0FBVyxvR0FBb0csWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsc0NBQXNDLHlCQUF5QixhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQiw2QkFBNkIsS0FBSyxpR0FBaUcsNkJBQTZCLEtBQUssNEdBQTRHLGdDQUFnQyxLQUFLLDRGQUE0RixvQkFBb0IseUJBQXlCLG9CQUFvQixLQUFLLDhGQUE4RixxQkFBcUIsS0FBSyw0RUFBNEUsZ0JBQWdCLGVBQWUsaUJBQWlCLG1CQUFtQiwwQkFBMEIsZ0NBQWdDLHVDQUF1QyxtQ0FBbUMsK0JBQStCLEtBQUssd0JBQXdCLG9CQUFvQix5Q0FBeUMsZ0JBQWdCLGdDQUFnQyxvQkFBb0IsS0FBSyw4QkFBOEIsaURBQWlELHlCQUF5QixzQkFBc0Isc0JBQXNCLEtBQUssdUJBQXVCO0FBQzUzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWZlcmVuY2UubW9kdWxlLmNzcz85NTc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxuLlJlZmVyZW5jZV9jb250YWluZXJfXzQxN3NmOmhvdmVyIGlucHV0IH4gLlJlZmVyZW5jZV9jaGVja21hcmtfXzhIS0Y3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcclxcbi5SZWZlcmVuY2VfY29udGFpbmVyX180MTdzZiBpbnB1dDpjaGVja2VkIH4gLlJlZmVyZW5jZV9jaGVja21hcmtfXzhIS0Y3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxyXFxuLlJlZmVyZW5jZV9jaGVja21hcmtfXzhIS0Y3OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcclxcbi5SZWZlcmVuY2VfY29udGFpbmVyX180MTdzZiBpbnB1dDpjaGVja2VkIH4gLlJlZmVyZW5jZV9jaGVja21hcmtfXzhIS0Y3OmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcclxcbi5SZWZlcmVuY2VfY29udGFpbmVyX180MTdzZiAuUmVmZXJlbmNlX2NoZWNrbWFya19fOEhLRjc6YWZ0ZXIge1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5SZWZlcmVuY2VfcmVmZXJlbmNlR3JpZF9fQ3liNlUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XFxyXFxuICBncmlkLWdhcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVmZXJlbmNlX3JlZmVyZW5jZUdyaWRfX0N5YjZVID4gZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL1JlZmVyZW5jZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUEsK0NBQStDO0FBQy9DO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBR3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsY0FBUztFQUFULFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2hlY2ttYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcclxcbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXHJcXG4uY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxyXFxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDlweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmZXJlbmNlR3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmZXJlbmNlR3JpZCA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNoZWNrbWFya1wiOiBcIlJlZmVyZW5jZV9jaGVja21hcmtfXzhIS0Y3XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiUmVmZXJlbmNlX2NvbnRhaW5lcl9fNDE3c2ZcIixcblx0XCJyZWZlcmVuY2VHcmlkXCI6IFwiUmVmZXJlbmNlX3JlZmVyZW5jZUdyaWRfX0N5YjZVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./src/components/Reference.module.css\n"));

/***/ })

});