var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8080;


// var jsonParser = bodyParser.json();

// var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app.use(bodyParser.json({ type: 'application/**json' }));

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// app.use(bodyParser.text({ type: 'text/html' }));

// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
})