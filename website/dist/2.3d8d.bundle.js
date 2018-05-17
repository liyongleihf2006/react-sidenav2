(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/sidenav-option/SidenavOption.jsx":
/*!**********************************************!*\
  !*** ./src/sidenav-option/SidenavOption.jsx ***!
  \**********************************************/
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

var SidenavOption = function (_React$Component) {
    (0, _inherits3.default)(SidenavOption, _React$Component);

    function SidenavOption() {
        (0, _classCallCheck3.default)(this, SidenavOption);
        return (0, _possibleConstructorReturn3.default)(this, (SidenavOption.__proto__ || (0, _getPrototypeOf2.default)(SidenavOption)).apply(this, arguments));
    }

    (0, _createClass3.default)(SidenavOption, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5F15\u5165\u914D\u7F6E\u51FD\u6570"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "import {setup} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u914D\u7F6E"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "setup({\n    data: data,\n    history: createHashHistory(),\n    nestedProp: \"children\",\n    getUserConfirmation:getUserConfirmation,\n    Loading:Loading,\n    panelClassName:\"panel\",\n    topnavActiveClassName:\"topnav-item-active\"\n});"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u914D\u7F6E\u53C2\u6570"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "10" });
                                } },
                            "data"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "11" });
                                } },
                            "history"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "12" });
                                } },
                            "nestedProp"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "13" });
                                } },
                            "getUserConfirmation"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "14" });
                                } },
                            "Loading"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "15" });
                                } },
                            "panelClassName"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    (0, _reactSidenav.jumpToById)({ "routeId": "16" });
                                } },
                            "topnavActiveClassName"
                        )
                    )
                )
            );
        }
    }]);
    return SidenavOption;
}(_react2.default.Component);

exports.default = SidenavOption;

/***/ })

}]);
//# sourceMappingURL=2.3d8d.bundle.js.map