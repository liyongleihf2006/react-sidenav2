"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNoMatch;

var _getFlatData = require("./getFlatData");

var _getFlatData2 = _interopRequireDefault(_getFlatData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNoMatch(data, nestedProp, pathname) {
    var flatData = (0, _getFlatData2.default)(data, nestedProp);
    var patternName = pathname.replace(/\/[^/]+$/, "/:id");
    return !(flatData[pathname] || flatData[patternName]);
}