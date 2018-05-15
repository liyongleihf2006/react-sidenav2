"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jumpTo;

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _ishistorypathequal = require("./ishistorypathequal");

var _ishistorypathequal2 = _interopRequireDefault(_ishistorypathequal);

var _setup = require("./setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jumpTo(_ref) {
    var to = _ref.to;

    var _getOptions = (0, _setup.getOptions)(),
        data = _getOptions.data,
        history = _getOptions.history,
        nestedProp = _getOptions.nestedProp;

    (0, _invariant2.default)(to, "the params of 'to' is required");
    var location = history.location;

    if (!(0, _ishistorypathequal2.default)(to, location)) {
        history.push(to);
    } else {
        history.replace(to);
    }
}