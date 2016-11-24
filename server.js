module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("babel-register");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("config");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(0);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _webpackDevMiddleware = __webpack_require__(6);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack = __webpack_require__(5);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackHotMiddleware = __webpack_require__(7);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpackConfig = _lodash2.default.omit(_config2.default.webpack.browser, 'watch');
var serverConfig = _config2.default.server;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(webpackConfig);

app.use((0, _webpackDevMiddleware2.default)(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.use((0, _webpackHotMiddleware2.default)(compiler));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'build', 'index.html'));
});

app.listen(serverConfig.port, function (err) {
  console.log('Listening at http://localhost:' + serverConfig.port + '/');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(webpackConfig, 'webpackConfig', 'E:/indix/smart-react-boilerplate/server/index.js');

  __REACT_HOT_LOADER__.register(serverConfig, 'serverConfig', 'E:/indix/smart-react-boilerplate/server/index.js');

  __REACT_HOT_LOADER__.register(app, 'app', 'E:/indix/smart-react-boilerplate/server/index.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', 'E:/indix/smart-react-boilerplate/server/index.js');
}();

;

/***/ }
/******/ ]);