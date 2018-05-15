(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./website/src/sidenav-option/modules/Loading/Loading.jsx":
/*!****************************************************************!*\
  !*** ./website/src/sidenav-option/modules/Loading/Loading.jsx ***!
  \****************************************************************/
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

var _index = __webpack_require__(/*! ../../../../../dist/index */ "./dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_React$Component) {
    (0, _inherits3.default)(Loading, _React$Component);

    function Loading() {
        (0, _classCallCheck3.default)(this, Loading);
        return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loading, [{
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
                        "tab\u9875\u52A0\u8F7D\u65F6\u7684\u8FC7\u6E21loading\u9762\u677F"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u751F\u6210Loading"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nconst Loading=({navData})=>{\n    return (\n        <div>\n            {navData.name}\u9875\u52A0\u8F7D\u4E2D...\n        </div>\n    )\n};\n"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5C06Loading\u4F20\u5165\u914D\u7F6E\u4E2D"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nsetup({\n    ...\n    Loading: Loading,\n    ...\n});\n"
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
                        "navData:any \u5728",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function onClick() {
                                    return (0, _index.jumpToById)({ "routeId": "10" });
                                }
                            },
                            "Data"
                        ),
                        "\u5B9A\u4E49\u7684\u5BF9\u5E94\u7684\u5BFC\u822A\u6570\u636E"
                    )
                )
            );
        }
    }]);
    return Loading;
}(_react2.default.Component);

exports.default = Loading;

/***/ })

}]);
//# sourceMappingURL=7.6915.bundle.js.map