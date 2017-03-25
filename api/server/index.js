"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Server entry file


require("babel-polyfill");

var _socket = require("./socket.io");

var _socket2 = _interopRequireDefault(_socket);

var _chalk = require("chalk");

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
  function ServerAPI(logger, server, app) {
    var plugins = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, ServerAPI);

    this.logger = logger;
    this.server = server;
    this.express = app;
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
//# sourceMappingURL=index.js.map
