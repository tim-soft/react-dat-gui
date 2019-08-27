webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ReactDatGui.js":
/*!***********************************!*\
  !*** ./components/ReactDatGui.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dat_gui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dat-gui */ "../dist/index.es.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");








var _jsxFileName = "C:\\Users\\Tim\\Desktop\\react-dat-gui\\example\\components\\ReactDatGui.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



/**
 * Demonstrates presets that extend the default preset (initial state)
 * as well as presets which extend the current state
 */

var DatGUI =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DatGUI, _Component);

  function DatGUI() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatGUI);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DatGUI).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleButtonClick", function () {
      return _this.setState(function (prevState) {
        return {
          data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.data, {
            random: Math.random()
          })
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUpdate", function (newData) {
      return _this.setState(function (prevState) {
        return {
          data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.data, newData)
        };
      });
    });

    var initialDatState = {
      string: 'Hello World',
      minMaxNumber: 66,
      number: 80,
      boolean: true,
      select: 'one',
      color: '#2FA1D6',
      random: Math.random(),
      nested: {
        string: 'Nested Hello World'
      }
    };
    _this.state = {
      data: initialDatState,
      defaultData: initialDatState
    };
    return _this;
  } // Update random number for current state


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DatGUI, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          defaultData = _this$state.defaultData;
      var presets = [// Preset A doesn't extend any other presets
      {
        A: {
          string: 'Preset A',
          minMaxNumber: 33,
          number: 40,
          boolean: false,
          select: 'one',
          color: '#e61d5f',
          random: Math.random(),
          nested: {
            string: 'Nested Preset A'
          }
        }
      }, {
        B: {
          string: 'Preset B',
          minMaxNumber: 12,
          number: 68,
          boolean: true,
          select: 'three',
          color: '#2FD654',
          random: Math.random(),
          nested: {
            string: 'Nested Preset B'
          }
        }
      }, // Preset C extends the default preset
      {
        'C (extends Default)': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultData, {
          string: 'Preset C'
        })
      }, // Preset D extends the current state
      {
        'D (extends current state)': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data, {
          string: 'Preset D'
        })
      }];
      return __jsx("main", {
        style: {
          marginRight: '350px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_Stats__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: data,
        onUpdate: this.handleUpdate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatPresets"], {
        label: "Presets",
        options: presets,
        onUpdate: this.handleUpdate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatString"], {
        path: "string",
        label: "String",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "minMaxNumber",
        label: "Number",
        min: 0,
        max: 100,
        step: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "number",
        label: "Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatBoolean"], {
        path: "boolean",
        label: "Boolean",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatButton"], {
        label: "Button",
        onClick: this.handleButtonClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatSelect"], {
        label: "Select",
        path: "select",
        options: ['two', 'three', 'four'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatColor"], {
        label: "Color",
        path: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatFolder"], {
        title: "Folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatString"], {
        path: "string",
        label: "String",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "minMaxNumber",
        label: "Number",
        min: 0,
        max: 100,
        step: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatString"], {
        path: "string",
        label: "String",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "minMaxNumber",
        label: "Number",
        min: 0,
        max: 100,
        step: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "number",
        label: "Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatBoolean"], {
        path: "boolean",
        label: "Boolean",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatButton"], {
        label: "Button",
        onClick: this.handleButtonClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatSelect"], {
        label: "Select",
        path: "select",
        options: ['two', 'three', 'four'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatColor"], {
        label: "Color",
        path: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatFolder"], {
        title: "Nested Folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatNumber"], {
        path: "minMaxNumber",
        label: "Number",
        min: 0,
        max: 100,
        step: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatString"], {
        path: "nested.string",
        label: "String",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatFolder"], {
        title: "Another Nested Folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatColor"], {
        label: "Color",
        path: "color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), __jsx(react_dat_gui__WEBPACK_IMPORTED_MODULE_9__["DatString"], {
        path: "nested.string",
        label: "Nested String",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))))));
    }
  }]);

  return DatGUI;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DatGUI);

/***/ })

})
//# sourceMappingURL=index.js.616cb9d5797769f8ccba.hot-update.js.map