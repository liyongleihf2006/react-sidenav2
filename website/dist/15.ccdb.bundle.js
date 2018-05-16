(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/sidenav-panel/modules/panel/Panel.jsx":
/*!***************************************************!*\
  !*** ./src/sidenav-panel/modules/panel/Panel.jsx ***!
  \***************************************************/
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

var Panel = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel() {
        (0, _classCallCheck3.default)(this, Panel);
        return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
    }

    (0, _createClass3.default)(Panel, [{
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
                        "\u8DEF\u7531\u6307\u5411\u7684\u6BCF\u4E00\u4E2A\u6A21\u5757\u9762\u677F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49Panel"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class DemoPanel extends React.Component {\n    render() {\n        return <div>\n            \u6211\u662F\u4E00\u4E2A\u793A\u4F8B\u9762\u677F Hello World!\n        </div>\n    }\n}"
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
                        "setPrompt:func \u5173\u95ED\u8BE5\u9762\u677F\u65F6\u8FDB\u884C\u8BE2\u95EE\u8C03\u7528\u7684\u51FD\u6570, \u4F20\u5165\u7684\u53C2\u6570\u5C06\u4F1A\u4F5C\u4E3A\u8C03\u7528",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "13" });
                                }
                            },
                            "getUserConfirmation"
                        ),
                        "\u65F6\u6CE8\u5165\u7684\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",
                        "\n\n",
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
                        "//\u5177\u4F53\u53C2\u89C1https://github.com/ReactTraining/history",
                        "\n\n",
                        "navData:object \u8BE5\u6A21\u5757\u9762\u677F\u5BF9\u5E94\u7684",
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
                        "params:any \u8C03\u7528",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "7" });
                                }
                            },
                            "jumpToById"
                        ),
                        "\u65F6\u4F20\u5165\u7684params\u53C2\u6570"
                    )
                )
            );
        }
    }]);
    return Panel;
}(_react2.default.Component);

exports.default = Panel;

/***/ })

}]);
//# sourceMappingURL=15.ccdb.bundle.js.map