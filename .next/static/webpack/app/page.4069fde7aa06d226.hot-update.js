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

/***/ "(app-pages-browser)/./src/app/components/home/BookJourney/BookJouneyItemEven/style.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/BookJourney/BookJouneyItemEven/style.js ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookJourneyItemWrapperEven: function() { return /* binding */ BookJourneyItemWrapperEven; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    margin-right: 126px;\\n\\n    .book-image-wrapper{\\n        flex: 1;\\n    }\\n\\n    .book-item-image {\\n        height: 300px;\\n        width: 237px;\\n        margin-top: 121px;\\n    }\\n\\n    .book-details-container {\\n        display: flex;\\n        flex-direction: column;\\n        height: 410px;\\n        width: fit-content;\\n        margin-top: 34px;\\n        margin-right: 100px;\\n        background-repeat: no-repeat;\\n        background-image: url('/images/book_bg_even1.png');\\n        background-size: auto 100%;\\n        background-position: left center;\\n    }\\n    .topBgContainer{\\n        display: flex;\\n        /* background-image: url('/images/WaveEven.svg');\\n        background-repeat: no-repeat; */\\n        /* margin-left: 400px; */\\n    }\\n    .book-journey-title {\\n        font-size: 35px;\\n        font-family: 'primary font', sans-serif;\\n        margin-top: 80px;\\n        margin-right: 25px;\\n        margin-left: 100px;\\n        color: var(--brand-primary-white-color);\\n\\n    }\\n    .book-journey-subtitle {\\n        font-size: 16px;\\n        font-family: 'Gayathri font', sans-serif;\\n        margin-top: 10px;\\n        margin-right: 125px;\\n        margin-left: 100px;\\n        color: var(--brand-primary-white-color);\\n        margin-bottom: 10px;\\n    }\\n\\n    .book-journey-button-container {\\n        display: flex;\\n        height: 49px;\\n        width: 243px;\\n        border-radius: 24.5px;\\n        background-color: var(--brand-yellow-color);\\n        margin-top: 10px;\\n        margin-left: 100px;\\n\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    .book-journey-button-text {\\n        font-size: 16px;\\n        margin-top: 18px;\\n        margin-bottom: 17px;\\n        font-family: 'primary font bold', sans-serif;\\n        color: var(--brand-navbar-background-color);\\n\\n    }\\n\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BookJourneyItemWrapperEven = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL0Jvb2tKb3VybmV5L0Jvb2tKb3VuZXlJdGVtRXZlbi9zdHlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLDZCQUE2QkQseURBQU1BLENBQUNFLEdBQUcsb0JBeUVsRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9Cb29rSm91cm5leS9Cb29rSm91bmV5SXRlbUV2ZW4vc3R5bGUuanM/MmFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQm9va0pvdXJuZXlJdGVtV3JhcHBlckV2ZW4gPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjZweDtcblxuICAgIC5ib29rLWltYWdlLXdyYXBwZXJ7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmJvb2staXRlbS1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAyMzdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTIxcHg7XG4gICAgfVxuXG4gICAgLmJvb2stZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDQxMHB4O1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDM0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9ib29rX2JnX2V2ZW4xLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgfVxuICAgIC50b3BCZ0NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL1dhdmVFdmVuLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogNDAwcHg7ICovXG4gICAgfVxuICAgIC5ib29rLWpvdXJuZXktdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LXdoaXRlLWNvbG9yKTtcblxuICAgIH1cbiAgICAuYm9vay1qb3VybmV5LXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0dheWF0aHJpIGZvbnQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LXdoaXRlLWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYm9vay1qb3VybmV5LWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgIHdpZHRoOiAyNDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjQuNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC15ZWxsb3ctY29sb3IpO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG5cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5ib29rLWpvdXJuZXktYnV0dG9uLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250IGJvbGQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtbmF2YmFyLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgfVxuXG4gICAgXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCb29rSm91cm5leUl0ZW1XcmFwcGVyRXZlbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/home/BookJourney/BookJouneyItemEven/style.js\n"));

/***/ })

});