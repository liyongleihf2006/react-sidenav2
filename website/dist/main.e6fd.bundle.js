/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"9bd8","1":"3e78","2":"3d8d","3":"c658","4":"8367","5":"a650","6":"89d9","7":"0609","8":"b52c","9":"ae6c","10":"fdf8","11":"b5fb","12":"5e9a","13":"2ddc","14":"3a28","15":"ccdb","16":"ca03","17":"72fe","18":"62d6","19":"e1e2","20":"96f5","21":"422e","22":"c785"}[chunkId] + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/core-js/object/get-prototype-of.js from dll-reference window.dll ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/helpers/classCallCheck.js from dll-reference window.dll ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/babel-runtime/helpers/classCallCheck.js");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/helpers/createClass.js from dll-reference window.dll ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/babel-runtime/helpers/createClass.js");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/helpers/inherits.js from dll-reference window.dll ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/babel-runtime/helpers/inherits.js");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js from dll-reference window.dll ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference window.dll ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/classnames/index.js");

/***/ }),

/***/ "./node_modules/history/es/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/history/es/index.js from dll-reference window.dll ***!
  \**********************************************************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/history/es/index.js");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/path-browserify/index.js from dll-reference window.dll ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/path-browserify/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference window.dll ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-sidenav2/dist/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-sidenav2/dist/index.js from dll-reference window.dll ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/react-sidenav2/dist/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference window.dll ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference window.dll */ "dll-reference window.dll"))("./node_modules/react/index.js");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSidenav = __webpack_require__(/*! react-sidenav2 */ "./node_modules/react-sidenav2/dist/index.js");

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

__webpack_require__(/*! ./index.css */ "./src/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
    id: "-1",
    path: "/",
    name: "简介",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 0).then(function() { var module = __webpack_require__(/*! ./home/Home */ "./src/home/Home.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    }
}, {
    id: "0",
    path: "/getting_started",
    name: "开始使用",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 1).then(function() { var module = __webpack_require__(/*! ./getting-started/GettingStarted */ "./src/getting-started/GettingStarted.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    }
}, {
    id: "1",
    path: "/sidenav_option",
    name: "配置",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 2).then(function() { var module = __webpack_require__(/*! ./sidenav-option/SidenavOption */ "./src/sidenav-option/SidenavOption.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    children: [{
        id: "10",
        path: "/data",
        name: "Data",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 3).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/data/Data */ "./src/sidenav-option/modules/data/Data.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "11",
        path: "/history",
        name: "History",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 4).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/history/History */ "./src/sidenav-option/modules/history/History.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "12",
        path: "/nestedProp",
        name: "NestedProp",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 5).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/nestedProp/NestedProp */ "./src/sidenav-option/modules/nestedProp/NestedProp.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "13",
        path: "/getUserConfirmation",
        name: "GetUserConfirmation",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 6).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/getUserConfirmation/GetUserConfirmation */ "./src/sidenav-option/modules/getUserConfirmation/GetUserConfirmation.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "14",
        path: "/Loading",
        name: "Loading",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 7).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/Loading/Loading */ "./src/sidenav-option/modules/Loading/Loading.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "15",
        path: "/panelClassName",
        name: "PanelClassName",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 8).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/panelClassName/PanelClassName */ "./src/sidenav-option/modules/panelClassName/PanelClassName.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "16",
        path: "/topnavActiveClassName",
        name: "TopnavActiveClassName",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 9).then(function() { var module = __webpack_require__(/*! ./sidenav-option/modules/topnav-active-classname/TopnavActiveClassName */ "./src/sidenav-option/modules/topnav-active-classname/TopnavActiveClassName.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }]
}, {
    id: "2",
    path: "/sidenav",
    name: "Sidenav",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 10).then(function() { var module = __webpack_require__(/*! ./sidenav/Sidenav */ "./src/sidenav/Sidenav.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    children: [{
        id: "20",
        path: "/SidenavFormatter",
        name: "SidenavFormatter",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 11).then(function() { var module = __webpack_require__(/*! ./sidenav/modules/SidenavFormatter/SidenavFormatter */ "./src/sidenav/modules/SidenavFormatter/SidenavFormatter.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }]
}, {
    id: "3",
    path: "/sidenav_panel",
    name: "SidenavPanel",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 12).then(function() { var module = __webpack_require__(/*! ./sidenav-panel/SidenavPanel */ "./src/sidenav-panel/SidenavPanel.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    children: [{
        id: "30",
        path: "/empty_panel",
        name: "EmptyPanel",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 13).then(function() { var module = __webpack_require__(/*! ./sidenav-panel/modules/empty-panel/EmptyPanel */ "./src/sidenav-panel/modules/empty-panel/EmptyPanel.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "31",
        path: "/nomatch_panel",
        name: "NoMatchPanel",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 14).then(function() { var module = __webpack_require__(/*! ./sidenav-panel/modules/nomatch-panel/NoMatchPanel */ "./src/sidenav-panel/modules/nomatch-panel/NoMatchPanel.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "32",
        path: "/panel",
        name: "Panel",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 15).then(function() { var module = __webpack_require__(/*! ./sidenav-panel/modules/panel/Panel */ "./src/sidenav-panel/modules/panel/Panel.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }]
}, {
    id: "4",
    path: "/top_panel",
    name: "TopPanel",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 16).then(function() { var module = __webpack_require__(/*! ./topnav/Topnav */ "./src/topnav/Topnav.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    children: [{
        id: "40",
        path: "/topnav_formatter",
        name: "TopnavFormatter",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 17).then(function() { var module = __webpack_require__(/*! ./topnav/modules/topnav-formatter/TopnavFormatter */ "./src/topnav/modules/topnav-formatter/TopnavFormatter.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }, {
        id: "41",
        path: "/close_btn_formatter",
        name: "CloseBtnFormatter",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 18).then(function() { var module = __webpack_require__(/*! ./topnav/modules/close-btn-formatter/CloseBtnFormatter */ "./src/topnav/modules/close-btn-formatter/CloseBtnFormatter.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }]
}, {
    id: "5",
    path: "/crumbnav",
    name: "Crumbnav",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 19).then(function() { var module = __webpack_require__(/*! ./crumbnav/Crumbnav */ "./src/crumbnav/Crumbnav.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    children: [{
        id: "50",
        path: "/crumbnav_formatter",
        name: "CrumbnavFormatter",
        loader: function loader() {
            return __webpack_require__.e(/*! import() */ 20).then(function() { var module = __webpack_require__(/*! ./crumbnav/modules/crumbnav-formatter/CrumbnavFormatter */ "./src/crumbnav/modules/crumbnav-formatter/CrumbnavFormatter.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
        }
    }]
}, {
    id: "6",
    path: "/jump_to",
    name: "JumpTo",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 21).then(function() { var module = __webpack_require__(/*! ./jump-to/JumpTo */ "./src/jump-to/JumpTo.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    }
}, {
    id: "7",
    path: "/jump_to_byId",
    name: "JumpToById",
    loader: function loader() {
        return __webpack_require__.e(/*! import() */ 22).then(function() { var module = __webpack_require__(/*! ./jump-to-byId/JumpToById */ "./src/jump-to-byId/JumpToById.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    }
}];
var getUserConfirmation = function getUserConfirmation(prompt, resolve, reject) {
    if (prompt) {
        var result = window.confirm(prompt);
        result ? resolve() : reject();
    } else {
        resolve();
    }
};
var Loading = function Loading(_ref) {
    var navData = _ref.navData;

    return _react2.default.createElement(
        "div",
        null,
        navData.name,
        "\u9875\u52A0\u8F7D\u4E2D..."
    );
};
(0, _reactSidenav.setup)({
    data: data,
    history: (0, _history.createHashHistory)(),
    nestedProp: "children",
    getUserConfirmation: getUserConfirmation,
    Loading: Loading,
    panelClassName: "panel",
    topnavActiveClassName: "topnav-item-active"
});
var Sidenav = (0, _reactSidenav.createSidenav)();
var Topnav = (0, _reactSidenav.createTopnav)();
var SidenavPanel = (0, _reactSidenav.createSidenavPanel)();
var Crumbnav = (0, _reactSidenav.createCrumbnav)();

var SidenavFormatter = function (_React$Component) {
    (0, _inherits3.default)(SidenavFormatter, _React$Component);

    function SidenavFormatter() {
        (0, _classCallCheck3.default)(this, SidenavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (SidenavFormatter.__proto__ || (0, _getPrototypeOf2.default)(SidenavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(SidenavFormatter, [{
        key: "handler",
        value: function handler() {
            var item = this.props.item;

            (0, _reactSidenav.jumpToById)({ routeId: item.id });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                item = _props.item,
                match = _props.match;

            return _react2.default.createElement(
                "div",
                {
                    className: (0, _classnames2.default)("sidenav-item", { "sidenav-item-active": match && match.isExact }),
                    onClick: this.handler.bind(this)
                },
                item.name
            );
        }
    }]);
    return SidenavFormatter;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(Sidenav, {
    Formatter: SidenavFormatter,
    ulClassName: "sidenav-ul",
    liClassName: "sidenav-li"
}), document.querySelector("#sidenav"));

var EmptyPanel = function (_React$Component2) {
    (0, _inherits3.default)(EmptyPanel, _React$Component2);

    function EmptyPanel() {
        (0, _classCallCheck3.default)(this, EmptyPanel);
        return (0, _possibleConstructorReturn3.default)(this, (EmptyPanel.__proto__ || (0, _getPrototypeOf2.default)(EmptyPanel)).apply(this, arguments));
    }

    (0, _createClass3.default)(EmptyPanel, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                "\u8BF7\u4ECE\u5DE6\u4FA7\u5BFC\u822A\u9009\u62E9\u6A21\u5757"
            );
        }
    }]);
    return EmptyPanel;
}(_react2.default.Component);

var NoMatchPanel = function (_React$Component3) {
    (0, _inherits3.default)(NoMatchPanel, _React$Component3);

    function NoMatchPanel() {
        (0, _classCallCheck3.default)(this, NoMatchPanel);
        return (0, _possibleConstructorReturn3.default)(this, (NoMatchPanel.__proto__ || (0, _getPrototypeOf2.default)(NoMatchPanel)).apply(this, arguments));
    }

    (0, _createClass3.default)(NoMatchPanel, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                pathname = _props2.pathname,
                history = _props2.history;

            return _react2.default.createElement(
                "div",
                null,
                "\u65E0\u6CD5\u627E\u5230\u8DEF\u5F84\"",
                pathname,
                "\"!",
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            history.goBack();
                        } },
                    "\u9000\u540E"
                )
            );
        }
    }]);
    return NoMatchPanel;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(SidenavPanel, {
    EmptyPanel: EmptyPanel,
    NoMatchPanel: NoMatchPanel
}), document.querySelector("#main"));

var TopnavFormatter = function (_React$Component4) {
    (0, _inherits3.default)(TopnavFormatter, _React$Component4);

    function TopnavFormatter() {
        (0, _classCallCheck3.default)(this, TopnavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (TopnavFormatter.__proto__ || (0, _getPrototypeOf2.default)(TopnavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(TopnavFormatter, [{
        key: "handler",
        value: function handler() {
            var item = this.props.item;

            (0, _reactSidenav.jumpToById)({ "routeId": item.id });
        }
    }, {
        key: "render",
        value: function render() {
            var item = this.props.item;

            return _react2.default.createElement(
                "span",
                {
                    className: "topnav-item-content",
                    onClick: this.handler.bind(this)
                },
                item.name
            );
        }
    }]);
    return TopnavFormatter;
}(_react2.default.Component);

var CloseBtnFormatter = function (_React$Component5) {
    (0, _inherits3.default)(CloseBtnFormatter, _React$Component5);

    function CloseBtnFormatter() {
        (0, _classCallCheck3.default)(this, CloseBtnFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (CloseBtnFormatter.__proto__ || (0, _getPrototypeOf2.default)(CloseBtnFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(CloseBtnFormatter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "span",
                null,
                "\xD7"
            );
        }
    }]);
    return CloseBtnFormatter;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(Topnav, {
    Formatter: TopnavFormatter,
    CloseBtnFormatter: CloseBtnFormatter,
    className: "topnav-item",
    closeBtnClassName: "topnav-close"
}), document.querySelector("#topnav"));

var CrumbnavFormatter = function (_React$Component6) {
    (0, _inherits3.default)(CrumbnavFormatter, _React$Component6);

    function CrumbnavFormatter() {
        (0, _classCallCheck3.default)(this, CrumbnavFormatter);
        return (0, _possibleConstructorReturn3.default)(this, (CrumbnavFormatter.__proto__ || (0, _getPrototypeOf2.default)(CrumbnavFormatter)).apply(this, arguments));
    }

    (0, _createClass3.default)(CrumbnavFormatter, [{
        key: "render",
        value: function render() {
            var item = this.props.item;

            return item.name;
        }
    }]);
    return CrumbnavFormatter;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(Crumbnav, {
    className: "crumbnav-item",
    Formatter: CrumbnavFormatter
}), document.querySelector("#crumbnav"));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liyonglei/workspace2/react-sidenav2/website/src/index.jsx */"./src/index.jsx");


/***/ }),

/***/ "dll-reference window.dll":
/*!*****************************!*\
  !*** external "window.dll" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.dll;

/***/ })

/******/ });
//# sourceMappingURL=main.e6fd.bundle.js.map