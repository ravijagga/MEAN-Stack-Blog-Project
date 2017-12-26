var mongoose = require('mongoose');
var Post = mongoose.model('Post');
mongoose.Promise = require('bluebird');

module.exports.getAllPosts = function(req, res){

	console.log(req.query);
	if(req.query && req.query.page){
		var page = parseInt(req.query.page, 10);
		page = Math.max(1, page);
	} else{
		var page = 1;
	}

	var skip = 5 * (page - 1);

	Post
		.find({})
		.skip(skip)
		.limit(5)
		.exec(function(err, docs){
			res.status(200);
			res.json(docs);
		});
}

module.exports.getPost = function(req, res){
	postId = req.params.id;
	
	Post
		.findById(postId)
		.exec(function(err, docs){
			res.status(200);
			res.json(docs);
		});
};

module.exports.createNewPost = function(req, res){
	Post
		.create({
			title : req.body.title,
			by : req.body.by,
			body : req.body.body
		}, function(err, doc){
			if(err){
				console.log("got error", err);
				res.status(400);
				res.json({err});
			} else{
				console.log("New post created", doc);
				res.status(201);
				res.json(doc);
			}
		});
};

module.exports.updatePost = function(req, res){
	var postId = req.params.id;

	if(req.body){
		Post
			.findById(postId)
			.exec(function(err, doc){
				if(err){
					res.status = 500;
					res.json = ({ 'message' : 'server error' });
				} else if(!doc){
					res.status = 404;
					res.json = ({ 'message' : 'post not found!' });
				} else {
					if(req.body.title){
						doc.title = req.body.title;
					}
					if(req.body.by){
						doc.by = req.body.by;
					}
					if(req.body.body){
						doc.body = req.body.body;
					}
					doc.save(function(err, savedDoc){
						if(err){
							res.status(500);
							res.json(err);
						} else {
							res.status(204);
							res.json();
						}
					});
				}
			});
	}
};

module.exports.deletePost = function(req, res){
	var postId = req.params.id;
	
	Post
		.findByIdAndRemove(postId)
		.exec(function(err, removedDoc){
			if(err){
				res.status(404);
				res.json(err);
			} else{
				res.status(204);
				res.json();
			}
		});
};