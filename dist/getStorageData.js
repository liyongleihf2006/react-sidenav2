"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getStorageData;

var _getFlatData = require("./getFlatData");

var _getFlatData2 = _interopRequireDefault(_getFlatData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStorageData(pathnames) {
    var _props = this.props,
        data = _props.data,
        nestedProp = _props.nestedProp;

    var flatData = (0, _getFlatData2.default)(data, nestedProp);
    if (!pathnames) {
        return [];
    } else {
        pathnames = JSON.parse(pathnames);
    }
    return pathnames.map(function (pathname) {
        var patternName = pathname;
        if (!flatData[patternName]) {
            patternName = pathname.replace(/\/[^/]+$/, "/:id");
        }
        return { data: flatData[patternName], pathname: pathname };
    }).filter(function (item) {
        return item.data;
    });
}