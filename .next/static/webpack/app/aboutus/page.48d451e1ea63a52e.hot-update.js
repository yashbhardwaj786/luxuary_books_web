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

/***/ "(app-pages-browser)/./src/app/components/screens/aboutus/OtherInfo/style.js":
/*!***************************************************************!*\
  !*** ./src/app/components/screens/aboutus/OtherInfo/style.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OtherInfoWrapper: function() { return /* binding */ OtherInfoWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--brand-navbar-background-color);\\n    padding: 23px 31px;\\n    min-height: 136px;\\n    margin-bottom: 30px;\\n\\n    .description{\\n        font-size: 8px;\\n        font-family: 'Gayathri font', sans-serif;\\n        color: var(--brand-navbar-background-color);\\n        text-align: center;\\n        line-height: auto;\\n        color: var(--brand-primary-white-color);\\n    }\\n\\n    .button-container {\\n      display: flex;\\n      background: var(--brand-yellow-color);\\n      border-radius: 9.75px;\\n      padding: 7px 25px;\\n      margin-top: 10px;\\n      cursor: pointer;\\n    }\\n\\n    .button-text {\\n      color: var(--brand-navbar-background-color);\\n      font-size: 6.37px;\\n      cursor: pointer;\\n      font-family: 'primary font bold', sans-serif;\\n    }\\n\\n    @media (min-width: 768px) {\\n        padding: 50px 90px;\\n        min-height: 267px;\\n        margin-bottom: 50px;\\n\\n        .description{\\n            font-size: 16px;\\n            line-height: auto;\\n        }\\n\\n        .button-container {\\n            border-radius: 24.5px;\\n            padding: 18px 49px;\\n            margin-top: 30px;\\n        }\\n\\n        .button-text {\\n            font-size: 16px;\\n            line-height: 19.25px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst OtherInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2Fib3V0dXMvT3RoZXJJbmZvL3N0eWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsTUFBTUMsbUJBQW1CRCx5REFBTUEsQ0FBQ0UsR0FBRyxvQkFzRHhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2Fib3V0dXMvT3RoZXJJbmZvL3N0eWxlLmpzP2RlMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE90aGVySW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1uYXZiYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgcGFkZGluZzogMjNweCAzMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0dheWF0aHJpIGZvbnQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtbmF2YmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS13aGl0ZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXllbGxvdy1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA5Ljc1cHg7XG4gICAgICBwYWRkaW5nOiA3cHggMjVweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1uYXZiYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDYuMzdweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAncHJpbWFyeSBmb250IGJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDkwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI2N3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjQuNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMThweCA0OXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTkuMjVweDtcbiAgICAgICAgfVxuICAgIH1cbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIk90aGVySW5mb1dyYXBwZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/screens/aboutus/OtherInfo/style.js\n"));

/***/ })

});