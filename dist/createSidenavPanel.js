"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = createSidenavPanel;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSidenavPanel() {
    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp,
        panelClassName = _getOptions.panelClassName;

    var SidenavPanel = function (_React$Component) {
        (0, _inherits3.default)(SidenavPanel, _React$Component);

        function SidenavPanel() {
            (0, _classCallCheck3.default)(this, SidenavPanel);
            return (0, _possibleConstructorReturn3.default)(this, (SidenavPanel.__proto__ || (0, _getPrototypeOf2.default)(SidenavPanel)).apply(this, arguments));
        }

        (0, _createClass3.default)(SidenavPanel, [{
            key: "render",
            value: function render() {
                var props = this.props;
                var history = props.history;

                return _react2.default.createElement(
                    _reactRouterDom.Router,
                    { history: history },
                    _react2.default.createElement(SidenavPanelItems, props)
                );
            }
        }]);
        return SidenavPanel;
    }(_react2.default.Component);

    var SidenavPanelItems = function (_React$Component2) {
        (0, _inherits3.default)(SidenavPanelItems, _React$Component2);

        function SidenavPanelItems() {
            (0, _classCallCheck3.default)(this, SidenavPanelItems);
            return (0, _possibleConstructorReturn3.default)(this, (SidenavPanelItems.__proto__ || (0, _getPrototypeOf2.default)(SidenavPanelItems)).apply(this, arguments));
        }

        (0, _createClass3.default)(SidenavPanelItems, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.listener();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.unlisten = _createTransitionManager.transitionManager.appendListener(this.listener.bind(this));
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unlisten();
            }
        }, {
            key: "render",
            value: function render() {
                var props = this.props;
                var history = props.history,
                    data = props.data,
                    nestedProp = props.nestedProp,
                    Formatter = props.Formatter,
                    EmptyPanel = props.EmptyPanel,
                    NoMatchPanel = props.NoMatchPanel;
                var pathnames = this.state.pathnames;


                if ((0, _isNoMatch2.default)(data, nestedProp, history.location.pathname)) {
                    return _react2.default.createElement(NoMatchPanel, (0, _extends3.default)({}, props, { history: history, location: history.location, pathname: history.location.pathname }));
                }
                var items = _getStorageData2.default.call(this, pathnames);
                var Panels = items.map(function (item) {
                    var data = item.data,
                        pathname = item.pathname;

                    var isActive = history.location.pathname === pathname;
                    var Component = data.component;
                    var panelParams = sessionStorage.getItem("sidenav-panelParams");
                    if (!panelParams) {
                        panelParams = {};
                    } else {
                        panelParams = JSON.parse(panelParams);
                    }
                    var params = panelParams[pathname];
                    var style = {};
                    if (!isActive) {
                        style.display = "none";
                    }
                    return data ? _react2.default.createElement(
                        "div",
                        { key: pathname, style: style, className: panelClassName },
                        _react2.default.createElement(Component, (0, _extends3.default)({}, props, { history: history, navData: data, params: params }))
                    ) : null;
                });
                return Panels.length ? Panels : EmptyPanel ? _react2.default.createElement(EmptyPanel, null) : null;
            }
        }, {
            key: "listener",
            value: function listener(state) {
                var pathnames = sessionStorage.getItem("sidenav");
                this.setState({ pathnames: pathnames });
            }
        }]);
        return SidenavPanelItems;
    }(_react2.default.Component);

    SidenavPanel.propTypes = {
        history: _propTypes2.default.object.isRequired,
        data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            id: _propTypes2.default.any.isRequired,
            path: _propTypes2.default.string.isRequired
        })).isRequired,
        nestedProp: _propTypes2.default.string,
        EmptyPanel: _propTypes2.default.func,
        NoMatchPanel: _propTypes2.default.func.isRequired,
        className: _propTypes2.default.string
    };
    SidenavPanel.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };
    return SidenavPanel;
}