var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
    var fileBuffer = fs.readFileSync("index.html").toString();
    res.send(fileBuffer);
})

app.listen(process.env.PORT || 8080);
