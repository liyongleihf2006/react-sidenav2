(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/sidenav-option/modules/history/History.jsx":
/*!********************************************************!*\
  !*** ./src/sidenav-option/modules/history/History.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var History = function (_React$Component) {
    (0, _inherits3.default)(History, _React$Component);

    function History() {
        (0, _classCallCheck3.default)(this, History);
        return (0, _possibleConstructorReturn3.default)(this, (History.__proto__ || (0, _getPrototypeOf2.default)(History)).apply(this, arguments));
    }

    (0, _createClass3.default)(History, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B89\u88C5history"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "npm install --save history"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u83B7\u53D6history"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "import {createHashHistory,createBrowserHistory} from \"history\";\nconst history = createHashHistory();\n//\u5177\u4F53\u53C2\u89C1https://github.com/ReactTraining/history\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5C06history\u4F20\u5165\u914D\u7F6E\u4E2D"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nsetup({\n    ...\n    history: history,\n    ...\n});\n"
                    )
                )
            );
        }
    }]);
    return History;
}(_react2.default.Component);

exports.default = History;

/***/ })

}]);
//# sourceMappingURL=4.8367.bundle.js.map