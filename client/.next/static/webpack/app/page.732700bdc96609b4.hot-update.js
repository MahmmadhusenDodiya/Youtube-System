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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ReactPlayer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-player_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-player */ \"(app-pages-browser)/./node_modules/react-player/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"app\\\\pages\\\\room.jsx -> \" + \"react-player\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactPlayer;\nconst Room = ()=>{\n    _s();\n    const [userStream, setUserStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const callUser = async ()=>{\n        const stream = await navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: true\n        });\n        setUserStream(stream);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n            url: \"https://youtu.be/HrnrqYxYrbk?si=mXCrwTo3-KExT4H5\",\n            width: \"1080px\",\n            height: \"720px\",\n            controls: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Youtube-hld\\\\client\\\\src\\\\app\\\\pages\\\\room.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Room, \"DAtuE6jxgJ0l5MjrRv+Qg07PIJ0=\");\n_c1 = Room;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactPlayer\");\n$RefreshReg$(_c1, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvcm9vbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNxQztBQUNIO0FBQ2xDLE1BQU1HLGNBQWNELHdEQUFPQSxDQUFDLElBQU0sZ1BBQXNCOzs7Ozs7SUFBSUUsS0FBSzs7S0FBM0REO0FBR04sTUFBTUUsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVdDLGNBQWMsR0FBQ04sK0NBQVFBO0lBRXpDLE1BQU1PLFdBQVM7UUFDWCxNQUFNQyxTQUFPLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO1lBQ25EQyxPQUFNO1lBQ05DLE9BQU07UUFDVjtRQUVBUCxjQUFjRTtJQUNsQjtJQUlGLHFCQUNFLDhEQUFDTTtrQkFBSSw0RUFBQ1o7WUFBWWEsS0FBSTtZQUN0QkMsT0FBTTtZQUFTQyxRQUFPO1lBQVFDLFVBQVU7Ozs7Ozs7Ozs7O0FBRzVDO0dBbkJNZDtNQUFBQTtBQXFCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL3Jvb20uanN4PzdkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0ICx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IFJlYWN0UGxheWVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1wbGF5ZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcblxyXG5jb25zdCBSb29tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdHJlYW0sc2V0VXNlclN0cmVhbV09dXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjYWxsVXNlcj1hc3luYygpPT57XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtPWF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgYXVkaW86dHJ1ZSxcclxuICAgICAgICAgICAgdmlkZW86dHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFVzZXJTdHJlYW0oc3RyZWFtKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PjxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvSHJucnFZeFlyYms/c2k9bVhDcndUbzMtS0V4VDRINScgXHJcbiAgICB3aWR0aD1cIjEwODBweFwiIGhlaWdodD1cIjcyMHB4XCIgY29udHJvbHM9e3RydWV9XHJcbiAgICAvPjwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJSZWFjdFBsYXllciIsInNzciIsIlJvb20iLCJ1c2VyU3RyZWFtIiwic2V0VXNlclN0cmVhbSIsImNhbGxVc2VyIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ2aWRlbyIsImRpdiIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/room.jsx\n"));

/***/ })

});