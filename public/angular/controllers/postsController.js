blogPosts.controller('postsController', ['backendData', function(backendData){
	var vm = this;
	backendData
		.getAllPosts()
		.then(function(response){
			vm.posts = response.data;
		});
}]);