// Socket.io entry
import { MAKE_API_LOG_PREFIX } from "../constants";
import io from "socket.io";

export default class SocketIO {
  constructor(api) {
    this.logger = api.logger;
    this.api = api;
    this.events = [];
    this.logger.prefix = MAKE_API_LOG_PREFIX("SOCKET.IO");
    this.loadIO();
  }

  /**
   * Loads Socket.IO
   */
  loadIO() {
    this.io = io(this.api.server);
    this.io.on("connection", this._onConnection.bind(this));
  }

  /**
   * What to do on connection
   */
  _onConnection(socket) {
    this.logger.debug("A client has connected to the socket.io server");
    // Add Listeners
    let listener;
    for (listener of this.events) {
      if (listener.hasOwnProperty("event")) {
        socket.on(listener.event, listener.listener(socket, this.logger));
      } else {
        listener.listener(socket, this.logger);
      }
    }
  }

  /**
   * Adds a listener
   */
  addEvent(event, listener) {
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

}
