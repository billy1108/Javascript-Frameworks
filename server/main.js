var express = require('express'); 
var ConfigManager = require("./app/config.js");

var port = 8081; // port

var app = express();
var configApp = ConfigManager(app, port);

configApp.configApplication();