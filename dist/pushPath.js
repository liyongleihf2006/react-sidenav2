"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = pushPath;

var _getFlatData = require("./getFlatData");

var _getFlatData2 = _interopRequireDefault(_getFlatData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pushPath(sidenavStorage, pathname, data, nestedProp) {
    if (sidenavStorage.every(function (pathname2) {
        return pathname2 !== pathname;
    })) {
        var patternPathname = pathname.replace(/\/[^/]+$/, "/:id");
        if ((0, _getFlatData2.default)(data, nestedProp)[pathname] || (0, _getFlatData2.default)(data, nestedProp)[patternPathname]) {
            sidenavStorage.push(pathname);
            sessionStorage.setItem("sidenav", (0, _stringify2.default)(sidenavStorage));
        }
    }
}