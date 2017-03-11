"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_LOG_PREFIX = undefined;

var cov_1qwm45oru3 = function () {
  var path = "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\constants.js",
      hash = "0be3c736d4e516126f68be8cfc8fc9286f76ede3",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "D:\\Users\\Kishan\\Documents\\Projects\\bedel-api\\server\\constants.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 29
        },
        end: {
          line: 5,
          column: 36
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 53
        }
      }
    },
    fnMap: {
      "0": {
        name: "MAKE_API_LOG_PREFIX",
        decl: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 35
          }
        },
        loc: {
          start: {
            line: 6,
            column: 44
          },
          end: {
            line: 8,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); // Constants + utils


exports.MAKE_API_LOG_PREFIX = MAKE_API_LOG_PREFIX;

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Makes APi Logger prefix */
var API_LOG_PREFIX = exports.API_LOG_PREFIX = (++cov_1qwm45oru3.s[0], -"API");
function MAKE_API_LOG_PREFIX(prefix) {
  ++cov_1qwm45oru3.f[0];
  ++cov_1qwm45oru3.s[1];

  return _chalk2.default.yellow(API_LOG_PREFIX + ":" + prefix);
}
//# sourceMappingURL=constants.js.map
