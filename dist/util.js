"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCloseBack = setCloseBack;
exports.isCloseBack = isCloseBack;
var _isCloseBack = false; //是否是因为关闭标签导致的历史回退
function setCloseBack(isCloseBack) {
    _isCloseBack = isCloseBack;
}
function isCloseBack() {
    return _isCloseBack;
}