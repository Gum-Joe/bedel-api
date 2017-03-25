// Constants + utils
import chalk from "chalk";

/* Makes APi Logger prefix */
export const API_LOG_PREFIX = "API";
export function MAKE_API_LOG_PREFIX(prefix) {
  return chalk.yellow(`${API_LOG_PREFIX}:${prefix}`);
}
