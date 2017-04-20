var express = require('express');
var cfenv   = require('cfenv');
var favicon = require('serve-favicon');
var m2m     = require('./routes/m2m');
var http    = require('http');

// Create a new express server
// ------------------------------------------------------------
var app = express();

// Load local VCAP configuration
// ------------------------------------------------------------
var vcapLocal = null;
try {
  vcapLocal = require("./vcap-local.json");
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) {
  console.error(e);
}

// Get app environment from Cloud Foundry, defaulting to local VCAP
// ------------------------------------------------------------
var appEnvOpts = vcapLocal ? { vcap: vcapLocal } : {};
var appEnv = cfenv.getAppEnv(appEnvOpts);

app.use('/m2m', m2m);
// app.use('/', router);

// serve the files out of ./public as our main files
// ------------------------------------------------------------
app.use(express.static('./public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// start server on the specified port and binding host
// ------------------------------------------------------------
var server = http.createServer(app);
server.listen(appEnv.port, "0.0.0.0", function () {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
