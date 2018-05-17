(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/jump-to-byId/JumpToById.jsx":
/*!*****************************************!*\
  !*** ./src/jump-to-byId/JumpToById.jsx ***!
  \*****************************************/
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

var JumpToById = function (_React$Component) {
    (0, _inherits3.default)(JumpToById, _React$Component);

    function JumpToById() {
        (0, _classCallCheck3.default)(this, JumpToById);
        return (0, _possibleConstructorReturn3.default)(this, (JumpToById.__proto__ || (0, _getPrototypeOf2.default)(JumpToById)).apply(this, arguments));
    }

    (0, _createClass3.default)(JumpToById, [{
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
                        "\u901A\u8FC7\u8DEF\u7531\u6570\u636E\u7684id\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u7684\u65B9\u6CD5"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5F15\u5165"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "import {jumpToById} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u4F7F\u7528"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "jumpToById({ \"routeId\": \"0\",\"id\":\"0\",params:{\"desc\":\"\u5E26\u53C2\u8DF3\u8F6C\"} })"
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
                        "routeId:string",
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
                        "\u8DEF\u7531\u6570\u636E\u4E2D\u5B9A\u4E49\u7684id\u5C5E\u6027",
                        "\n\n",
                        "id:string \u5F53\u4F7F\u7528\u76F8\u540C\u7684routeId\u7684\u65F6\u5019 ,\u4E3A\u4E86\u6253\u5F00\u591A\u4E2A\u76F8\u540CrouteId\u7684\u9875\u9762(\u6BD4\u5982\u4FEE\u6539\u6570\u636E\u7684\u65F6\u5019) ,\u56E0\u6B64\u4F20\u5165\u8BE5\u53C2\u6570\u52A0\u4EE5\u533A\u5206(\u4E00\u822C\u4F7F\u7528\u8981\u4FEE\u6539\u7684\u6570\u636E\u7684id)",
                        "\n\n",
                        "params:any \u4F7F\u7528 jumpToById \u65B9\u6CD5\u8FDB\u5165",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "32" });
                                }
                            },
                            "\u8DEF\u7531\u9875\u9762"
                        ),
                        "\u65F6\u4F20\u5165\u7684\u53C2\u6570"
                    )
                )
            );
        }
    }]);
    return JumpToById;
}(_react2.default.Component);

exports.default = JumpToById;

/***/ })

}]);
//# sourceMappingURL=22.c785.bundle.js.map