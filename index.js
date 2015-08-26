// Globals
global.requireLib = require('rekuire');
global.__basedir = __dirname;

// Dependencies
var express = require('express');
var Config = requireLib('Config');

/**
 * FRONTEND
 */

var frontApp = express();
requireLib('front/app/middlewares')(frontApp);
requireLib('front/app/routes')(frontApp);

var frontPort = Config.server.port.front;
frontApp.listen(frontPort, function() {
    console.log('>>> FRONTEND http listening '+frontPort+'');
})
