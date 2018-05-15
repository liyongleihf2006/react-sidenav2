(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./website/src/sidenav-option/modules/getUserConfirmation/GetUserConfirmation.jsx":
/*!****************************************************************************************!*\
  !*** ./website/src/sidenav-option/modules/getUserConfirmation/GetUserConfirmation.jsx ***!
  \****************************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetUserConfirmation = function (_React$Component) {
    (0, _inherits3.default)(GetUserConfirmation, _React$Component);

    function GetUserConfirmation() {
        (0, _classCallCheck3.default)(this, GetUserConfirmation);
        return (0, _possibleConstructorReturn3.default)(this, (GetUserConfirmation.__proto__ || (0, _getPrototypeOf2.default)(GetUserConfirmation)).apply(this, arguments));
    }

    (0, _createClass3.default)(GetUserConfirmation, [{
        key: "render",
        value: function render() {
            var _this2 = this;

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
                        "\u5F53\u8981\u5173\u95ED\u67D0\u4E00\u4E2A\u9875\u9762\u65F6,\u67D0\u4E9B\u60C5\u51B5\u4E0B\u9700\u8981\u8BE2\u95EE\u662F\u5426\u786E\u5B9A\u5173\u95ED\u8BE5\u9875\u9762\u65F6\u4F7F\u7528, \u914D\u5408\u6BCF\u4E2A\u6A21\u5757\u4E2D\u6CE8\u5165\u7684\"setPrompt\"\u4F7F\u7528"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u4F7F\u7528\u793A\u4F8B"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u5F53\u4E0B\u9762\u7684\u6587\u672C\u6846\u4E2D\u6709\u5185\u5BB9\u7684\u65F6\u5019\u4F1A\u8BE2\u95EE\u662F\u5426\u786E\u8BA4\u5173\u95ED\u8BE5\u9875\u9762"
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement("input", { onInput: function onInput(evt) {
                            var setPrompt = _this2.props.setPrompt;

                            var val = evt.target.value.trim();
                            val ? setPrompt("确定关闭该页面吗?") : setPrompt();
                        } })
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u793A\u4F8B\u4EE3\u7801"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\n<input onInput={(evt)=>{\n    const {setPrompt} = this.props;\n    let val = evt.target.value.trim();\n    val?setPrompt(\"\u786E\u5B9A\u5173\u95ED\u8BE5\u9875\u9762\u5417?\"):setPrompt();\n}}/>\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49getUserConfirmation"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nconst getUserConfirmation = function (prompt, resolve, reject) {\n    if (prompt) {\n        const result = window.confirm(prompt);\n        result ? resolve() : reject();\n    } else {\n        resolve();\n    }\n};\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5C06getUserConfirmation\u4F20\u5165\u914D\u7F6E\u4E2D"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nsetup({\n    ...\n    getUserConfirmation: getUserConfirmation,\n    ...\n});\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u53C2\u6570"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "prompt:any \u6BCF\u4E2A\u6A21\u5757\u4E2D\u8C03\u7528setPrompt\u65F6\u4F20\u5165\u7684\u53C2\u6570\n\nresolve:func \u8C03\u7528\u8BE5\u51FD\u6570\u8868\u793A\u540C\u610F\u5173\u95ED\u9762\u677F\n\nreject:func \u8C03\u7528\u8BE5\u51FD\u6570\u8868\u793A\u53D6\u6D88\u5173\u95ED\u9762\u677F"
                    )
                )
            );
        }
    }]);
    return GetUserConfirmation;
}(_react2.default.Component);

exports.default = GetUserConfirmation;

/***/ })

}]);
//# sourceMappingURL=6.f1a8.bundle.js.map