"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFlatDataById;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFlatDataById(data, nestedProp) {
    var flatData = {};
    _getFlatDataById(data, "");
    return flatData;
    function _getFlatDataById(data, parentTo) {
        if (data && data.length) {
            data.forEach(function (item) {
                var to = _path2.default.join(parentTo, item.path);
                item.to = to;
                flatData[item.id] = item;
                if (item[nestedProp] && item[nestedProp].length) {
                    _getFlatDataById(item[nestedProp], to);
                }
            });
        }
    }
}