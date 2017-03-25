"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Socket.io entry


var _constants = require("../constants");

var _socket = require("socket.io");

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
//# sourceMappingURL=index.js.map
