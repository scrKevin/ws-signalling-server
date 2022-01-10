var Turn = require('node-turn');
var turnServer = new Turn({
  // set options
  authMech: 'long-term'
});
turnServer.start();

