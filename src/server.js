var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send(JSON.stringify({ a: 'a' }));
});
app.listen(PORT, function () {
    console.log("Server running PORT: ", PORT);
});
