(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./website/src/sidenav/modules/SidenavFormatter/SidenavFormatter.jsx":
/*!***************************************************************************!*\
  !*** ./website/src/sidenav/modules/SidenavFormatter/SidenavFormatter.jsx ***!
  \***************************************************************************/
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _dist = __webpack_require__(/*! ../../../../../dist */ "./dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidenavFormatter = function (_React$Component) {
    (0, _inherits3.default)(SidenavFormatter, _React$Component);

    function SidenavFormatter() {
        (0, _classCallCheck3.default)(this, SidenavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (SidenavFormatter.__proto__ || (0, _getPrototypeOf2.default)(SidenavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(SidenavFormatter, [{
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
                        "\u5B9A\u4E49\u4FA7\u8FB9\u5BFC\u822A\u8DEF\u7531\u5143\u7D20\u7684\u683C\u5F0F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49SidenavFormatter"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class SidenavFormatter extends React.Component {\n    handler() {\n        const { item } = this.props;\n        jumpToById({routeId:item.id});\n    }\n    render() {\n        const { item, match } = this.props;\n        return (\n            <div\n                className={classnames(\"sidenav-item\", { \"sidenav-item-active\": match && match.isExact })}\n                onClick={\n                    this.handler.bind(this)\n                }\n            >\n                {item.name}\n            </div>\n        )\n    }\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7D\u5230Sidenav\u5143\u7D20\u4E0A\u9762"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "<Sidenav\n    ...\n    Formatter={SidenavFormatter}\n    ...\n/>\n"
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
                        "item:object \u5728",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _dist.jumpToById)({ "routeId": "10" });
                                }
                            },
                            "Data"
                        ),
                        "\u4E0A\u9762\u5B9A\u4E49\u7684\u5BF9\u5E94\u6570\u636E",
                        "\n\n",
                        "match:object ",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _dist.jumpToById)({ "routeId": "11" });
                                }
                            },
                            "history"
                        ),
                        "\u7684\u5C5E\u6027 //\u5177\u4F53\u53C2\u89C1https://github.com/ReactTraining/history",
                        "\n\nFormatter:func Sidenav\u7684Formatter\u5C5E\u6027\n\nhistory:history\n\nliClassName:string\n\nlocation:object history\u7684location\u5C5E\u6027\n\nnestedProp:string\n\nto:string \u8BE5\u8DEF\u7531\u5BF9\u8C61\u7684\u8DEF\u7531\u8DEF\u5F84\n\nulClassName:string\n\n"
                    )
                )
            );
        }
    }]);
    return SidenavFormatter;
}(_react2.default.Component);

exports.default = SidenavFormatter;

/***/ })

}]);
//# sourceMappingURL=11.97ca.bundle.js.map