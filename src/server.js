"use strict";
exports.__esModule = true;
var controller_1 = require("./controller/controller");
var fetch = require('node-fetch');
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.post("/", function (req, res) {
    var params = req.body.intent;
    var response = controller_1.call(params);
    //GET INTENT 
    //CALL FUNCTION
    res.json(response);
});
app.listen(PORT, function () {
    console.log("Server running PORT: ", PORT);
});
