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

/***/ "(app-pages-browser)/./src/app/pages/room.jsx":
/*!********************************!*\
  !*** ./src/app/pages/room.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ReactPlayer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-player_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-player */ \"(app-pages-browser)/./node_modules/react-player/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"app\\\\pages\\\\room.jsx -> \" + \"react-player\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactPlayer;\nconst Room = ()=>{\n    _s();\n    const [userStream, setUserStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const streamUser = async ()=>{\n        const stream = await navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: true\n        });\n        setUserStream(stream);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: streamUser,\n                class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                children: \"Stream Button\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                    url: userStream,\n                    width: \"1080px\",\n                    height: \"720px\",\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 18\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                    url: \"C:\\\\Users\\\\DELL\\\\Downloads\\\\www_screencapture_com_2024-2-5_20_44\",\n                    width: \"1080px\",\n                    height: \"720px\",\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 18\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                    url: \"https://youtu.be/HrnrqYxYrbk?si=mXCrwTo3-KExT4H5\",\n                    width: \"1080px\",\n                    height: \"720px\",\n                    controls: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 18\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Room, \"PH2FSxtuW8m33T6UtThqhIjOD+I=\");\n_c1 = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactPlayer\");\n$RefreshReg$(_c1, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvcm9vbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1QztBQUNMO0FBQ2xDLE1BQU1HLGNBQWNELHdEQUFPQSxDQUFDLElBQU0sZ1BBQXNCOzs7Ozs7SUFBSUUsS0FBSzs7S0FBM0REO0FBR04sTUFBTUUsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBO0lBRTVDLE1BQU1PLGFBQWE7UUFDZixNQUFNQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO1lBQ3JEQyxPQUFPO1lBQ1BDLE9BQU87UUFDWDtRQUVBUCxjQUFjRTtJQUNsQjtJQUlBLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNDO2dCQUFPQyxTQUFTVDtnQkFBWVUsT0FBTTswQkFBdUU7Ozs7OzswQkFJMUcsOERBQUNIOzBCQUFJLDRFQUFDWjtvQkFBWWdCLEtBQUtiO29CQUNuQmMsT0FBTTtvQkFBU0MsUUFBTztvQkFBUUMsVUFBVTs7Ozs7Ozs7Ozs7MEJBSTVDLDhEQUFDUDswQkFBSSw0RUFBQ1o7b0JBQVlnQixLQUFJO29CQUNsQkMsT0FBTTtvQkFBU0MsUUFBTztvQkFBUUMsVUFBVTs7Ozs7Ozs7Ozs7MEJBRzVDLDhEQUFDUDswQkFBSSw0RUFBQ1o7b0JBQVlnQixLQUFJO29CQUNsQkMsT0FBTTtvQkFBU0MsUUFBTztvQkFBUUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7R0FsQ01qQjtNQUFBQTtBQW9DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL3Jvb20uanN4PzdkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgUmVhY3RQbGF5ZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXBsYXllclwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuXHJcbmNvbnN0IFJvb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0cmVhbSwgc2V0VXNlclN0cmVhbV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHN0cmVhbVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgdmlkZW86IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRVc2VyU3RyZWFtKHN0cmVhbSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdHJlYW1Vc2VyfSBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICBTdHJlYW0gQnV0dG9uXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdj48UmVhY3RQbGF5ZXIgdXJsPXt1c2VyU3RyZWFtfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDgwcHhcIiBoZWlnaHQ9XCI3MjBweFwiIGNvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAvPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+PFJlYWN0UGxheWVyIHVybD0nQzpcXFVzZXJzXFxERUxMXFxEb3dubG9hZHNcXHd3d19zY3JlZW5jYXB0dXJlX2NvbV8yMDI0LTItNV8yMF80NCdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA4MHB4XCIgaGVpZ2h0PVwiNzIwcHhcIiBjb250cm9scz17dHJ1ZX1cclxuICAgICAgICAgICAgLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+PFJlYWN0UGxheWVyIHVybD0naHR0cHM6Ly95b3V0dS5iZS9Icm5ycVl4WXJiaz9zaT1tWENyd1RvMy1LRXhUNEg1J1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDgwcHhcIiBoZWlnaHQ9XCI3MjBweFwiIGNvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIlJlYWN0UGxheWVyIiwic3NyIiwiUm9vbSIsInVzZXJTdHJlYW0iLCJzZXRVc2VyU3RyZWFtIiwic3RyZWFtVXNlciIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRyb2xzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/room.jsx\n"));

/***/ })

});