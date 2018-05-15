"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

exports.default = createCrumbnav;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require("react-router-dom");

var _ishistorypathequal = require("./ishistorypathequal");

var _ishistorypathequal2 = _interopRequireDefault(_ishistorypathequal);

var _pushPath = require("./pushPath");

var _pushPath2 = _interopRequireDefault(_pushPath);

var _createTransitionManager = require("./createTransitionManager");

var _setup = require("./setup");

var _isNoMatch = require("./isNoMatch");

var _isNoMatch2 = _interopRequireDefault(_isNoMatch);

var _getStorageData = require("./getStorageData");

var _getStorageData2 = _interopRequireDefault(_getStorageData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCrumbnav() {
    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp;

    var Crumbnav = function (_React$Component) {
        (0, _inherits3.default)(Crumbnav, _React$Component);

        function Crumbnav() {
            (0, _classCallCheck3.default)(this, Crumbnav);
            return (0, _possibleConstructorReturn3.default)(this, (Crumbnav.__proto__ || (0, _getPrototypeOf2.default)(Crumbnav)).apply(this, arguments));
        }

        (0, _createClass3.default)(Crumbnav, [{
            key: "render",
            value: function render() {
                var props = this.props;
                var history = props.history;

                return _react2.default.createElement(
                    _reactRouterDom.Router,
                    { history: history },
                    _react2.default.createElement(CrumbnavItems, props)
                );
            }
        }]);
        return Crumbnav;
    }(_react2.default.Component);

    var CrumbnavItems = function (_React$Component2) {
        (0, _inherits3.default)(CrumbnavItems, _React$Component2);

        function CrumbnavItems() {
            (0, _classCallCheck3.default)(this, CrumbnavItems);
            return (0, _possibleConstructorReturn3.default)(this, (CrumbnavItems.__proto__ || (0, _getPrototypeOf2.default)(CrumbnavItems)).apply(this, arguments));
        }

        (0, _createClass3.default)(CrumbnavItems, [{
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
                var _this3 = this;

                var props = this.props;
                var history = props.history,
                    Formatter = props.Formatter,
                    SegmentLine = props.SegmentLine,
                    className = props.className;
                var items = this.state.items;

                if (sessionStorage.getItem("sidenav") && !JSON.parse(sessionStorage.getItem("sidenav")).length) {
                    return null;
                }
                return items.map(function (item, idx) {
                    return _react2.default.createElement(
                        "span",
                        { className: className, key: item.to, onClick: _this3.handleClick.bind(_this3, item.to) },
                        _react2.default.createElement(Formatter, { item: item })
                    );
                });
            }
        }, {
            key: "handleClick",
            value: function handleClick(to) {
                var history = this.props.history;
                var location = history.location;

                if (!(0, _ishistorypathequal2.default)(to, location)) {
                    history.push(to);
                } else {
                    history.replace(to);
                }
            }
        }, {
            key: "listener",
            value: function listener() {
                var items = this.getItems();
                this.setState({ items: items });
            }
        }, {
            key: "getItems",
            value: function getItems() {
                var _props = this.props,
                    history = _props.history,
                    data = _props.data,
                    nestedProp = _props.nestedProp;

                var pathname = history.location.pathname;
                var patternPathname = pathname.replace(/\/[^/]+$/, "/:id");
                var items = [];
                _getItems(data);
                return items;
                function _getItems(data) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = (0, _getIterator3.default)(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            if (item.to === pathname) {
                                items.unshift(item);
                                return true;
                            }
                            if (item.to === patternPathname) {
                                var obj = {};
                                for (var key in item) {
                                    obj[key] = item[key];
                                }
                                obj.to = pathname;
                                items.unshift(obj);
                                return true;
                            }
                            if (item[nestedProp] && item[nestedProp].length) {
                                if (_getItems(item[nestedProp])) {
                                    items.unshift(item);
                                    return true;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return false;
                }
            }
        }]);
        return CrumbnavItems;
    }(_react2.default.Component);

    Crumbnav.propTypes = {
        history: _propTypes2.default.object.isRequired,
        data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            id: _propTypes2.default.any.isRequired,
            path: _propTypes2.default.string.isRequired
        })).isRequired,
        nestedProp: _propTypes2.default.string,
        Formatter: _propTypes2.default.func.isRequired,
        className: _propTypes2.default.string
    };
    Crumbnav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };;
    return Crumbnav;
}