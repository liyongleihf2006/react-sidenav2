"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOptions = exports.setup = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _reactLoadable = require("react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _createPromptManager2 = require("./createPromptManager");

var _createPromptManager3 = _interopRequireDefault(_createPromptManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = void 0;
var setup = exports.setup = function setup(_ref) {
    var data = _ref.data,
        history = _ref.history,
        nestedProp = _ref.nestedProp,
        panelClassName = _ref.panelClassName,
        getUserConfirmation = _ref.getUserConfirmation,
        Loading = _ref.Loading,
        _ref$topnavActiveClas = _ref.topnavActiveClassName,
        topnavActiveClassName = _ref$topnavActiveClas === undefined ? "topnav-item-active" : _ref$topnavActiveClas;

    (0, _invariant2.default)(data, "the params of 'data' is required");
    (0, _invariant2.default)(history, "the params of 'history' is required");
    (0, _invariant2.default)(nestedProp, "the params of 'nestedProp' is required");
    (0, _invariant2.default)(getUserConfirmation, "the params of 'getUserConfirmation' is required");
    (0, _invariant2.default)(Loading, "the params of 'Loading' is required");
    options = {};
    options.data = data;
    options.history = history;
    options.nestedProp = nestedProp;
    options.panelClassName = panelClassName;
    options.getUserConfirmation = getUserConfirmation;
    options.Loading = Loading;
    options.topnavActiveClassName = topnavActiveClassName;
    initData(options.data, options.nestedProp, options.getUserConfirmation, options.Loading);
};
var getOptions = exports.getOptions = function getOptions() {
    (0, _invariant2.default)(options, "You should first call the method of \"setup\" to initialize");
    return options;
};
function initData(data, nestedProp, getUserConfirmation, Loading) {
    _initData(data, "");
    function _initData(items, parentTo) {
        items.forEach(function (item) {
            var _createPromptManager = (0, _createPromptManager3.default)(getUserConfirmation),
                setPrompt = _createPromptManager.setPrompt,
                confirm = _createPromptManager.confirm;

            item.to = _path2.default.join(parentTo, item.path);
            item.confirm = confirm;
            item.component = (0, _reactLoadable2.default)({
                loader: item.loader,
                render: function render(loaded, props) {
                    var Component = loaded.default;
                    return _react2.default.createElement(Component, (0, _extends3.default)({}, props, { setPrompt: setPrompt }));
                },
                loading: function loading(props) {
                    return _react2.default.createElement(Loading, (0, _extends3.default)({}, props, { navData: item }));
                }
            });
            if (item[nestedProp] && item[nestedProp]) {
                _initData(item[nestedProp], item.to);
            }
        });
    }
}