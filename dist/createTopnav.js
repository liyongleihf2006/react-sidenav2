"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = createTopnav;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require("react-router-dom");

var _pushPath = require("./pushPath");

var _pushPath2 = _interopRequireDefault(_pushPath);

var _createTransitionManager = require("./createTransitionManager");

var _setup = require("./setup");

var _isNoMatch = require("./isNoMatch");

var _isNoMatch2 = _interopRequireDefault(_isNoMatch);

var _getStorageData = require("./getStorageData");

var _getStorageData2 = _interopRequireDefault(_getStorageData);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTopnav() {
    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp,
        topnavActiveClassName = _getOptions.topnavActiveClassName;

    var Topnav = function (_React$Component) {
        (0, _inherits3.default)(Topnav, _React$Component);

        function Topnav() {
            (0, _classCallCheck3.default)(this, Topnav);
            return (0, _possibleConstructorReturn3.default)(this, (Topnav.__proto__ || (0, _getPrototypeOf2.default)(Topnav)).apply(this, arguments));
        }

        (0, _createClass3.default)(Topnav, [{
            key: "render",
            value: function render() {
                var props = this.props;
                var history = props.history;

                return _react2.default.createElement(
                    _reactRouterDom.Router,
                    { history: history },
                    _react2.default.createElement(TopnavItems, props)
                );
            }
        }]);
        return Topnav;
    }(_react2.default.Component);

    var TopnavItems = function (_React$Component2) {
        (0, _inherits3.default)(TopnavItems, _React$Component2);

        function TopnavItems() {
            (0, _classCallCheck3.default)(this, TopnavItems);
            return (0, _possibleConstructorReturn3.default)(this, (TopnavItems.__proto__ || (0, _getPrototypeOf2.default)(TopnavItems)).apply(this, arguments));
        }

        (0, _createClass3.default)(TopnavItems, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.listener();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.unlisten = _createTransitionManager.transitionManager.appendListener(this.listener.bind(this));
                this.activeItem && this.activeItem.scrollIntoView(true);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unlisten();
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var props = this.props;
                var history = props.history,
                    Formatter = props.Formatter,
                    CloseBtnFormatter = props.CloseBtnFormatter,
                    className = props.className,
                    closeBtnClassName = props.closeBtnClassName;
                var pathnames = this.state.pathnames;

                return _getStorageData2.default.call(this, pathnames).map(function (item) {
                    var isActive = history.location.pathname === item.pathname;
                    var data = item.data,
                        pathname = item.pathname;

                    var classname = (0, _classnames3.default)(className, (0, _defineProperty3.default)({}, topnavActiveClassName, isActive));
                    return _react2.default.createElement(
                        "span",
                        { key: pathname, className: classname, ref: function ref(el) {
                                if (isActive) _this3.activeItem = el;
                            } },
                        _react2.default.createElement(Formatter, (0, _extends3.default)({}, props, { item: data, to: pathname, location: history.location, isActive: isActive })),
                        _react2.default.createElement(
                            "span",
                            { className: closeBtnClassName, onClick: _this3.handleClose.bind(_this3, pathname, data) },
                            _react2.default.createElement(CloseBtnFormatter, (0, _extends3.default)({}, props, { item: data, to: pathname, location: history.location, isActive: isActive }))
                        )
                    );
                });
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.activeItem && this.activeItem.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        }, {
            key: "listener",
            value: function listener() {
                var pathnames = sessionStorage.getItem("sidenav");
                this.setState({ pathnames: pathnames });
            }
        }, {
            key: "handleClose",
            value: function handleClose(pathname, data) {
                var _this4 = this;

                var props = this.props;
                var history = props.history;
                var confirm = data.confirm;

                confirm().then(function () {
                    var pathnames = _this4.state.pathnames;

                    pathnames = JSON.parse(pathnames);
                    pathnames.splice(pathnames.indexOf(pathname), 1);
                    sessionStorage.setItem("sidenav", (0, _stringify2.default)(pathnames));
                    _createTransitionManager.transitionManager.notifyListeners();
                    if (pathname === history.location.pathname && pathnames.length) {
                        (0, _util.setCloseBack)(true);
                        history.goBack();
                    }
                }).catch(function (event) {
                    console.info("cancel the operate of close nav");
                });
            }
        }]);
        return TopnavItems;
    }(_react2.default.Component);

    Topnav.propTypes = {
        history: _propTypes2.default.object.isRequired,
        data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            id: _propTypes2.default.any.isRequired,
            path: _propTypes2.default.string.isRequired
        })).isRequired,
        nestedProp: _propTypes2.default.string,
        Formatter: _propTypes2.default.func.isRequired,
        CloseBtnFormatter: _propTypes2.default.func.isRequired,
        className: _propTypes2.default.string,
        closeBtnClassName: _propTypes2.default.string
    };
    Topnav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };;
    return Topnav;
}