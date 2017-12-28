require('./api/models/db.js');
var express = require('express');
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');
var app = express();

app.set('port', 3000); // set port variable
app.set('json spaces', 2); // Prettify JSON Printing

// set public static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// use body-parser middleware for formdata (urlencoded)
app.use(bodyParser.urlencoded({ extended : false }));

// include routes
app.use('/api', routes);

app.listen(app.get('port'));