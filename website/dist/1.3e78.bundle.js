(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/getting-started/GettingStarted.jsx":
/*!************************************************!*\
  !*** ./src/getting-started/GettingStarted.jsx ***!
  \************************************************/
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

var GettingStarted = function (_React$Component) {
    (0, _inherits3.default)(GettingStarted, _React$Component);

    function GettingStarted() {
        (0, _classCallCheck3.default)(this, GettingStarted);
        return (0, _possibleConstructorReturn3.default)(this, (GettingStarted.__proto__ || (0, _getPrototypeOf2.default)(GettingStarted)).apply(this, arguments));
    }

    (0, _createClass3.default)(GettingStarted, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u9879\u76EE\u7ED3\u6784"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\n     |- getting-started\n     |     |\n     |     |- GettingStarted.jsx\n     |\n     |- home\n     |     |\n     |     |- Home.jsx\n     |\n     |- sidenav-home\n     |     |\n     |     |- modules\n     |     |     |\n     |     |     |- sidenav-option\n     |     |            |\n     |     |            |- SidenavOption.jsx\n     |     |\n     |     |- SidenavHome.jsx\n     |     \n     |- index.css\n     |\n     |- index.html\n     |\n     |- index.jsx\n    "
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "index.html\u7ED3\u6784"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "\n    <div id=\"sidenav\" class=\"sidenav-container\"></div>\n    <div class=\"content\">\n        <div id=\"topnav\" class=\"topnav-container\"></div>\n        <div id=\"crumbnav\" class=\"crumbnav-container\"></div>\n        <div id=\"main\" class=\"main\"></div>\n    </div>"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u6CE8\u610F"
                ),
                _react2.default.createElement("p", null),
                _react2.default.createElement(
                    "b",
                    null,
                    "\u6574\u4E2A\u7EC4\u4EF6\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u6837\u5F0F, \u6837\u5F0F\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u4E66\u5199, \u5B9E\u9645\u9879\u76EE\u4E2D\u8BF7\u81EA\u5DF1\u5B9A\u4E49\u5408\u9002\u7684\u6837\u5F0F, \u4E0B\u9762\u662F\u793A\u4F8B\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u7684\u6837\u5F0F"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "/* \u4FA7\u8FB9\u5BFC\u822A */\n.sidenav-container{\n    position: fixed;\n    width: 220px;\n    border-right: 1px solid #f3f3f3;\n    padding-right: 20px;\n    height: 100%;\n}\n.sidenav-ul{\n    list-style: none;\n    padding-left: 0;\n    margin:0;\n}\n.sidenav-li{\n    padding-left: 10px;\n    line-height: 40px;\n}\n.sidenav-item{\n    padding-left: 10px;\n    border-radius: 8px;    \n}\n.sidenav-item-active{\n    background:lightpink;\n}\n/* \u53F3\u4FA7\u5BB9\u5668 */\n.content{\n    margin-left: 240px;\n    overflow:auto;\n}\n/* \u9876\u90E8\u5BFC\u822A */\n.topnav-container{\n    background: #00B7AC;\n    overflow: auto;\n    white-space: nowrap;\n}\n.topnav-item{\n    padding:17px;\n    color:white;\n    display:inline-block;\n    cursor: pointer;\n}\n.topnav-item-active{\n    background: #159E96;\n}\n.topnav-close{\n    margin-left: 4px;\n}\n.topnav-item:not(:hover) .topnav-close{\n    visibility: hidden;\n}\n/* \u9762\u5305\u5C51\u5BFC\u822A */\n.crumbnav-container{\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    background-color: #f5f5f5;\n    color: #337ab7;\n}\n.crumbnav-item{\n    cursor: pointer;\n}\n.crumbnav-item+.crumbnav-item::before{\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\0a0\";\n}\n.crumbnav-item:last-child{\n    color:#777;\n}\n/* \u4E3A\u4E86\u5199\u6587\u6863,\u989D\u5916\u7684\u6837\u5F0F */\npre{\n    padding: 1.25rem 1.5rem;\n    line-height: 1.25;\n    background: #f3f3f3;\n    border-radius: 3px;\n    overflow-x: auto;\n    font-family: monospace,monospace;\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B89\u88C5"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "npm install --save react-sidenav2"
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
                        "import {setup,jumpToById,jumpTo,createSidenav,createTopnav,createSidenavPanel,createCrumbnav} from \"react-sidenav2\";"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5B9A\u4E49\u5BFC\u822A\u6570\u636E"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "let data = [{\n                id: \"-1\",\n                path: \"/\",\n                name: \"\u7B80\u4ECB\",\n                loader: () => import('./home/Home')\n            },{\n                id: \"0\",\n                path: \"/getting_started\",\n                name: \"\u5F00\u59CB\u4F7F\u7528\",\n                loader: () => import('./getting-started/GettingStarted')\n            }, {\n                id: \"1\",\n                path: \"/sidenav_home\",\n                name: \"Sidenav\u7B80\u4ECB\",\n                loader: () => import('./sidenav-home/SidenavHome'),\n                children: [{\n                    id: \"11\",\n                    path: \"/sidenav_option\",\n                    name: \"Sidenav\u914D\u7F6E\",\n                    loader: () => import('./sidenav-home/modules/sidenav-option/SidenavOption')\n                }]\n            }];"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5173\u95ED\u9875\u7B7E\u65F6\u7684\u8BE2\u95EE\u51FD\u6570"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const getUserConfirmation = function (prompt, resolve, reject) {\n    if (prompt) {\n        const result = window.confirm(prompt);\n        result ? resolve() : reject();\n    } else {\n        resolve();\n    }\n};"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u9875\u9762\u52A0\u8F7D\u65F6\u4F7F\u7528\u7684\u52A0\u8F7D\u9875"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const Loading=({navData})=>{\n    return (\n        <div>\n            {navData.name}\u9875\u52A0\u8F7D\u4E2D...\n        </div>\n    )\n};"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u521D\u59CB\u5316\u5BFC\u822A\u7EC4\u4EF6"
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
                    "\u751F\u6210\u4FA7\u8FB9\u5BFC\u822A\u7EC4\u4EF6"
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
                    "\u4FA7\u8FB9\u5BFC\u822A\u5B9A\u4E49\u683C\u5F0F"
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
                    "\u6302\u8F7D\u4FA7\u8FB9\u5BFC\u822A\u7EC4\u4EF6"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "render(<Sidenav\n    Formatter={SidenavFormatter}\n    ulClassName={\"sidenav-ul\"}\n    liClassName={\"sidenav-li\"}\n/>, document.querySelector(\"#sidenav\"));"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u751F\u6210\u5BFC\u822A\u9762\u677F\u7EC4\u4EF6"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "const SidenavPanel = createSidenavPanel();"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u65E0\u5BFC\u822A\u9762\u677F\u88AB\u9009\u4E2D\u65F6\u5C55\u793A\u7684\u9762\u677F"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "class EmptyPanel extends React.Component {\n    render() {\n        return <div>\n            \u8BF7\u4ECE\u5DE6\u4FA7\u5BFC\u822A\u9009\u62E9\u6A21\u5757\n        </div>\n    }\n}"
                    )
                ),
                _react2.default.createElement(
                    "strong",
                    null,
                    "\u5BFC\u822A\u8DEF\u5F84\u9519\u8BEF\u65F6\u5C55\u793A\u7684\u9762\u677F"
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
                    "\u6302\u8F7D\u5BFC\u822A\u9762\u677F"
                ),
                _react2.default.createElement(
                    "pre",
                    null,
                    _react2.default.createElement(
                        "code",
                        null,
                        "render(<SidenavPanel\n    EmptyPanel={EmptyPanel}\n    NoMatchPanel={NoMatchPanel}\n/>, document.querySelector(\"#main\"));"
                    )
                )
            );
        }
    }]);
    return GettingStarted;
}(_react2.default.Component);

exports.default = GettingStarted;

/***/ })

}]);
//# sourceMappingURL=1.3e78.bundle.js.map