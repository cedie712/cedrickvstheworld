webpackHotUpdate("static/development/pages/page-two.js",{

/***/ "./components/slides/page-two.js":
/*!***************************************!*\
  !*** ./components/slides/page-two.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageTwo; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contents_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contents/project */ \"./contents/project.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/jed/Projects/cedrickvstheworld2.0/components/slides/page-two.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar PageTwo = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PageTwo, _React$Component);\n\n  var _super = _createSuper(PageTwo);\n\n  function PageTwo() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PageTwo);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PageTwo, [{\n    key: \"mapProject\",\n    value: function mapProject(data, index) {\n      var cardPosition = index % 2 === 0 ? 'left-card' : 'right-card';\n      return __jsx(\"div\", {\n        key: data._id,\n        className: \"col l6 m12 s12 project-card-container \".concat(cardPosition),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"project-card\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"maximize green lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"minimize yellow lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"close red lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"title-bar\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }\n      }, __jsx(\"h6\", {\n        className: \"grey-text text-lighten-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, data.title)), __jsx(\"div\", {\n        className: \"window-workspace-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        id: \"project-card-image-container-\".concat(data._id),\n        className: \"project-card-image-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }\n      }), __jsx(\"div\", {\n        className: \"project-card-image-overlay\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"project-overlay-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        className: \"animate__animated animate__bounceInDown overlay-desc-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }\n      }, __jsx(\"h6\", {\n        className: \"grey-text text-lighten-4 overlay-desc\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 19\n        }\n      }, data.description)), __jsx(\"div\", {\n        className: \"project-read-more\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      }, __jsx(\"h6\", {\n        className: \"animate__animated animate__headShake  animate__delay-3s\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 19\n        }\n      }, __jsx(\"a\", {\n        href: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 91\n        }\n      }, \"LEARN MORE\"))))))));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // projects\n      var Projects = [];\n\n      for (var i in _contents_project__WEBPACK_IMPORTED_MODULE_6__[\"PROJECT_CARD_CONTENTS\"]) {\n        Projects.push(this.mapProject(_contents_project__WEBPACK_IMPORTED_MODULE_6__[\"PROJECT_CARD_CONTENTS\"][i], parseInt(i)));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"page-two-wrapper\",\n        className: \"container grey-text text-darken-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"slide-content-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(\"h4\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 19\n        }\n      }, \"my awesome portfolio\")), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, \"Adipisicing aliqua irure excepteur ea in do. Cillum fugiat consequat sint deserunt non officia aliquip est quis aute dolore. Nisi dolor ut aute nostrud tempor incididunt officia ut anim ipsum minim irure veniam non.\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }, __jsx(\"p\", {\n        className: \"grey-text text-darken-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }\n      }, \"Anim nostrud do irure dolore dolor nostrud quis. dolore dolor nostrud quis.\")), __jsx(\"div\", {\n        id: \"projects-container\",\n        className: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }\n      }, Projects))), __jsx(\"div\", {\n        id: \"footer-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"footer-end-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        id: \"footer-end-wrapper\",\n        className: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        id: \"links-container\",\n        className: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"col s6 col-link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        href: \"https://github.com/cedie712\",\n        rel: \"noopener noreferrer\",\n        target: \"_blank\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 23\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 25\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-github-alt fa-2x white-text link-fa\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 27\n        }\n      }))))), __jsx(\"div\", {\n        className: \"col s6 col-link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        href: \"https://web.facebook.com/cedrick.domingo.75\",\n        rel: \"noopener noreferrer\",\n        target: \"_blank\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 23\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 25\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-facebook-f fa-2x white-text link-fa\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 27\n        }\n      })))))), __jsx(\"div\", {\n        className: \"center center-align\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }\n      }, __jsx(\"p\", {\n        className: \"yellow-text text-lighten-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 19\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-google-plus-g \",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 61\n        }\n      }), \"\\xA0cedrickdomingo048@gmail.com\"), __jsx(\"p\", {\n        className: \"grey-text text-darken-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 19\n        }\n      }, \"CEDRICK DOMINGO \", __jsx(\"span\", {\n        className: \"light-blue-text\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 74\n        }\n      }, \"\\xA92020\"))))))));\n    }\n  }]);\n\n  return PageTwo;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLXR3by5qcz81MDM1Il0sIm5hbWVzIjpbIlBhZ2VUd28iLCJkYXRhIiwiaW5kZXgiLCJjYXJkUG9zaXRpb24iLCJfaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUHJvamVjdHMiLCJpIiwiUFJPSkVDVF9DQVJEX0NPTlRFTlRTIiwicHVzaCIsIm1hcFByb2plY3QiLCJwYXJzZUludCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7K0JBRVJDLEksRUFBTUMsSyxFQUFPO0FBQ3RCLFVBQU1DLFlBQVksR0FBR0QsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLFdBQWxCLEdBQWdDLFlBQXJEO0FBQ0EsYUFDRTtBQUFLLFdBQUcsRUFBRUQsSUFBSSxDQUFDRyxHQUFmO0FBQW9CLGlCQUFTLGtEQUEyQ0QsWUFBM0MsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBR0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQUtFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsRUFRRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEM7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBMUMsb0NBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBdUQ7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF2RCxDQUZGLENBckJGLENBREYsQ0FERixDQURGLENBaEJGLENBREY7QUFvREQ7Ozs7RUFsR2tDTSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zbGlkZXMvcGFnZS10d28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQUk9KRUNUX0NBUkRfQ09OVEVOVFN9IGZyb20gJy4uLy4uL2NvbnRlbnRzL3Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIG1hcFByb2plY3QoZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBjYXJkUG9zaXRpb24gPSBpbmRleCAlIDIgPT09IDAgPyAnbGVmdC1jYXJkJyA6ICdyaWdodC1jYXJkJ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17ZGF0YS5faWR9IGNsYXNzTmFtZT17YGNvbCBsNiBtMTIgczEyIHByb2plY3QtY2FyZC1jb250YWluZXIgJHtjYXJkUG9zaXRpb259YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXhpbWl6ZSBncmVlbiBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmltaXplIHllbGxvdyBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlIHJlZCBsaWdodGVuLTFcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogdGl0bGUgYmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyXCI+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+e2RhdGEudGl0bGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogaW1hZ2UgcHJldmlldyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvdy13b3Jrc3BhY2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBpZD17YHByb2plY3QtY2FyZC1pbWFnZS1jb250YWluZXItJHtkYXRhLl9pZH1gfSBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtaW1hZ2UtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGltYWdlIG92ZXJsYXkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1pbWFnZS1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1vdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW5Eb3duIG92ZXJsYXktZGVzYy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTQgb3ZlcmxheS1kZXNjXCI+e2RhdGEuZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcmVhZC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9faGVhZFNoYWtlICBhbmltYXRlX19kZWxheS0zc1wiPjxhIGhyZWY9XCJcIj5MRUFSTiBNT1JFPC9hPjwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHByb2plY3RzXG4gICAgY29uc3QgUHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIFBST0pFQ1RfQ0FSRF9DT05URU5UUykge1xuICAgICAgUHJvamVjdHMucHVzaCh0aGlzLm1hcFByb2plY3QoUFJPSkVDVF9DQVJEX0NPTlRFTlRTW2ldLCBwYXJzZUludChpKSkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGFnZS10d28td3JhcHBlclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmV5LXRleHQgdGV4dC1kYXJrZW4tM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND48Yj5teSBhd2Vzb21lIHBvcnRmb2xpbzwvYj48L2g0PlxuICAgICAgICAgICAgICA8cCA+QWRpcGlzaWNpbmcgYWxpcXVhIGlydXJlIGV4Y2VwdGV1ciBlYSBpbiBkby4gQ2lsbHVtIGZ1Z2lhdCBjb25zZXF1YXQgc2ludCBkZXNlcnVudCBub24gb2ZmaWNpYSBhbGlxdWlwIGVzdCBxdWlzIGF1dGUgZG9sb3JlLiBOaXNpIGRvbG9yIHV0IGF1dGUgbm9zdHJ1ZCB0ZW1wb3IgaW5jaWRpZHVudCBvZmZpY2lhIHV0IGFuaW0gaXBzdW0gbWluaW0gaXJ1cmUgdmVuaWFtIG5vbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCI+QW5pbSBub3N0cnVkIGRvIGlydXJlIGRvbG9yZSBkb2xvciBub3N0cnVkIHF1aXMuIGRvbG9yZSBkb2xvciBub3N0cnVkIHF1aXMuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHtQcm9qZWN0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWVuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItZW5kLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlua3MtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBjb2wtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NlZGllNzEyXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItYWx0IGZhLTJ4IHdoaXRlLXRleHQgbGluay1mYVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2IGNvbC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYi5mYWNlYm9vay5jb20vY2Vkcmljay5kb21pbmdvLjc1XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mIGZhLTJ4IHdoaXRlLXRleHQgbGluay1mYVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInllbGxvdy10ZXh0IHRleHQtbGlnaHRlbi0zXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZS1wbHVzLWcgXCI+PC9pPiZuYnNwO2NlZHJpY2tkb21pbmdvMDQ4QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+Q0VEUklDSyBET01JTkdPIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0LWJsdWUtdGV4dFwiPsKpMjAyMDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/slides/page-two.js\n");

/***/ })

})