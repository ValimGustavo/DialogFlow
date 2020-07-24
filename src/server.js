"use strict";
exports.__esModule = true;
var fetch = require('node-fetch');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.post("/", function (req, res) {
    var webHookRequest = req.body;
    var obj;
    var SEARCH_URL = 'https://www.youtube.com/watch?v=';
    var SEARCH_ID = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrtkWROvn-lVFZqLd397jlXayrz6hWhjs&part=id&q=';
    var search = 'carros';
    fetch(SEARCH_ID + search).then(function (response) {
        console.log(response);
        res.json(response);
    });
    // const intent = req.body.queryResult.intent.displayName;
    // let obj:webHookTextResponse;
    // if( intent == 'Esporte'){
    //     console.log('INTENT'+ intent)
    //     obj = {
    //         fulfillmentMessages:[
    //             {
    //                 text:{
    //                     text:[
    //                         "Resposta para Intent ESPORT:" + intent
    //                     ]
    //                 }
    //             }
    //         ]
    //     }
    // }else{
    //     console.log("INTENT"+ intent)
    //      obj = {
    //         fulfillmentMessages:[
    //             {
    //                 text:{
    //                     text:[
    //                         "Resposta para Intent" + intent
    //                     ]
    //                 }
    //             }
    //         ]
    //     }
    // }
});
app.listen(PORT, function () {
    console.log("Server running PORT: ", PORT);
});
