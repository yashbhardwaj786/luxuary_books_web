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

/***/ "(app-pages-browser)/./src/app/components/home/bannerarea/index.jsx":
/*!******************************************************!*\
  !*** ./src/app/components/home/bannerarea/index.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slider/index */ \"(app-pages-browser)/./src/app/components/home/Slider/index.jsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"(app-pages-browser)/./src/app/components/home/bannerarea/style.js\");\n/* harmony import */ var _CustomCarousel_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CustomCarousel/index */ \"(app-pages-browser)/./src/app/components/CustomCarousel/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BannerContent(param) {\n    let { bannerData = [] } = param;\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(\"(max-width: 768px)\"); // Adjust the breakpoint as needed\n        setIsMobile(mediaQuery.matches);\n        const handleResize = ()=>{\n            setIsMobile(mediaQuery.matches);\n        };\n        mediaQuery.addListener(handleResize);\n        return ()=>{\n            mediaQuery.removeListener(handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.StyledHappyCustomerWrapper, {\n        children: isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomCarousel_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            scrollWidth: 1,\n            scrollDuration: 100,\n            children: bannerData.map((item, i1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"book__img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.img_url,\n                                alt: \"happy-customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"book-title\",\n                            children: item.book_text\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"book-subtitle\",\n                            children: item.book_subtitle\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"button-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"button-text\",\n                                children: \"Explore the Book\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, i1, true, {\n                    fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 25\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            slidesToShow: 1,\n            slidesToScroll: 1,\n            hideBlur: true,\n            children: bannerData.map((banner)=>{\n                if (!banner) return null;\n                const { bookImage = \"\", title = \"\", description = \"\", cta = {} } = product;\n                const { text = \"\", url = \"\" } = cta;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.ItemContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"book__img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: bookImage,\n                                alt: \"happy-customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 37\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"book-title\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 37\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"book-subtitle\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 37\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"button-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"button-text\",\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 37\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 33\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/components/home/bannerarea/index.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(BannerContent, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n_c = BannerContent;\nvar _c;\n$RefreshReg$(_c, \"BannerContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lcmFyZWEvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBQzhCO0FBQ1o7QUFFeEMsU0FBU08sY0FBYyxLQUFpQjtRQUFqQixFQUFDQyxhQUFhLEVBQUUsRUFBQyxHQUFqQjs7SUFHbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1VLGFBQWFDLE9BQU9DLFVBQVUsQ0FBQyx1QkFBdUIsa0NBQWtDO1FBQzlGSCxZQUFZQyxXQUFXRyxPQUFPO1FBRTlCLE1BQU1DLGVBQWU7WUFDbkJMLFlBQVlDLFdBQVdHLE9BQU87UUFDaEM7UUFFQUgsV0FBV0ssV0FBVyxDQUFDRDtRQUV2QixPQUFPO1lBQ0xKLFdBQVdNLGNBQWMsQ0FBQ0Y7UUFDNUI7SUFDRixHQUFHLEVBQUU7SUFFUCxxQkFFSSw4REFBQ1gsOERBQTBCQTtrQkFFbkJLLHlCQUNBLDhEQUFDSCw2REFBY0E7WUFBQ1ksYUFBYTtZQUFHQyxnQkFBZ0I7c0JBQzNDWCxXQUFXWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsbUJBQ25CLDhEQUFDakIsaURBQWFBOztzQ0FDViw4REFBQ2tCOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDQztnQ0FBSUMsS0FBS0wsS0FBS00sT0FBTztnQ0FBRUMsS0FBSTs7Ozs7Ozs7Ozs7c0NBRWhDLDhEQUFDQzs0QkFBTUwsV0FBVTtzQ0FBY0gsS0FBS1MsU0FBUzs7Ozs7O3NDQUM3Qyw4REFBQ0Q7NEJBQU1MLFdBQVU7c0NBQWlCSCxLQUFLVSxhQUFhOzs7Ozs7c0NBQ3BELDhEQUFDUjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0s7Z0NBQU1MLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7OzttQkFQbkJGOzs7Ozs7Ozs7aUNBZTVCLDhEQUFDbkIscURBQU1BO1lBQUM2QixjQUFjO1lBQUdDLGdCQUFnQjtZQUFHQyxVQUFVO3NCQUNqRDFCLFdBQVdZLEdBQUcsQ0FBQyxDQUFDZTtnQkFDVCxJQUFJLENBQUNBLFFBQVEsT0FBTztnQkFDcEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsRUFBRUMsUUFBUSxFQUFFLEVBQUVDLGNBQWMsRUFBRSxFQUFFQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUdDO2dCQUNuRSxNQUFNLEVBQUNDLE9BQU8sRUFBRSxFQUFFQyxNQUFNLEVBQUUsRUFBQyxHQUFHSDtnQkFDOUIscUJBQ0ksOERBQUNsQyxpREFBYUE7O3NDQUNWLDhEQUFDa0I7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNDO2dDQUFJQyxLQUFLVTtnQ0FBV1IsS0FBSTs7Ozs7Ozs7Ozs7c0NBRTdCLDhEQUFDQzs0QkFBTUwsV0FBVTtzQ0FBY2E7Ozs7OztzQ0FDL0IsOERBQUNSOzRCQUFNTCxXQUFVO3NDQUFpQmM7Ozs7OztzQ0FDbEMsOERBQUNmOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDSztnQ0FBTUwsV0FBVTswQ0FBZWlCOzs7Ozs7Ozs7Ozs7bUJBUHBCbkI7Ozs7O1lBVzVCOzs7Ozs7Ozs7OztBQU14QjtHQWpFd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lcmFyZWEvaW5kZXguanN4P2NkNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyL2luZGV4XCI7XG5pbXBvcnQgeyBTdHlsZWRIYXBweUN1c3RvbWVyV3JhcHBlciwgSXRlbUNvbnRhaW5lciB9IGZyb20gJy4vc3R5bGUnXG5pbXBvcnQgQ3VzdG9tQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vQ3VzdG9tQ2Fyb3VzZWwvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lckNvbnRlbnQoe2Jhbm5lckRhdGEgPSBbXX0pIHtcblxuXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpOyAvLyBBZGp1c3QgdGhlIGJyZWFrcG9pbnQgYXMgbmVlZGVkXG4gICAgICAgIHNldElzTW9iaWxlKG1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICBzZXRJc01vYmlsZShtZWRpYVF1ZXJ5Lm1hdGNoZXMpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZVJlc2l6ZSk7XG4gICAgXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgbWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVSZXNpemUpO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8U3R5bGVkSGFwcHlDdXN0b21lcldyYXBwZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNNb2JpbGUgPyAoXG4gICAgICAgICAgICAgICAgPEN1c3RvbUNhcm91c2VsIHNjcm9sbFdpZHRoPXsxfSBzY3JvbGxEdXJhdGlvbj17MTAwfT5cbiAgICAgICAgICAgICAgICAgICAge2Jhbm5lckRhdGEubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbUNvbnRhaW5lciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ191cmx9IGFsdD1cImhhcHB5LWN1c3RvbWVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYm9vay10aXRsZVwiPntpdGVtLmJvb2tfdGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJib29rLXN1YnRpdGxlXCI+e2l0ZW0uYm9va19zdWJ0aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnV0dG9uLXRleHRcIj5FeHBsb3JlIHRoZSBCb29rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DdXN0b21DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApIDogXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxTbGlkZXIgc2xpZGVzVG9TaG93PXsxfSBzbGlkZXNUb1Njcm9sbD17MX0gaGlkZUJsdXI9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICB7YmFubmVyRGF0YS5tYXAoKGJhbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFubmVyKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYm9va0ltYWdlID0gJycsIHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycsIGN0YSA9IHt9IH0gPSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3RleHQgPSAnJywgdXJsID0gJyd9ID0gY3RhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1Db250YWluZXIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jvb2tJbWFnZX0gYWx0PVwiaGFwcHktY3VzdG9tZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYm9vay10aXRsZVwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJvb2stc3VidGl0bGVcIj57ZGVzY3JpcHRpb259PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPnt0ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9TdHlsZWRIYXBweUN1c3RvbWVyV3JhcHBlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJTdHlsZWRIYXBweUN1c3RvbWVyV3JhcHBlciIsIkl0ZW1Db250YWluZXIiLCJDdXN0b21DYXJvdXNlbCIsIkJhbm5lckNvbnRlbnQiLCJiYW5uZXJEYXRhIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm1lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhhbmRsZVJlc2l6ZSIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJzY3JvbGxXaWR0aCIsInNjcm9sbER1cmF0aW9uIiwibWFwIiwiaXRlbSIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWdfdXJsIiwiYWx0IiwibGFiZWwiLCJib29rX3RleHQiLCJib29rX3N1YnRpdGxlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJoaWRlQmx1ciIsImJhbm5lciIsImJvb2tJbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjdGEiLCJwcm9kdWN0IiwidGV4dCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/home/bannerarea/index.jsx\n"));

/***/ })

});