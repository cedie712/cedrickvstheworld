webpackHotUpdate("static/development/pages/page-two.js",{

/***/ "./components/slides/page-two.js":
/*!***************************************!*\
  !*** ./components/slides/page-two.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageTwo; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contents_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contents/project */ \"./contents/project.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/jed/Projects/cedrickvstheworld2.0/components/slides/page-two.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar PageTwo = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PageTwo, _React$Component);\n\n  var _super = _createSuper(PageTwo);\n\n  function PageTwo() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PageTwo);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PageTwo, [{\n    key: \"mapProject\",\n    value: function mapProject(data, index) {\n      var cardPosition = index % 2 === 0 ? 'left-card' : 'right-card';\n      return __jsx(\"div\", {\n        key: data._id,\n        className: \"col l6 m12 s12 project-card-container \".concat(cardPosition),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"project-card\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"maximize green lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"minimize yellow lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"close red lighten-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"title-bar\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }\n      }, __jsx(\"h6\", {\n        className: \"grey-text text-lighten-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, data.title)), __jsx(\"div\", {\n        className: \"window-workspace-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        id: \"project-card-image-container-\".concat(data._id),\n        className: \"project-card-image-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }\n      }), __jsx(\"div\", {\n        className: \"project-card-image-overlay\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"project-overlay-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        className: \"animate__animated animate__bounceInDown overlay-desc-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }\n      }, __jsx(\"h6\", {\n        className: \"grey-text text-lighten-4 overlay-desc\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 19\n        }\n      }, data.description)), __jsx(\"div\", {\n        className: \"project-read-more\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      }, __jsx(\"h6\", {\n        className: \"animate__animated animate__headShake  animate__delay-3s\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 19\n        }\n      }, __jsx(\"a\", {\n        href: \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 91\n        }\n      }, \"LEARN MORE\"))))))));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // projects\n      var Projects = [];\n\n      for (var i in _contents_project__WEBPACK_IMPORTED_MODULE_6__[\"PROJECT_CARD_CONTENTS\"]) {\n        Projects.push(this.mapProject(_contents_project__WEBPACK_IMPORTED_MODULE_6__[\"PROJECT_CARD_CONTENTS\"][i], parseInt(i)));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"page-two-wrapper\",\n        className: \"container grey-text text-darken-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"slide-content-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      }, __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 19\n        }\n      }, \"my awesome portfolio\")), __jsx(\"p\", {\n        className: \"description\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, \"Adipisicing aliqua irure excepteur ea in do. Cillum fugiat consequat sint deserunt non officia aliquip est quis aute dolore. Nisi dolor ut aute nostrud tempor incididunt officia ut anim ipsum minim irure veniam non.\")), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }, __jsx(\"p\", {\n        className: \"grey-text text-darken-1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }\n      }, \"Anim nostrud do irure dolore dolor nostrud quis. dolore dolor nostrud quis.\")), __jsx(\"div\", {\n        id: \"projects-container\",\n        className: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }\n      }, Projects))), __jsx(\"div\", {\n        id: \"footer-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"footer-end-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        id: \"footer-end-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        id: \"links-container\",\n        className: \"row\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"col s6 col-link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        href: \"https://github.com/cedie712\",\n        rel: \"noopener noreferrer\",\n        target: \"_blank\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 23\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 25\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-github-alt fa-2x white-text link-fa\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 27\n        }\n      }))))), __jsx(\"div\", {\n        className: \"col s6 col-link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        href: \"https://web.facebook.com/cedrick.domingo.75\",\n        rel: \"noopener noreferrer\",\n        target: \"_blank\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 23\n        }\n      }, __jsx(\"div\", {\n        className: \"link-item-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 25\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-facebook-f fa-2x white-text link-fa\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 27\n        }\n      })))))), __jsx(\"div\", {\n        className: \"center center-align\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }\n      }, __jsx(\"p\", {\n        className: \"yellow-text text-lighten-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 19\n        }\n      }, __jsx(\"i\", {\n        className: \"fab fa-google-plus-g \",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 61\n        }\n      }), \"\\xA0cedrickdomingo048@gmail.com\"), __jsx(\"p\", {\n        className: \"grey-text text-darken-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 19\n        }\n      }, \"CEDRICK DOMINGO \", __jsx(\"span\", {\n        className: \"light-blue-text text-lighten-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 74\n        }\n      }, \"\\xA92019\"))))))));\n    }\n  }]);\n\n  return PageTwo;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcy9wYWdlLXR3by5qcz81MDM1Il0sIm5hbWVzIjpbIlBhZ2VUd28iLCJkYXRhIiwiaW5kZXgiLCJjYXJkUG9zaXRpb24iLCJfaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUHJvamVjdHMiLCJpIiwiUFJPSkVDVF9DQVJEX0NPTlRFTlRTIiwicHVzaCIsIm1hcFByb2plY3QiLCJwYXJzZUludCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7K0JBRVJDLEksRUFBTUMsSyxFQUFPO0FBQ3RCLFVBQU1DLFlBQVksR0FBR0QsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLFdBQWxCLEdBQWdDLFlBQXJEO0FBQ0EsYUFDRTtBQUFLLFdBQUcsRUFBRUQsSUFBSSxDQUFDRyxHQUFmO0FBQW9CLGlCQUFTLGtEQUEyQ0QsWUFBM0MsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBR0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQUtFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsRUFRRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTBDO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTFDLG9DQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXVEO0FBQU0saUJBQVMsRUFBQyxnQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdkQsQ0FGRixDQXJCRixDQURGLENBREYsQ0FERixDQWhCRixDQURGO0FBb0REOzs7O0VBbEdrQ00sNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2xpZGVzL3BhZ2UtdHdvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UFJPSkVDVF9DQVJEX0NPTlRFTlRTfSBmcm9tICcuLi8uLi9jb250ZW50cy9wcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVR3byBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBtYXBQcm9qZWN0KGRhdGEsIGluZGV4KSB7XG4gICAgY29uc3QgY2FyZFBvc2l0aW9uID0gaW5kZXggJSAyID09PSAwID8gJ2xlZnQtY2FyZCcgOiAncmlnaHQtY2FyZCdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSBjbGFzc05hbWU9e2Bjb2wgbDYgbTEyIHMxMiBwcm9qZWN0LWNhcmQtY29udGFpbmVyICR7Y2FyZFBvc2l0aW9ufWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4aW1pemUgZ3JlZW4gbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pbWl6ZSB5ZWxsb3cgbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZSByZWQgbGlnaHRlbi0xXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIHRpdGxlIGJhciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhclwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPntkYXRhLnRpdGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIGltYWdlIHByZXZpZXcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctd29ya3NwYWNlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9e2Bwcm9qZWN0LWNhcmQtaW1hZ2UtY29udGFpbmVyLSR7ZGF0YS5faWR9YH0gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWltYWdlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBpbWFnZSBvdmVybGF5ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtaW1hZ2Utb3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtb3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZUluRG93biBvdmVybGF5LWRlc2MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IG92ZXJsYXktZGVzY1wiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXJlYWQtbW9yZVwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2hlYWRTaGFrZSAgYW5pbWF0ZV9fZGVsYXktM3NcIj48YSBocmVmPVwiXCI+TEVBUk4gTU9SRTwvYT48L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBwcm9qZWN0c1xuICAgIGNvbnN0IFByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBQUk9KRUNUX0NBUkRfQ09OVEVOVFMpIHtcbiAgICAgIFByb2plY3RzLnB1c2godGhpcy5tYXBQcm9qZWN0KFBST0pFQ1RfQ0FSRF9DT05URU5UU1tpXSwgcGFyc2VJbnQoaSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD1cInBhZ2UtdHdvLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JleS10ZXh0IHRleHQtZGFya2VuLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+PGI+bXkgYXdlc29tZSBwb3J0Zm9saW88L2I+PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5BZGlwaXNpY2luZyBhbGlxdWEgaXJ1cmUgZXhjZXB0ZXVyIGVhIGluIGRvLiBDaWxsdW0gZnVnaWF0IGNvbnNlcXVhdCBzaW50IGRlc2VydW50IG5vbiBvZmZpY2lhIGFsaXF1aXAgZXN0IHF1aXMgYXV0ZSBkb2xvcmUuIE5pc2kgZG9sb3IgdXQgYXV0ZSBub3N0cnVkIHRlbXBvciBpbmNpZGlkdW50IG9mZmljaWEgdXQgYW5pbSBpcHN1bSBtaW5pbSBpcnVyZSB2ZW5pYW0gbm9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtZGFya2VuLTFcIj5BbmltIG5vc3RydWQgZG8gaXJ1cmUgZG9sb3JlIGRvbG9yIG5vc3RydWQgcXVpcy4gZG9sb3JlIGRvbG9yIG5vc3RydWQgcXVpcy48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAge1Byb2plY3RzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJmb290ZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItZW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1lbmQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaW5rcy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2IGNvbC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2VkaWU3MTJcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1hbHQgZmEtMnggd2hpdGUtdGV4dCBsaW5rLWZhXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgY29sLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS9jZWRyaWNrLmRvbWluZ28uNzVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgZmEtMnggd2hpdGUtdGV4dCBsaW5rLWZhXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWVsbG93LXRleHQgdGV4dC1saWdodGVuLTNcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlLXBsdXMtZyBcIj48L2k+Jm5ic3A7Y2Vkcmlja2RvbWluZ28wNDhAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtZGFya2VuLTJcIj5DRURSSUNLIERPTUlOR08gPHNwYW4gY2xhc3NOYW1lPVwibGlnaHQtYmx1ZS10ZXh0IHRleHQtbGlnaHRlbi0yXCI+wqkyMDE5PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/slides/page-two.js\n");

/***/ })

})