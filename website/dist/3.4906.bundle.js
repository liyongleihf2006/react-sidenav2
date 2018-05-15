(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./website/src/sidenav-option/modules/data/Data.jsx":
/*!**********************************************************!*\
  !*** ./website/src/sidenav-option/modules/data/Data.jsx ***!
  \**********************************************************/
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

var Data = function (_React$Component) {
    (0, _inherits3.default)(Data, _React$Component);

    function Data() {
        (0, _classCallCheck3.default)(this, Data);
        return (0, _possibleConstructorReturn3.default)(this, (Data.__proto__ || (0, _getPrototypeOf2.default)(Data)).apply(this, arguments));
    }

    (0, _createClass3.default)(Data, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u57FA\u672C\u7ED3\u6784"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "[{\n    id: \"-1\",\n    path: \"/\",\n    name: \"\u7B80\u4ECB\",\n    loader: () => import('./home/Home')\n},{\n    id: \"0\",\n    path: \"/getting_started\",\n    name: \"\u5F00\u59CB\u4F7F\u7528\",\n    loader: () => import('./getting-started/GettingStarted')\n}, {\n    id: \"1\",\n    path: \"/sidenav_option\",\n    name: \"\u914D\u7F6E\",\n    loader: () => import('./sidenav-option/SidenavOption'),\n    children:[{\n        id:\"10\",\n        path:\"/data\",\n        name:\"Data\",\n        loader:()=>import(\"./sidenav-option/modules/data/Data\")\n    }]\n}]"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5FC5\u987B\u5C5E\u6027"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "id:string \u4E0D\u53EF\u91CD\u590D"
                    )
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "path:string \u5B9A\u4E49\u8DEF\u7531\u4F7F\u7528\u7684\u8DEF\u5F84"
                    )
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "name:string \u6A21\u5757\u540D\u79F0"
                    )
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "loader:func \u8DEF\u7531\u5BF9\u5E94\u7684\u6A21\u5757,\u51FD\u6570\u8FD4\u56DE",
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    return (0, _index.jumpToById)({ routeId: "32" });
                                } },
                            "\u8DEF\u7531\u6A21\u5757"
                        ),
                        "\u7684\u5F15\u5165"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5176\u4ED6\u5C5E\u6027"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "sidenav:bool \u662F\u5426\u5728\u4FA7\u8FB9\u5BFC\u822A\u4E0A\u9762\u663E\u793A\u8BE5\u8DEF\u7531,\u4E00\u822C\u7528\u4E8E\u5B9A\u4E49\u5305\u62EC\u4FEE\u6539\u7B49\u4E0D\u9700\u8981\u5728\u4FA7\u8FB9\u5C55\u793A\u7684\u9875\u9762\u7684\u8DEF\u7531"
                    )
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "children:array \"children\"\u5BF9\u5E94\u4E8E\u914D\u7F6E\u4E2D\u7684",
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: function onClick() {
                                    return (0, _index.jumpToById)({ routeId: "12" });
                                } },
                            "nestedProp"
                        ),
                        "\u5C5E\u6027\u503C,\u5305\u542B\u8BE5\u8DEF\u7531\u4E0B\u9762\u7684\u540E\u4EE3\u8DEF\u7531"
                    )
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "*:any \u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u7684\u4EFB\u610F\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027"
                    )
                )
            );
        }
    }]);
    return Data;
}(_react2.default.Component);

exports.default = Data;

/***/ })

}]);
//# sourceMappingURL=3.4906.bundle.js.map