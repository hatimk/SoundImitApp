var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('This is a test!');
})

app.listen(process.env.PORT);

console.log('process.env.PORT: ' + process.env.PORT);
console.log('app.get(port): ' + app.get('port'));
