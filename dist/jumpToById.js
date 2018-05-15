"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = jumpToById;

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _getFlatDataById = require("./getFlatDataById");

var _getFlatDataById2 = _interopRequireDefault(_getFlatDataById);

var _ishistorypathequal = require("./ishistorypathequal");

var _ishistorypathequal2 = _interopRequireDefault(_ishistorypathequal);

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jumpToById(_ref) {
    var routeId = _ref.routeId,
        id = _ref.id,
        params = _ref.params;

    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp;

    (0, _invariant2.default)(routeId, "the params of 'routeId' is required");
    var location = history.location;

    var flatData = (0, _getFlatDataById2.default)(data, nestedProp);
    var to = flatData[routeId].to;
    if (id) {
        to = to.replace(":id", id);
    }
    var panelParams = sessionStorage.getItem("sidenav-panelParams");
    if (!panelParams) {
        panelParams = {};
    } else {
        panelParams = JSON.parse(panelParams);
    }
    panelParams[to] = params;
    sessionStorage.setItem("sidenav-panelParams", (0, _stringify2.default)(panelParams));
    if (!(0, _ishistorypathequal2.default)(to, location)) {
        history.push(to);
    } else {
        history.replace(to);
    }
}