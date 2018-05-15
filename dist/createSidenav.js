"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.default = createSidenav;

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

var _util = require("./util");

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSidenav() {
    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp;

    var Sidenav = function (_React$Component) {
        (0, _inherits3.default)(Sidenav, _React$Component);

        function Sidenav() {
            (0, _classCallCheck3.default)(this, Sidenav);
            return (0, _possibleConstructorReturn3.default)(this, (Sidenav.__proto__ || (0, _getPrototypeOf2.default)(Sidenav)).apply(this, arguments));
        }

        (0, _createClass3.default)(Sidenav, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var history = this.props.history;

                this.initStorage();
                this.listen = history.listen(function (path, state) {
                    var sidenavStorage = sessionStorage.getItem("sidenav");
                    if (!sidenavStorage) {
                        sidenavStorage = [];
                    } else {
                        sidenavStorage = JSON.parse(sidenavStorage);
                    }
                    if ((0, _util.isCloseBack)() && state === "POP") {
                        if (sidenavStorage.every(function (pathname) {
                            return pathname !== path.pathname;
                        })) {
                            history.goBack();
                        } else {
                            (0, _util.setCloseBack)(false);
                        }
                    } else {
                        (0, _pushPath2.default)(sidenavStorage, path.pathname, data, nestedProp);
                    }
                    _createTransitionManager.transitionManager.notifyListeners(state);
                });
            }
        }, {
            key: "initStorage",
            value: function initStorage() {
                var history = this.props.history;
                var location = history.location;

                var currentPathname = location.pathname;
                var sidenavStorage = sessionStorage.getItem("sidenav");
                if (!sidenavStorage) {
                    sidenavStorage = [];
                } else {
                    sidenavStorage = JSON.parse(sidenavStorage);
                }
                (0, _pushPath2.default)(sidenavStorage, currentPathname, data, nestedProp);
                _createTransitionManager.transitionManager.notifyListeners();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.listen();
            }
        }, {
            key: "render",
            value: function render() {
                var props = this.props;
                var history = props.history;

                return _react2.default.createElement(
                    _reactRouterDom.Router,
                    { history: history },
                    _react2.default.createElement(Navs, props)
                );
            }
        }]);
        return Sidenav;
    }(_react2.default.Component);

    var Navs = function (_React$Component2) {
        (0, _inherits3.default)(Navs, _React$Component2);

        function Navs() {
            (0, _classCallCheck3.default)(this, Navs);
            return (0, _possibleConstructorReturn3.default)(this, (Navs.__proto__ || (0, _getPrototypeOf2.default)(Navs)).apply(this, arguments));
        }

        (0, _createClass3.default)(Navs, [{
            key: "render",
            value: function render() {
                var props = this.props;
                var data = props.data,
                    to = props.to,
                    ulClassName = props.ulClassName;

                return data.length && _react2.default.createElement(
                    "ul",
                    { className: ulClassName },
                    data.map(function (item) {
                        return _react2.default.createElement(Nav, (0, _extends3.default)({}, props, { key: item.id, item: item, to: _path2.default.join(to || "", item.path) }));
                    })
                );
            }
        }]);
        return Navs;
    }(_react2.default.Component);

    var Nav = function (_React$Component3) {
        (0, _inherits3.default)(Nav, _React$Component3);

        function Nav() {
            (0, _classCallCheck3.default)(this, Nav);
            return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
        }

        (0, _createClass3.default)(Nav, [{
            key: "render",
            value: function render() {
                var props = this.props;
                var item = props.item,
                    to = props.to,
                    Formatter = props.Formatter,
                    nestedProp = props.nestedProp,
                    liClassName = props.liClassName;

                if (item.sidenav === false) return null;
                return _react2.default.createElement(_reactRouterDom.Route, {
                    path: to,
                    children: function children(_ref) {
                        var args = (0, _objectWithoutProperties3.default)(_ref, []);
                        var match = args.match;

                        return _react2.default.createElement(
                            "li",
                            { className: liClassName },
                            _react2.default.createElement(Formatter, (0, _extends3.default)({ item: item, to: to }, props, args)),
                            match && item[nestedProp] && (item[nestedProp].length || null) && _react2.default.createElement(Navs, (0, _extends3.default)({}, props, { data: item[nestedProp], to: to }))
                        );
                    }
                });
            }
        }]);
        return Nav;
    }(_react2.default.Component);

    Sidenav.propTypes = {
        history: _propTypes2.default.object.isRequired,
        data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            id: _propTypes2.default.any.isRequired,
            path: _propTypes2.default.string.isRequired,
            sidenav: _propTypes2.default.bool
        })).isRequired,
        nestedProp: _propTypes2.default.string,
        Formatter: _propTypes2.default.func.isRequired,
        ulClassName: _propTypes2.default.string,
        liClassName: _propTypes2.default.string
    };
    Sidenav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };
    return Sidenav;
}