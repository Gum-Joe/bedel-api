"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_LOG_PREFIX = undefined;
exports.MAKE_API_LOG_PREFIX = MAKE_API_LOG_PREFIX;

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Makes APi Logger prefix */
var API_LOG_PREFIX = exports.API_LOG_PREFIX = "API"; // Constants + utils
function MAKE_API_LOG_PREFIX(prefix) {
  return _chalk2.default.yellow(API_LOG_PREFIX + ":" + prefix);
}
//# sourceMappingURL=constants.js.map
