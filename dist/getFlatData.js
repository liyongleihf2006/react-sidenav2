"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFlatData;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFlatData(data, nestedProp) {
    var flatData = {};
    _getFlatData(data, "");
    return flatData;
    function _getFlatData(data, parentTo) {
        if (data && data.length) {
            data.forEach(function (item) {
                var to = _path2.default.join(parentTo, item.path);
                flatData[to] = item;
                if (item[nestedProp] && item[nestedProp].length) {
                    _getFlatData(item[nestedProp], to);
                }
            });
        }
    }
}