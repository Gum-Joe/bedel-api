"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerAPI = undefined;

var cov_1737ujcar4 = function () {
  var path = "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\index.js",
      hash = "acc59a1f461e491373d9f5de1e25d4f30cae3ce7",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "1": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 25
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 18
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 31
        }
      },
      "4": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 45
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 16
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 40
        }
      },
      "7": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 44
          },
          end: {
            line: 22,
            column: 3
          }
        }
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 32,
            column: 3
          }
        }
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 40
          },
          end: {
            line: 15,
            column: 42
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0]
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
  function ServerAPI(logger, server) {
    var plugins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_1737ujcar4.b[0][0], []);

    _classCallCheck(this, ServerAPI);

    ++cov_1737ujcar4.f[0];
    ++cov_1737ujcar4.s[0];

    this.logger = logger;
    ++cov_1737ujcar4.s[1];
    this.server = server;
    ++cov_1737ujcar4.s[2];
    this.raw = {};
    ++cov_1737ujcar4.s[3];
    this.raw.plugins = plugins;
    ++cov_1737ujcar4.s[4];
    this.logger.prefix = _chalk2.default.yellow("API");
    ++cov_1737ujcar4.s[5];
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
      ++cov_1737ujcar4.f[1];
      ++cov_1737ujcar4.s[6];

      this.logger.debug("Loading API...");
      ++cov_1737ujcar4.s[7];
      this.io = new _socket2.default(this);
    }
  }]);

  return ServerAPI;
}();
//# sourceMappingURL=index.js.map
