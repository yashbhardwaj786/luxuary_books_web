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

/***/ "(app-pages-browser)/./src/app/components/home/bannerarea/style.js":
/*!*****************************************************!*\
  !*** ./src/app/components/home/bannerarea/style.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemContainer: function() { return /* binding */ ItemContainer; },\n/* harmony export */   StyledHappyCustomerWrapper: function() { return /* binding */ StyledHappyCustomerWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  background-image: url('/images/homepage_bg.png');\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  padding: 20px;\\n  justify-content: center; /* Center horizontally */\\n  align-items: center; /* Center vertically */\\n\\n  @media (min-width: 768px) {\\n    padding: 20px;\\n  }\\n\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n    margin-left: 10px;\\n    display: flex !important;\\n    flex-direction: column ;\\n    justify-content: center;\\n    align-items: center;\\n    \\n    .book__img img {\\n      object-fit: contain;\\n      border-radius: 1.25rem;\\n      width: 100%;\\n      height: 130px;\\n      align-items: center;\\n      justify-content: center;\\n      margin-bottom: 10px;\\n    }\\n    .book-title {\\n      color: var(--book-title-color);\\n      font-size: 12px;\\n      line-height: 14.44px;\\n      font-family: 'primary font', sans-serif;\\n      font-weight: var(--brand-font-weight-medium-dark);\\n      margin-top: 10px;\\n\\n    }\\n\\n    .book-subtitle {\\n      color: var(--book-subtitle-color);\\n      font-size: 16px;\\n      line-height: 19.53px;\\n      font-family: 'Gayathri font', sans-serif;\\n      font-weight: var(--brand-font-weight-roman);\\n      margin-top: 10px;\\n      text-align: center;\\n      text-transform: capitalize;\\n      margin-bottom: 15px;\\n      margin-right: 40px;\\n      margin-left: 40px;\\n\\n    }\\n\\n    .button-container {\\n      background: var(--brand-navbar-background-color);\\n      border-radius: 24.5px;\\n      padding-top: 15px;\\n      padding-bottom: 10px;\\n      padding-left: 30px;\\n      padding-right: 30px;\\n    }\\n\\n    .button-text {\\n      color: var(--brand-yellow-color);\\n      font-size: 16px;\\n      line-height: 19.25px;\\n      font-family: 'primary font', sans-serif;\\n      font-weight: var(--brand-font-weight-medium-dark);\\n    \\n    }\\n\\n    @media (min-width: 768px) {\\n\\n      .book__img img {\\n        height: 200px;\\n        align-items: center;\\n        justify-content: center;\\n      }\\n\\n      .book-title {\\n        font-size: 25px;\\n        line-height: 30.8px;\\n        margin-top: 20px;\\n      }\\n\\n      .book-subtitle {\\n\\n        font-size: 16px;\\n        line-height: 19.53px;\\n        margin-top: 10px;\\n        margin-right: 215px;\\n        margin-left: 215px;\\n        text-align: center;\\n        text-transform: capitalize;\\n        margin-bottom: 15px;\\n      }\\n\\n    }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledHappyCustomerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lcmFyZWEvc3R5bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDL0IsTUFBTUMsNkJBQTZCRCx5REFBTUEsQ0FBQ0UsR0FBRyxvQkFlaEQ7QUFFRyxNQUFNQyxnQkFBZ0JILHlEQUFNQSxDQUFDRSxHQUFHLHFCQXVGbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvYmFubmVyYXJlYS9zdHlsZS5qcz9hOThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5leHBvcnQgY29uc3QgU3R5bGVkSGFwcHlDdXN0b21lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2hvbWVwYWdlX2JnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICBgO1xuXG5leHBvcnQgY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAuYm9va19faW1nIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5ib29rLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ib29rLXRpdGxlLWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNC40NHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdwcmltYXJ5IGZvbnQnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWJyYW5kLWZvbnQtd2VpZ2h0LW1lZGl1bS1kYXJrKTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICB9XG5cbiAgICAuYm9vay1zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYm9vay1zdWJ0aXRsZS1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTkuNTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2F5YXRocmkgZm9udCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tYnJhbmQtZm9udC13ZWlnaHQtcm9tYW4pO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtbmF2YmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjQuNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC15ZWxsb3ctY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5LjI1cHg7XG4gICAgICBmb250LWZhbWlseTogJ3ByaW1hcnkgZm9udCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tYnJhbmQtZm9udC13ZWlnaHQtbWVkaXVtLWRhcmspO1xuICAgIFxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgICAuYm9va19faW1nIGltZyB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuYm9vay10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwLjhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmJvb2stc3VidGl0bGUge1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5LjUzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgIH1cbiAgYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkSGFwcHlDdXN0b21lcldyYXBwZXIiLCJkaXYiLCJJdGVtQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/home/bannerarea/style.js\n"));

/***/ })

});