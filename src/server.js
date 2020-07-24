"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.post("/", function (req, res) {
    console.log(req);
    var obj = {
        fulfillmentMessages: [
            {
                text: {
                    text: [
                        "Resposta vindo do servidor"
                    ]
                }
            }
        ]
    };
    res.json(obj);
});
app.listen(PORT, function () {
    console.log("Server running PORT: ", PORT);
});
