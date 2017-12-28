blogPosts.controller('postController', ['backendData', '$routeParams', function(backendData, $routeParams){
	var vm = this;
	var id = $routeParams.id;
	backendData
		.getSinglePost(id)
		.then(function(response){
			vm.post = response.data;
		});
}]);