"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst butter = __webpack_require__(/*! buttercms */ \"buttercms\")(\"69cb07d577457e0eb1ac7e197b31e4f94eb41825\");\nasync function getStaticProps() {\n    const res = await butter.content.retrieve([\n        \"cookies\"\n    ], {\n        order: \"name\"\n    });\n    const { data  } = await res.data;\n    const all = data.cookies;\n    return {\n        props: {\n            cookies: all\n        }\n    };\n}\nconst cookies = ({ cookies: cookies1  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Shop\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://app.snipcart.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://cdn.snipcart.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"container fixed inset-x-0 top-0 bg-white mb-32 z-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl md:text-3xl m-2 md:m-5 font-bold font-mono text-green-700\",\n                                children: [\n                                    \"PHONE-MALL\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"float-right text-l md:text-2xl rounded-lg bg-transparent hover:bg-purple-300 text-purple-700 p-1 snipcart-checkout title\",\n                                        children: [\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"float-left\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiShoppingBag, {\n                                                    size: 25\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 183\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 154\n                                            }, undefined),\n                                            \" View\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                className: \"style-eight\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid place-items-center mt-32 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4\",\n                        children: cookies1.map((cookies2)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" relative mb-10 max-w-sm rounded shadow-lg hover:shadow-xl h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: cookies2.image,\n                                        alt: `${cookies2.name}`,\n                                        className: \"w-full\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-6 py-4 \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-2xl mb-5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-purple-700 font-bold uppercase\",\n                                                    children: [\n                                                        cookies2.name,\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"float-right text-green-700\",\n                                                            children: [\n                                                                \" $\",\n                                                                cookies2.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"flex-1\",\n                                                children: cookies2.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 65\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 71\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 77\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 sm:w-52 btn flex-1 text-xl bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent items-center rounded justify-self-center mt-10 snipcart-add-item\",\n                                                \"data-item-id\": cookies2.id,\n                                                \"data-item-image\": cookies2.image,\n                                                \"data-item-name\": cookies2.name,\n                                                \"data-item-url\": \"/\",\n                                                \"data-item-description\": cookies2.description,\n                                                \"data-item-price\": cookies2.price,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"float-left\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdAddShoppingCart, {\n                                                            size: 25\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 48\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    \"Add To Cart\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, cookies2.id, true, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        )\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                hidden: true,\n                id: \"snipcart\",\n                \"data-api-key\": \"OTYwMzkxMzktOWYyNy00NWY3LTlmMGYtOTFhOTJkYjM0OTI0NjM3OTE4MjY5OTY4OTQ1Njcy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Local Api\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookies);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXOzs7Ozt5REFBSzs0Q0FBQSxHQUFDOzBEQUFBLDhEQUFDQyxJQUFFOzs7O3lEQUFHOzBEQUFBLDhEQUFDQSxJQUFFOzs7O3lEQUFHOzBEQUFBLDhEQUFDQSxJQUFFOzs7O3lEQUFHOzBEQUNsRSw4REFBQ0MsUUFBTTtnREFBQ2xCLFNBQVMsRUFBQyx1U0FJK0M7Z0RBQy9EbUIsY0FBWSxFQUFFMUIsUUFBTyxDQUFDMkIsRUFBRTtnREFDeEJDLGlCQUFlLEVBQUU1QixRQUFPLENBQUNpQixLQUFLO2dEQUM5QlksZ0JBQWMsRUFBRTdCLFFBQU8sQ0FBQ21CLElBQUk7Z0RBQzVCVyxlQUFhLEVBQUMsR0FBRztnREFDakJDLHVCQUFxQixFQUFFL0IsUUFBTyxDQUFDdUIsV0FBVztnREFDMUNTLGlCQUFlLEVBQUVoQyxRQUFPLENBQUNxQixLQUFLOztrRUFFOUIsOERBQUNYLE1BQUk7d0RBQUNILFNBQVMsRUFBQyxZQUFZO2tFQUFDLDRFQUFDbEIsNkRBQWlCOzREQUFDc0IsSUFBSSxFQUFFLEVBQUU7Ozs7O3FFQUFJOzs7OztpRUFBTztvREFBQSxhQUVyRTs7Ozs7O3lEQUFTOzs7Ozs7aURBQ0w7OytCQXhCRVgsUUFBTyxDQUFDMkIsRUFBRTs7Ozt5Q0F5QmQ7d0JBQ1AsQ0FBQzs7Ozs7aUNBQ0U7Ozs7Ozt5QkFDRDswQkFDUCw4REFBQ3ZDLG9EQUFNO2dCQUFDNEIsR0FBRyxFQUFDLDREQUE0RDs7Ozs7eUJBQUc7MEJBQzNFLDhEQUFDSCxLQUFHO2dCQUFDb0IsTUFBTTtnQkFBQ04sRUFBRSxFQUFDLFVBQVU7Z0JBQUNPLGNBQVksRUFBQywwRUFBMEU7Ozs7O3lCQUFPOztvQkFDdkgsQ0FDSjtDQUNGO0FBRUQsaUVBQWVsQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCc7XHJcbmltcG9ydCB7IE1kQWRkU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgeyBGaVNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5cclxuXHJcbmNvbnN0IGJ1dHRlciA9IHJlcXVpcmUoJ2J1dHRlcmNtcycpKCc2OWNiMDdkNTc3NDU3ZTBlYjFhYzdlMTk3YjMxZTRmOTRlYjQxODI1Jyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGJ1dHRlci5jb250ZW50LnJldHJpZXZlKFtcImNvb2tpZXNcIl0sIHtcclxuICAgIG9yZGVyOiBcIm5hbWVcIixcclxuICB9KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gIGNvbnN0IGFsbCA9IGRhdGEuY29va2llcztcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29va2llczogYWxsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29va2llcyA9ICh7IGNvb2tpZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2hvcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2FwcC5zbmlwY2FydC5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9jZG4uc25pcGNhcnQuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS90aGVtZXMvdjMuMi4wL2RlZmF1bHQvc25pcGNhcnQuY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmaXhlZCBpbnNldC14LTAgdG9wLTAgYmctd2hpdGUgbWItMzIgei0xMFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0zeGwgbS0yIG1kOm0tNSBmb250LWJvbGQgZm9udC1tb25vIHRleHQtZ3JlZW4tNzAwXCI+UEhPTkUtTUFMTFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB0ZXh0LWwgbWQ6dGV4dC0yeGwgcm91bmRlZC1sZyBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1wdXJwbGUtMzAwIHRleHQtcHVycGxlLTcwMCBwLTEgc25pcGNhcnQtY2hlY2tvdXQgdGl0bGVcIj4gIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj48RmlTaG9wcGluZ0JhZyBzaXplPXsyNX0gLz48L3NwYW4+IFZpZXc8L3NwYW4+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInN0eWxlLWVpZ2h0XCIgLz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG10LTMyIGdhcC0xMCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyAyeGw6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgIHtjb29raWVzLm1hcChjb29raWVzID0+IChcclxuXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtjb29raWVzLmlkfSBjbGFzc05hbWU9JyByZWxhdGl2ZSBtYi0xMCBtYXgtdy1zbSByb3VuZGVkIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y29va2llcy5pbWFnZX0gYWx0PXtgJHtjb29raWVzLm5hbWV9YH0gY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNCBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNzAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj57Y29va2llcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHRleHQtZ3JlZW4tNzAwXCI+ICR7Y29va2llcy5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleC0xJz57Y29va2llcy5kZXNjcmlwdGlvbn08L3A+IDxiciAvPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMTAgbGVmdC0xLzIgdHJhbnNmb3JtIFxyXG4gICAgICAgICAgICAgICAgLXRyYW5zbGF0ZS14LTEvMiB3LTY0IHNtOnctNTIgYnRuIGZsZXgtMSB0ZXh0LXhsIFxyXG4gICAgICAgICAgICAgICAgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctcHVycGxlLTUwMCB0ZXh0LXB1cnBsZS03MDAgZm9udC1zZW1pYm9sZCBcclxuICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItcHVycGxlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXHJcbiAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXIgcm91bmRlZCBqdXN0aWZ5LXNlbGYtY2VudGVyIG10LTEwIHNuaXBjYXJ0LWFkZC1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtLWlkPXtjb29raWVzLmlkfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e2Nvb2tpZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbS1uYW1lPXtjb29raWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbS11cmw9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1pdGVtLWRlc2NyaXB0aW9uPXtjb29raWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tcHJpY2U9e2Nvb2tpZXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj48TWRBZGRTaG9wcGluZ0NhcnQgc2l6ZT17MjV9IC8+PC9zcGFuPkFkZCBUbyBDYXJ0XHJcblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5zbmlwY2FydC5jb20vdGhlbWVzL3YzLjIuMC9kZWZhdWx0L3NuaXBjYXJ0LmpzXCIgLz5cclxuICAgICAgPGRpdiBoaWRkZW4gaWQ9XCJzbmlwY2FydFwiIGRhdGEtYXBpLWtleT1cIk9UWXdNemt4TXprdE9XWXlOeTAwTldZM0xUbG1NR1l0T1RGaE9USmtZak0wT1RJME5qTTNPVEU0TWpZNU9UWTRPVFExTmpjeVwiPjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb29raWVzOyJdLCJuYW1lcyI6WyJIZWFkIiwiU2NyaXB0IiwiTWRBZGRTaG9wcGluZ0NhcnQiLCJGaVNob3BwaW5nQmFnIiwiYnV0dGVyIiwicmVxdWlyZSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiY29udGVudCIsInJldHJpZXZlIiwib3JkZXIiLCJkYXRhIiwiYWxsIiwiY29va2llcyIsInByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJuYXYiLCJoMSIsInNwYW4iLCJzaXplIiwiaHIiLCJkaXYiLCJtYXAiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyIsInByaWNlIiwicCIsImRlc2NyaXB0aW9uIiwiYnIiLCJidXR0b24iLCJkYXRhLWl0ZW0taWQiLCJpZCIsImRhdGEtaXRlbS1pbWFnZSIsImRhdGEtaXRlbS1uYW1lIiwiZGF0YS1pdGVtLXVybCIsImRhdGEtaXRlbS1kZXNjcmlwdGlvbiIsImRhdGEtaXRlbS1wcmljZSIsImhpZGRlbiIsImRhdGEtYXBpLWtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "buttercms":
/*!****************************!*\
  !*** external "buttercms" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("buttercms");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();