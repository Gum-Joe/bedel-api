(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chalk"), require("babel-polyfill"), require("socket.io"));
	else if(typeof define === 'function' && define.amd)
		define(["chalk", "babel-polyfill", "socket.io"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("chalk"), require("babel-polyfill"), require("socket.io")) : factory(root["chalk"], root["babel-polyfill"], root["socket.io"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Socket.io entry


var _constants = __webpack_require__(3);

var _socket = __webpack_require__(4);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketIO = function () {
  function SocketIO(api) {
    _classCallCheck(this, SocketIO);

    this.logger = api.logger;
    this.api = api;
    this.events = [];
    this.logger.prefix = (0, _constants.MAKE_API_LOG_PREFIX)("SOCKET.IO");
    this.loadIO();
  }

  /**
   * Loads Socket.IO
   */


  _createClass(SocketIO, [{
    key: "loadIO",
    value: function loadIO() {
      this.io = (0, _socket2.default)(this.api.server);
      this.io.on("connection", this._onConnection.bind(this));
    }

    /**
     * What to do on connection
     */

  }, {
    key: "_onConnection",
    value: function _onConnection(socket) {
      this.logger.debug("A client has connected to the socket.io server");
      // Add Listeners
      var listener = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          listener = _step.value;

          if (listener.hasOwnProperty("event")) {
            socket.on(listener.event, listener.listener(socket, this.logger));
          } else {
            listener.listener(socket, this.logger);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Adds a listener
     */

  }, {
    key: "addEvent",
    value: function addEvent(event, listener) {
      if (typeof event === "function") {
        this.events.push({
          listener: event.bind(this)
        });
      } else {
        this.events.push({
          event: event,
          listener: listener.bind(this)
        });
      }
    }
  }]);

  return SocketIO;
}();

exports.default = SocketIO;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_LOG_PREFIX = undefined;
exports.MAKE_API_LOG_PREFIX = MAKE_API_LOG_PREFIX;

var _chalk = __webpack_require__(0);

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Makes APi Logger prefix */
var API_LOG_PREFIX = exports.API_LOG_PREFIX = -"API"; // Constants + utils
function MAKE_API_LOG_PREFIX(prefix) {
  return _chalk2.default.yellow(API_LOG_PREFIX + ":" + prefix);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Server entry file


__webpack_require__(2);

var _socket = __webpack_require__(1);

var _socket2 = _interopRequireDefault(_socket);

var _chalk = __webpack_require__(0);

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Api entry class
 * Intilizes the Api
 * @class API
 * @param logger {Logger} Logging object
 * @param server {Object} Express server
 * @param plugins {Array} Array of plugins and extra API methods
 */
var ServerAPI = exports.ServerAPI = function () {
  function ServerAPI(logger, server) {
    var plugins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, ServerAPI);

    this.logger = logger;
    this.server = server;
    this.raw = {};
    this.raw.plugins = plugins;
    this.logger.prefix = _chalk2.default.yellow("API");
    this.load();
  }

  /**
   * Loading Function
   * Loads methods and plugins
   * @return Promise
   */


  _createClass(ServerAPI, [{
    key: "load",
    value: function load() {
      this.logger.debug("Loading API...");
      this.io = new _socket2.default(this);
    }
  }]);

  return ServerAPI;
}();

/***/ })
/******/ ]);
});