(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/crumbnav/Crumbnav.jsx":
/*!***********************************!*\
  !*** ./src/crumbnav/Crumbnav.jsx ***!
  \***********************************/
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

var Crumbnav = function (_React$Component) {
    (0, _inherits3.default)(Crumbnav, _React$Component);

    function Crumbnav() {
        (0, _classCallCheck3.default)(this, Crumbnav);
        return (0, _possibleConstructorReturn3.default)(this, (Crumbnav.__proto__ || (0, _getPrototypeOf2.default)(Crumbnav)).apply(this, arguments));
    }

    (0, _createClass3.default)(Crumbnav, [{
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
                        "\u9762\u5305\u5C51\u5BFC\u822A"
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
                        "import {createCrumbnav} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u751F\u6210Crumbnav"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const Crumbnav = createCrumbnav();"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6302\u8F7DCrumbnav"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\nrender(<Crumbnav\n    className={\"crumbnav-item\"}\n    Formatter={CrumbnavFormatter}\n/>, document.querySelector(\"#crumbnav\"));\n"
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
                                    return (0, _reactSidenav.jumpToById)({ "routeId": "50" });
                                }
                            },
                            "Formatter"
                        ),
                        ":React.Component \u6BCF\u4E00\u4E2A\u9762\u5305\u5C51\u5143\u7D20\u7684\u683C\u5F0F",
                        "\n\nclassName:string \u9762\u5305\u5C51\u5143\u7D20\u7684className\n"
                    )
                )
            );
        }
    }]);
    return Crumbnav;
}(_react2.default.Component);

exports.default = Crumbnav;

/***/ })

}]);
//# sourceMappingURL=19.e1e2.bundle.js.map