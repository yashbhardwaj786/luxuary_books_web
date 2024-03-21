"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/shop/page",{

/***/ "(app-pages-browser)/./src/app/components/screens/shop/marketplace/style.js":
/*!**************************************************************!*\
  !*** ./src/app/components/screens/shop/marketplace/style.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarketPlaceWrapper: function() { return /* binding */ MarketPlaceWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n\\n    .title-text {\\n        font-size: 12px;\\n        font-family: 'primary font bold', sans-serif;\\n        color: var(--black-color);\\n        align-self: center;\\n    }\\n\\n    .selection-container {\\n        display: flex;\\n        flex-direction: row;\\n    }\\n\\n    .select-book {\\n        display: flex;\\n        flex-direction: row;\\n        flex: 1;\\n        margin: 10px 12px 30px 32px ;\\n        padding: 9px 20px;\\n        border-radius: 11.45px;\\n        border: 1px solid var(--black-color);\\n        align-items: center;\\n    }\\n    .select-book-text {\\n        font-size: 8px;\\n        font-family: 'primary font light2', sans-serif;\\n        color: var(--book-subtitle-color);\\n        align-self: center;\\n        flex: 1;\\n        background-image: url('./images/arrowIconMobile.svg');\\n        background-repeat: no-repeat;\\n        background-position: right center;\\n        appearance: none; // Hide default arrow icon\\n        -webkit-appearance: none; // For Safari\\n        -moz-appearance: none;\\n        background-color: transparent;\\n    }\\n\\n    .select-option-text {\\n        font-size: 8px;\\n        font-family: 'primary font light2', sans-serif;\\n        color: var(--book-subtitle-color);\\n\\n    }\\n\\n    .select-country {\\n        display: flex;\\n        flex-direction: row;\\n        flex: 1;\\n        margin: 10px 13px 30px 0px ;\\n        padding: 9px 20px;\\n        border-radius: 11.45px;\\n        border: 1px solid var(--black-color);\\n        align-items: center;\\n    }\\n\\n    .grid-container {\\n        display: grid;\\n        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust width as needed */\\n        gap: 20px;\\n        padding-left: 90px;\\n        padding-right: 90px;\\n    }\\n\\n    .grid-item {\\n        display: flex;\\n        flex-direction: column;\\n        border: 1px solid var(--book-subtitle-color-60);\\n        border-radius: 4.72px;\\n        padding: 10px;\\n    }\\n\\n    .marketplace-image {\\n        margin: 47px;\\n    }\\n\\n    @media (min-width: 768px) {\\n\\n        .title-text {\\n            font-size: 25px;\\n        }\\n\\n        .select-book {\\n            padding: 18px 44px;\\n            border-radius: 24.5px;\\n            margin: 30px 44px 50px 145px;\\n        }\\n\\n        .select-country {\\n            padding: 18px 44px;\\n            border-radius: 24.5px;\\n            margin: 30px 145px 50px 0px;\\n        }\\n\\n        .select-book-text {\\n            font-size: 16px;\\n            background-image: url('./images/arrowIconWeb.svg');\\n            background-repeat: no-repeat;\\n            background-position: right center;\\n        }\\n\\n        .select-option-text {\\n            font-size: 16px;\\n            font-family: 'primary font light2', sans-serif;\\n            color: var(--book-subtitle-color);\\n\\n        }\\n\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst MarketPlaceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW5zL3Nob3AvbWFya2V0cGxhY2Uvc3R5bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUvQixNQUFNQyxxQkFBcUJELHlEQUFNQSxDQUFDRSxHQUFHLG9CQWdIMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvc2hvcC9tYXJrZXRwbGFjZS9zdHlsZS5qcz83YWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBNYXJrZXRQbGFjZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCBib2xkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAuc2VsZWN0LWJvb2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDEwcHggMTJweCAzMHB4IDMycHggO1xuICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEuNDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuc2VsZWN0LWJvb2stdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCBsaWdodDInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9vay1zdWJ0aXRsZS1jb2xvcik7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9hcnJvd0ljb25Nb2JpbGUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgLy8gSGlkZSBkZWZhdWx0IGFycm93IGljb25cbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvLyBGb3IgU2FmYXJpXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdC1vcHRpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCBsaWdodDInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9vay1zdWJ0aXRsZS1jb2xvcik7XG5cbiAgICB9XG5cbiAgICAuc2VsZWN0LWNvdW50cnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDEwcHggMTNweCAzMHB4IDBweCA7XG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMS40NXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpOyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICAgIH1cblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib29rLXN1YnRpdGxlLWNvbG9yLTYwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNC43MnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5tYXJrZXRwbGFjZS1pbWFnZSB7XG4gICAgICAgIG1hcmdpbjogNDdweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0LWJvb2sge1xuICAgICAgICAgICAgcGFkZGluZzogMThweCA0NHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjQuNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDQ0cHggNTBweCAxNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QtY291bnRyeSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDQ0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNC41cHg7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMTQ1cHggNTBweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0LWJvb2stdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2Fycm93SWNvbldlYi5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0LW9wdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250IGxpZ2h0MicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYm9vay1zdWJ0aXRsZS1jb2xvcik7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiTWFya2V0UGxhY2VXcmFwcGVyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/screens/shop/marketplace/style.js\n"));

/***/ })

});