// Test api loader
const chai = require("chai");
const ServerAPI = require("../api/server");
const expect = chai.expect;
/** Plugins used */
const plugins = [
  { name: "socket.io", prop: "io"}
];

// Init chai's should
chai.should();

describe("Server Test", () => {
  const API = new ServerAPI.ServerAPI(
    { // Fake logger
      info() {},
      debug() {},
      warn() {},
      err() {},
      throw() {},
      throw_noexit() {},
      prefix: 0
    }
  );

  it("should test API Loading", (done) => {
    expect(API).to.exist;
    expect(API).to.be.an("object");
    done();
  });

  // Check for plugins
  for (let plugin of plugins) {
    it(`shoudl check for plugin ${plugin.name} (prop: ${plugin.prop})`, (done) => {
      expect(API).to.have.property(plugin.prop);
      done();
    });
  }

});
