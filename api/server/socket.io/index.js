"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1cd1khkljh = function () {
  var path = "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\socket.io\\index.js",
      hash = "f280d95395fb4ab45391f4eca3efb171e3032f5d",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\socket.io\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 29
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "2": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 21
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 58
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 18
        }
      },
      "5": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 34
        }
      },
      "6": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 60
        }
      },
      "7": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 72
        }
      },
      "8": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "9": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 34,
          column: 7
        }
      },
      "10": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 74
        }
      },
      "11": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 47
        }
      },
      "12": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 51,
          column: 5
        }
      },
      "13": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 45,
          column: 9
        }
      },
      "14": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 50,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 19
          },
          end: {
            line: 12,
            column: 3
          }
        }
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 11
          },
          end: {
            line: 20,
            column: 3
          }
        }
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 36,
            column: 3
          }
        }
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 52,
            column: 3
          }
        }
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        }, {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        }]
      },
      "1": {
        loc: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        }, {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        }]
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Socket.io entry


var _constants = require("../constants");

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketIO = function () {
  function SocketIO(api) {
    _classCallCheck(this, SocketIO);

    ++cov_1cd1khkljh.f[0];
    ++cov_1cd1khkljh.s[0];

    this.logger = api.logger;
    ++cov_1cd1khkljh.s[1];
    this.api = api;
    ++cov_1cd1khkljh.s[2];
    this.events = [];
    ++cov_1cd1khkljh.s[3];
    this.logger.prefix = (0, _constants.MAKE_API_LOG_PREFIX)("SOCKET.IO");
    ++cov_1cd1khkljh.s[4];
    this.loadIO();
  }

  /**
   * Loads Socket.IO
   */


  _createClass(SocketIO, [{
    key: "loadIO",
    value: function loadIO() {
      ++cov_1cd1khkljh.f[1];
      ++cov_1cd1khkljh.s[5];

      this.io = (0, _socket2.default)(this.api.server);
      ++cov_1cd1khkljh.s[6];
      this.io.on("connection", this._onConnection.bind(this));
    }

    /**
     * What to do on connection
     */

  }, {
    key: "_onConnection",
    value: function _onConnection(socket) {
      ++cov_1cd1khkljh.f[2];
      ++cov_1cd1khkljh.s[7];

      this.logger.debug("A client has connected to the socket.io server");
      // Add Listeners
      var listener = void 0;
      ++cov_1cd1khkljh.s[8];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          listener = _step.value;
          ++cov_1cd1khkljh.s[9];

          if (listener.hasOwnProperty("event")) {
            ++cov_1cd1khkljh.b[0][0];
            ++cov_1cd1khkljh.s[10];

            socket.on(listener.event, listener.listener(socket, this.logger));
          } else {
            ++cov_1cd1khkljh.b[0][1];
            ++cov_1cd1khkljh.s[11];

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
      ++cov_1cd1khkljh.f[3];
      ++cov_1cd1khkljh.s[12];

      if (typeof event === "function") {
        ++cov_1cd1khkljh.b[1][0];
        ++cov_1cd1khkljh.s[13];

        this.events.push({
          listener: event.bind(this)
        });
      } else {
        ++cov_1cd1khkljh.b[1][1];
        ++cov_1cd1khkljh.s[14];

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
