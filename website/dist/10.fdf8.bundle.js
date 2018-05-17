(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/sidenav/Sidenav.jsx":
/*!*********************************!*\
  !*** ./src/sidenav/Sidenav.jsx ***!
  \*********************************/
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

var Sidenav = function (_React$Component) {
    (0, _inherits3.default)(Sidenav, _React$Component);

    function Sidenav() {
        (0, _classCallCheck3.default)(this, Sidenav);
        return (0, _possibleConstructorReturn3.default)(this, (Sidenav.__proto__ || (0, _getPrototypeOf2.default)(Sidenav)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sidenav, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
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
                        "import {createSidenav} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u751F\u6210Sidenav"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const Sidenav = createSidenav();"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7DSidenav"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nrender(<Sidenav\n    Formatter={SidenavFormatter}\n    ulClassName={\"sidenav-ul\"}\n    liClassName={\"sidenav-li\"}\n/>, document.querySelector(\"#sidenav\"));\n"
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
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "20" });
                                }
                            },
                            "Formatter"
                        ),
                        ":React.Component \u6BCF\u4E00\u4E2A\u8DEF\u7531\u5143\u7D20\u7684\u683C\u5F0F",
                        "\n\nulClassName:string \u4FA7\u8FB9\u5BFC\u822A\u5B50\u8DEF\u7531\u96C6\u5408\u5BB9\u5668\u7684className\n\nliClassName:string \u4FA7\u8FB9\u680F\u5BFC\u822A\u5B50\u8DEF\u7531\u5143\u7D20\u7684className"
                    )
                )
            );
        }
    }]);
    return Sidenav;
}(_react2.default.Component);

exports.default = Sidenav;

/***/ })

}]);
//# sourceMappingURL=10.fdf8.bundle.js.map