var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8080;

// app.use(express.static(__dirname + '/css'));
app.use('/css',express.static(__dirname +'/css'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});