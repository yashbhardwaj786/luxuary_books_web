"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/aboutus/page",{

/***/ "(app-pages-browser)/./src/app/components/screens/aboutus/testimonials/style.js":
/*!******************************************************************!*\
  !*** ./src/app/components/screens/aboutus/testimonials/style.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TestiMonialsWrapper: function() { return /* binding */ TestiMonialsWrapper; },\n/* harmony export */   TestimonialItem: function() { return /* binding */ TestimonialItem; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgba(179, 179, 179, 1);\\n    padding: 20px;\\n    justify-content: center;\\n    align-items: center; /* Center vertically */\\n    width: auto;\\n\\n    .title-text {\\n        color: var(--brand-navbar-background-color);\\n        font-size: 8px;\\n        font-family: 'primary font bold', sans-serif;\\n    }\\n\\n    @media (min-width: 768px) {\\n        padding: 50px;\\n        \\n        .title-text {\\n            font-size: 25px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 100%; \\n    padding-left: 15px;\\n    padding-right: 15px;\\n    display: flex !important;\\n    flex-direction: column ;\\n    justify-content: center;\\n    align-items: center;\\n\\n\\n    .inner-cover-area{\\n\\n        width: auto;\\n        max-width: 230px;\\n        align-items: center;\\n        justify-content: center;\\n        margin: 10px 20px 20px 20px;\\n        display: flex;\\n        border-radius: 3.98px;\\n        flex-direction: column;\\n        background-image:  url('/images/Rectangle.svg');\\n        background-size: cover;\\n        background-repeat: no-repeat;\\n    }\\n\\n    .review-title {\\n      color: var(--black-color);\\n      font-size: 8px;\\n      font-family: 'Gayathri font', sans-serif;\\n      text-align: center;\\n      z-index: 1;\\n      margin-top: 5px;\\n\\n    }\\n\\n    .quote-image {\\n        margin-top: -52px;\\n        margin-right: -11px;\\n    }\\n\\n    .text-container {\\n        display: flex;\\n        flex-direction: row;\\n        margin: 10px 13px;\\n    }\\n\\n    .user-info-container {\\n        display: flex;\\n        flex-direction: row;\\n        margin-bottom: 10px;\\n\\n    }\\n\\n    .user-image{\\n        height: 20px;\\n        width: 20px;\\n    }\\n\\n    .about-user{\\n        display: flex;\\n        flex-direction: column;\\n        margin-top: 5px;\\n        margin-left: 4px;\\n    }\\n\\n    .user-name {\\n      color: var(--book-title-color);\\n      font-size: 8px;\\n      font-family: 'primary font light2', sans-serif;\\n      \\n    }\\n\\n    .user-occupation {\\n      color: var(--book-title-color);\\n      font-size: 3px;\\n      font-family: 'primary font light2', sans-serif;\\n      margin-top: 2px;\\n    }\\n\\n\\n    \\n\\n    @media (min-width: 768px) {\\n        padding: 50px; \\n        \\n        .inner-cover-area{\\n            max-width: 700px;\\n            background-image:  url('/images/Rectangle.svg');\\n            margin: 13px 162px 0px 177px;\\n            border-radius: 20px;\\n            padding: 30px;\\n        }\\n\\n        .review-title {\\n            font-size: 16px;\\n            margin-left: 2px;\\n            margin-top: 5px;\\n        }\\n\\n        .text-container {\\n            display: flex;\\n            flex-direction: row;\\n            margin: 20px 47px;\\n        }\\n        .quote-image {\\n            margin-top: -105px;\\n            margin-right: -22px;\\n        }\\n        .user-info-container {\\n            margin-bottom: 30px;\\n\\n        }\\n        .user-image{\\n            height: 50px;\\n            width: 50px;\\n        }\\n        .about-user{\\n            margin-top: 8px;\\n            margin-left: 10px;\\n        }\\n        .user-name {\\n            font-size: 16px;\\n        }\\n\\n        .user-occupation {\\n            font-size: 8px;\\n            \\n        }\\n        \\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst TestiMonialsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst TestimonialItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2Fib3V0dXMvdGVzdGltb25pYWxzL3N0eWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLHNCQUFzQkQseURBQU1BLENBQUNFLEdBQUcsb0JBc0IzQztBQUVLLE1BQU1DLGtCQUFrQkgseURBQU1BLENBQUNFLEdBQUcscUJBa0l2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2NyZWVucy9hYm91dHVzL3Rlc3RpbW9uaWFscy9zdHlsZS5qcz8wYTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBUZXN0aU1vbmlhbHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzksIDE3OSwgMTc5LCAxKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXG4gICAgd2lkdGg6IGF1dG87XG5cbiAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1uYXZiYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCBib2xkJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgXG4gICAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICAgLmlubmVyLWNvdmVyLWFyZWF7XG5cbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMuOThweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnL2ltYWdlcy9SZWN0YW5nbGUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLnJldmlldy10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICBmb250LWZhbWlseTogJ0dheWF0aHJpIGZvbnQnLCBzYW5zLXNlcmlmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgIH1cblxuICAgIC5xdW90ZS1pbWFnZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01MnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMXB4O1xuICAgIH1cblxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbjogMTBweCAxM3B4O1xuICAgIH1cblxuICAgIC51c2VyLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIH1cblxuICAgIC51c2VyLWltYWdle1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cblxuICAgIC5hYm91dC11c2Vye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYm9vay10aXRsZS1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250IGxpZ2h0MicsIHNhbnMtc2VyaWY7XG4gICAgICBcbiAgICB9XG5cbiAgICAudXNlci1vY2N1cGF0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ib29rLXRpdGxlLWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogM3B4O1xuICAgICAgZm9udC1mYW1pbHk6ICdwcmltYXJ5IGZvbnQgbGlnaHQyJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cblxuICAgIFxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7IFxuICAgICAgICBcbiAgICAgICAgLmlubmVyLWNvdmVyLWFyZWF7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnL2ltYWdlcy9SZWN0YW5nbGUuc3ZnJyk7XG4gICAgICAgICAgICBtYXJnaW46IDEzcHggMTYycHggMHB4IDE3N3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmV2aWV3LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggNDdweDtcbiAgICAgICAgfVxuICAgICAgICAucXVvdGUtaW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYWJvdXQtdXNlcntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItb2NjdXBhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlRlc3RpTW9uaWFsc1dyYXBwZXIiLCJkaXYiLCJUZXN0aW1vbmlhbEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/screens/aboutus/testimonials/style.js\n"));

/***/ })

});