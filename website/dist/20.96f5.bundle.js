(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/crumbnav/modules/crumbnav-formatter/CrumbnavFormatter.jsx":
/*!***********************************************************************!*\
  !*** ./src/crumbnav/modules/crumbnav-formatter/CrumbnavFormatter.jsx ***!
  \***********************************************************************/
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

var _reactSidenav = __webpack_require__(/*! react-sidenav2 */ "./node_modules/react-sidenav2/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CrumbnavFormatter = function (_React$Component) {
    (0, _inherits3.default)(CrumbnavFormatter, _React$Component);

    function CrumbnavFormatter() {
        (0, _classCallCheck3.default)(this, CrumbnavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (CrumbnavFormatter.__proto__ || (0, _getPrototypeOf2.default)(CrumbnavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(CrumbnavFormatter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u63CF\u8FF0"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\u9762\u5305\u5C51\u5143\u7D20\u683C\u5F0F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49CrumbnavFormatter"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class CrumbnavFormatter extends React.Component {\n    render() {\n        const { item } = this.props;\n        return item.name;\n    }\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7D\u5230Crumbnav\u5143\u7D20\u4E0A\u9762"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "<Crumbnav\n    ...\n    Formatter={CrumbnavFormatter}\n    ...\n/>\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6CE8\u5165\u7684\u5C5E\u6027"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "item:object \u5BF9\u5E94\u7684",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "10" });
                                }
                            },
                            "Data"
                        ),
                        "\u8DEF\u7531\u6570\u636E"
                    )
                )
            );
        }
    }]);
    return CrumbnavFormatter;
}(_react2.default.Component);

exports.default = CrumbnavFormatter;

/***/ })

}]);
//# sourceMappingURL=20.96f5.bundle.js.map