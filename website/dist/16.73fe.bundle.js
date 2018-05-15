(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./website/src/topnav/Topnav.jsx":
/*!***************************************!*\
  !*** ./website/src/topnav/Topnav.jsx ***!
  \***************************************/
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

var _index = __webpack_require__(/*! ../../../dist/index */ "./dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopPanel = function (_React$Component) {
    (0, _inherits3.default)(TopPanel, _React$Component);

    function TopPanel() {
        (0, _classCallCheck3.default)(this, TopPanel);
        return (0, _possibleConstructorReturn3.default)(this, (TopPanel.__proto__ || (0, _getPrototypeOf2.default)(TopPanel)).apply(this, arguments));
    }

    (0, _createClass3.default)(TopPanel, [{
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
                        "\u9876\u90E8\u8DEF\u7531"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5F15\u5165\u6784\u9020\u51FD\u6570"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "import {createTopnav} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u751F\u6210TopPanel"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const TopPanel = createTopnav();"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7DTopPanel"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nrender(<Topnav\n    Formatter={TopnavFormatter}\n    CloseBtnFormatter={CloseBtnFormatter}\n    className={\"topnav-item\"}\n    closeBtnClassName={\"topnav-close\"}\n/>, document.querySelector(\"#topnav\"));\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5C5E\u6027"
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
                                    return (0, _index.jumpToById)({ "routeId": "40" });
                                }
                            },
                            "Formatter"
                        ),
                        ":React.Component \u6BCF\u4E00\u4E2A\u8DEF\u7531\u5143\u7D20\u7684\u683C\u5F0F",
                        "\n\n",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _index.jumpToById)({ "routeId": "41" });
                                }
                            },
                            "CloseBtnFormatter"
                        ),
                        ":React.Component \u5173\u95ED\u6309\u94AE\u7684\u683C\u5F0F",
                        "\n\nclassName:string \u8DEF\u7531\u5143\u7D20\u7684className\n\ncloseBtnClassName:string \u5173\u95ED\u6309\u94AE\u7684className\n"
                    )
                )
            );
        }
    }]);
    return TopPanel;
}(_react2.default.Component);

exports.default = TopPanel;

/***/ })

}]);
//# sourceMappingURL=16.73fe.bundle.js.map