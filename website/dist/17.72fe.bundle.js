(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/topnav/modules/topnav-formatter/TopnavFormatter.jsx":
/*!*****************************************************************!*\
  !*** ./src/topnav/modules/topnav-formatter/TopnavFormatter.jsx ***!
  \*****************************************************************/
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

var TopnavFormatter = function (_React$Component) {
    (0, _inherits3.default)(TopnavFormatter, _React$Component);

    function TopnavFormatter() {
        (0, _classCallCheck3.default)(this, TopnavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (TopnavFormatter.__proto__ || (0, _getPrototypeOf2.default)(TopnavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(TopnavFormatter, [{
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
                        "\u9876\u90E8\u8DEF\u7531\u5143\u7D20\u683C\u5F0F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49TopnavFormatter"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class TopnavFormatter extends React.Component {\n    handler() {\n        const { item } = this.props;\n        jumpToById({\"routeId\":item.id});\n    }\n    render() {\n        const { item } = this.props;\n        return <span\n            className=\"topnav-item-content\"\n            onClick={\n                this.handler.bind(this)\n            }\n        >\n            {item.name}\n        </span>\n    }\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7D\u5230Topnav\u5143\u7D20\u4E0A\u9762"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "<Topnav\n    ...\n    Formatter={TopnavFormatter}\n    ...\n/>\n"
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
                        "\u8DEF\u7531\u6570\u636E",
                        "\n\n",
                        "to:string \u8DEF\u7531url\u8DEF\u5F84",
                        "\n\n",
                        "location:object ",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "11" });
                                }
                            },
                            "history"
                        ),
                        "\u7684location\u5C5E\u6027 //\u5177\u4F53\u53C2\u89C1https://github.com/ReactTraining/history",
                        "\n\n",
                        "isActive:bool \u662F\u5426\u662F\u88AB\u6FC0\u6D3B\u72B6\u6001"
                    )
                )
            );
        }
    }]);
    return TopnavFormatter;
}(_react2.default.Component);

exports.default = TopnavFormatter;

/***/ })

}]);
//# sourceMappingURL=17.72fe.bundle.js.map