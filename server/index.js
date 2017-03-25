// Server entry file
import "babel-polyfill";
import SocketIO from "./socket.io";
import chalk from "chalk";

/**
 * Api entry class
 * Intilizes the Api
 * @class API
 * @param logger {Logger} Logging object
 * @param server {Object} Express server
 * @param plugins {Array} Array of plugins and extra API methods
 */
export class ServerAPI {
  constructor(logger, server, app, plugins = []) {
    this.logger = logger;
    this.server = server;
    this.express = app;
    this.raw = {};
    this.raw.plugins = plugins;
    this.logger.prefix = chalk.yellow("API");
    this.load();
  }

  /**
   * Loading Function
   * Loads methods and plugins
   * @return Promise
   */
  load() {
    this.logger.debug("Loading API...");
    this.io = new SocketIO(this);
  }
}
