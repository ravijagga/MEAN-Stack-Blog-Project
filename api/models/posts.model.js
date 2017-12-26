var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	by : {
		type : String,
		required : true
	},
	body : {
		type : String,
		required : true
	},
	createdAt : {
		type : Date,
		'default' : Date.now
	},
}, {
	versionKey : false
});

mongoose.model('Post', postSchema);