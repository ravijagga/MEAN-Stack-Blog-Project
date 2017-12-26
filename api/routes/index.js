var express = require('express');
var router = express.Router();

var postCtrl = require('../controllers/posts.controller.js');

router
	.route('/posts')
	.get(postCtrl.getAllPosts)
	.post(postCtrl.createNewPost);

router
	.route('/posts/:id')
	.get(postCtrl.getPost)
	.put(postCtrl.updatePost)
	.delete(postCtrl.deletePost);

module.exports = router;