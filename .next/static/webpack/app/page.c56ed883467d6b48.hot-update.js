"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/home/BookJourney/BookJouneyItemOdd/style.js":
/*!************************************************************************!*\
  !*** ./src/app/components/home/BookJourney/BookJouneyItemOdd/style.js ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookJourneyItemWrapper: function() { return /* binding */ BookJourneyItemWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    margin-left: 126px;\\n\\n    .book-image-wrapper{\\n        flex: 1;\\n    }\\n\\n    .book-item-image {\\n        height: 300px;\\n        width: 237px;\\n        margin-top: 121px;\\n    }\\n\\n    .book-details-container {\\n        display: flex;\\n        flex-direction: column;\\n        height: 410px;\\n        width: fit-content;\\n        margin-top: 34px;\\n        margin-left: 80px;\\n        cursor: pointer;\\n        background-repeat: no-repeat;\\n        background-image: url('/images/book_bg_odd_1.png');\\n        background-size: auto 100%;\\n        background-position: right center;\\n    }\\n    .topBgContainer{\\n        background-image: url('/images/WaveOdd.svg');\\n        background-repeat: no-repeat;\\n        margin-left: 70px;\\n    }\\n    .book-journey-title {\\n        font-size: 35px;\\n        font-family: 'primary font', sans-serif;\\n        margin-top: 80px;\\n        margin-left: 25px;\\n        margin-right: 100px;\\n        color: var(--brand-primary-white-color);\\n\\n    }\\n    .book-journey-subtitle {\\n        font-size: 16px;\\n        font-family: 'Gayathri font', sans-serif;\\n        margin-top: 10px;\\n        margin-left: 25px;\\n        margin-right: 106px;\\n        color: var(--brand-primary-white-color);\\n        margin-bottom: 10px;\\n    }\\n\\n    .book-journey-button-container {\\n        display: flex;\\n        height: 49px;\\n        width: 243px;\\n        border-radius: 24.5px;\\n        background-color: var(--brand-yellow-color);\\n        margin-top: 10px;\\n        margin-left: 25px;\\n\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    .book-journey-button-text {\\n        font-size: 16px;\\n        margin-top: 18px;\\n        margin-bottom: 17px;\\n        font-family: 'primary font bold', sans-serif;\\n        color: var(--brand-navbar-background-color);\\n\\n    }\\n\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BookJourneyItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL0Jvb2tKb3VybmV5L0Jvb2tKb3VuZXlJdGVtT2RkL3N0eWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMseUJBQXlCRCx5REFBTUEsQ0FBQ0UsR0FBRyxvQkF5RTlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL0Jvb2tKb3VybmV5L0Jvb2tKb3VuZXlJdGVtT2RkL3N0eWxlLmpzPzRhY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEJvb2tKb3VybmV5SXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDEyNnB4O1xuXG4gICAgLmJvb2staW1hZ2Utd3JhcHBlcntcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYm9vay1pdGVtLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDIzN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMjFweDtcbiAgICB9XG5cbiAgICAuYm9vay1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogNDEwcHg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2Jvb2tfYmdfb2RkXzEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gICAgfVxuICAgIC50b3BCZ0NvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL1dhdmVPZGQuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIH1cbiAgICAuYm9vay1qb3VybmV5LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS13aGl0ZS1jb2xvcik7XG5cbiAgICB9XG4gICAgLmJvb2stam91cm5leS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYXlhdGhyaSBmb250Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTA2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LXdoaXRlLWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYm9vay1qb3VybmV5LWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgIHdpZHRoOiAyNDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjQuNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC15ZWxsb3ctY29sb3IpO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcblxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJvb2stam91cm5leS1idXR0b24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwcmltYXJ5IGZvbnQgYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1uYXZiYXItYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICB9XG5cbiAgICBcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkJvb2tKb3VybmV5SXRlbVdyYXBwZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/home/BookJourney/BookJouneyItemOdd/style.js\n"));

/***/ })

});