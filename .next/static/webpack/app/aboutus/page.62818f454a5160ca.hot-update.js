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

/***/ "(app-pages-browser)/./src/app/components/screens/aboutus/bannerarea/style.js":
/*!****************************************************************!*\
  !*** ./src/app/components/screens/aboutus/bannerarea/style.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemContainer: function() { return /* binding */ ItemContainer; },\n/* harmony export */   StyledHappyCustomerWrapper: function() { return /* binding */ StyledHappyCustomerWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  background-color: rgba(179, 179, 179, 1);\\n  justify-content: center; /* Center horizontally */\\n  align-items: center; /* Center vertically */\\n\\n  @media (min-width: 768px) {\\n    padding-top: 20px;\\n    padding-left: 20px;\\n    padding-right: 20px;\\n    background-image: url('/images/homepage_bg.png');\\n  }\\n\\n  .title-text {\\n        color: var(--brand-navbar-background-color);\\n        font-size: 8px;\\n        margin-top: 20px;\\n        font-family: 'primary font bold', sans-serif;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n    width: 100%; \\n    padding-left: 15px;\\n    padding-right: 15px;\\n    display: flex !important;\\n    flex-direction: column ;\\n    justify-content: center;\\n    align-items: center;\\n    \\n    .inner-cover-area{\\n        display: flex;\\n        flex-direction: column;\\n        background-image:  url('/images/Rectangle.svg');\\n        background-size: cover;\\n        background-repeat: no-repeat;\\n        width: 158px;\\n        height: 200px;\\n        margin: 10px 96px 0px 96px;\\n        border-radius: 10px;\\n        align-items: center;\\n    }\\n    .book-title {\\n      color: var(--book-title-color);\\n      font-size: 12px;\\n      line-height: 14.44px;\\n      font-family: 'primary font bold', sans-serif;\\n      margin-top: 10px;\\n\\n    }\\n\\n    .book-subtitle {\\n      color: var(--book-subtitle-color);\\n      font-size: 16px;\\n      line-height: 19.53px;\\n      font-family: 'Gayathri font', sans-serif;\\n      font-weight: var(--brand-font-weight-roman);\\n      margin-top: 10px;\\n      text-align: center;\\n      text-transform: capitalize;\\n      margin-bottom: 15px;\\n      margin-right: 40px;\\n      margin-left: 40px;\\n\\n    }\\n\\n    .button-container {\\n      display: flex;\\n      background: var(--brand-navbar-background-color);\\n      width: 119px;\\n      border-radius: 24.5px;\\n      padding: 8px 0px;\\n      margin: 8px 0px 15px;\\n      cursor: pointer;\\n    }\\n\\n    .button-text {\\n      color: var(--brand-yellow-color);\\n      font-size: 8px;\\n      text-align: center;\\n      margin-left: 16px;\\n      font-family: 'primary font bold', sans-serif;\\n      cursor: pointer;\\n    }\\n\\n    @media (min-width: 768px) {\\n      padding: 50px; \\n\\n      .book__img img {\\n        align-items: center;\\n        justify-content: center;\\n        margin-top: 25px;\\n        height: 450px;\\n        width: auto;\\n      }\\n\\n      .book-title {\\n        font-size: 25px;\\n        line-height: 30.8px;\\n        margin-top: 20px;\\n      }\\n\\n      .book-subtitle {\\n\\n        font-size: 16px;\\n        line-height: 19.53px;\\n        margin-top: 10px;\\n        margin-right: 215px;\\n        margin-left: 215px;\\n        text-align: center;\\n        text-transform: capitalize;\\n      }\\n\\n      .button-container {\\n        width: 243px;\\n        padding: 17px 34px;\\n        margin: 18px 0px 0px;\\n      }\\n\\n      .button-text {\\n        font-size: 16px;\\n        line-height: 19.25px;\\n        margin-left: 0px;\\n      }\\n\\n    }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledHappyCustomerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2Fib3V0dXMvYmFubmVyYXJlYS9zdHlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUMvQixNQUFNQyw2QkFBNkJELHlEQUFNQSxDQUFDRSxHQUFHLG9CQXNCbEQ7QUFFSyxNQUFNQyxnQkFBZ0JILHlEQUFNQSxDQUFDRSxHQUFHLHFCQTBHbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvYWJvdXR1cy9iYW5uZXJhcmVhL3N0eWxlLmpzPzY3MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmV4cG9ydCBjb25zdCBTdHlsZWRIYXBweUN1c3RvbWVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OSwgMTc5LCAxNzksIDEpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9ob21lcGFnZV9iZy5wbmcnKTtcbiAgfVxuXG4gIC50aXRsZS10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJyYW5kLW5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250IGJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC5pbm5lci1jb3Zlci1hcmVhe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKCcvaW1hZ2VzL1JlY3RhbmdsZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDE1OHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggOTZweCAwcHggOTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJvb2stdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWJvb2stdGl0bGUtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE0LjQ0cHg7XG4gICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCBib2xkJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICB9XG5cbiAgICAuYm9vay1zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYm9vay1zdWJ0aXRsZS1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTkuNTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2F5YXRocmkgZm9udCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tYnJhbmQtZm9udC13ZWlnaHQtcm9tYW4pO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyYW5kLW5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIHdpZHRoOiAxMTlweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0LjVweDtcbiAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICBtYXJnaW46IDhweCAwcHggMTVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWJyYW5kLXllbGxvdy1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdwcmltYXJ5IGZvbnQgYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nOiA1MHB4OyBcblxuICAgICAgLmJvb2tfX2ltZyBpbWcge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5ib29rLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzAuOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuYm9vay1zdWJ0aXRsZSB7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTkuNTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyNDNweDtcbiAgICAgICAgcGFkZGluZzogMTdweCAzNHB4O1xuICAgICAgICBtYXJnaW46IDE4cHggMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTkuMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIH1cblxuICAgIH1cbiAgYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkSGFwcHlDdXN0b21lcldyYXBwZXIiLCJkaXYiLCJJdGVtQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/screens/aboutus/bannerarea/style.js\n"));

/***/ })

});