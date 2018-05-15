"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHistoryPathEqual;

var _history = require("history");

/**
 * 判断传入的两个路径是否相同
 * @param {string|object} path1 
 * @param {string|object} path2 
 * @return {boolean} 
 */
function isHistoryPathEqual(path1, path2) {
    return getHref(path1) === getHref(path2);
    function getHref(to) {
        var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;
        return (0, _history.createPath)(location);
    }
}