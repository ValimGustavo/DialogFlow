var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
    console.log("entrou");
    res.send({ "fulfillmentMessages": "ESTA RODANDO NO HEROKU" });
});
app.listen(PORT, function () {
    console.log("Server running PORT: ", PORT);
});
