(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./website/src/sidenav-panel/modules/nomatch-panel/NoMatchPanel.jsx":
/*!**************************************************************************!*\
  !*** ./website/src/sidenav-panel/modules/nomatch-panel/NoMatchPanel.jsx ***!
  \**************************************************************************/
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

var NoMatchPanel = function (_React$Component) {
    (0, _inherits3.default)(NoMatchPanel, _React$Component);

    function NoMatchPanel() {
        (0, _classCallCheck3.default)(this, NoMatchPanel);
        return (0, _possibleConstructorReturn3.default)(this, (NoMatchPanel.__proto__ || (0, _getPrototypeOf2.default)(NoMatchPanel)).apply(this, arguments));
    }

    (0, _createClass3.default)(NoMatchPanel, [{
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
                        "\u6CA1\u6709\u8DEF\u7531\u5339\u914Durl\u7684\u65F6\u5019\u5C55\u793A\u7684\u9762\u677F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49NoMatchPanel"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class NoMatchPanel extends React.Component {\n    render() {\n        const { pathname, history } = this.props;\n        return <div>\n            \u65E0\u6CD5\u627E\u5230\u8DEF\u5F84\"{pathname}\"!\n            <button onClick={\n                () => {\n                    history.goBack();\n                }\n            }>\u9000\u540E</button>\n        </div>\n    }\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7D\u5230SidenavPanel\u5143\u7D20\u4E0A\u9762"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "<SidenavPanel\n    ...\n    NoMatchPanel={NoMatchPanel}\n    ...\n/>\n"
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
                        "//\u5177\u4F53\u53C2\u89C1https://github.com/ReactTraining/history",
                        "\n\npathname:string \u672A\u5339\u914D\u4E0A\u7684\u8DEF\u7531\u8DEF\u5F84"
                    )
                )
            );
        }
    }]);
    return NoMatchPanel;
}(_react2.default.Component);

exports.default = NoMatchPanel;

/***/ })

}]);
//# sourceMappingURL=14.30e5.bundle.js.map