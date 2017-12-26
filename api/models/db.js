var mongoose = require('mongoose');
var dbURL = "mongodb://localhost:27017/blog";

mongoose.connect(dbURL, {
	useMongoClient : true
});

mongoose.connection.on('connected', function(){
	console.log('mongoose connected!');
});

mongoose.connection.on('disconnected', function(){
	console.log('mongoose disconnected!');
});

mongoose.connection.on('error', function(err){
	console.log('mongoose got error! ' + err);
});

require('./posts.model.js');