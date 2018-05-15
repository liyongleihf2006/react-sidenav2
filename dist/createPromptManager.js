"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPromptManager = function createPromptManager(getUserConfirmation) {
  var prompt = null;
  var confirm = function confirm() {
    var resolve = void 0,
        reject = void 0,
        promise = new _promise2.default(function (res, rej) {
      resolve = res;
      reject = rej;
    });
    if (typeof getUserConfirmation === "function") {
      getUserConfirmation(prompt, resolve, reject);
    } else {
      (0, _warning2.default)(false, "needs a getUserConfirmation function in order to use a prompt message");
      resolve();
    }
    return promise;
  };
  var setPrompt = function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  return {
    setPrompt: setPrompt,
    confirm: confirm
  };
};

exports.default = createPromptManager;