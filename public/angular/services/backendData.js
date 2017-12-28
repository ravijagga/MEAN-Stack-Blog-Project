blogPosts.factory('backendData', ['$http', function($http){
	return {
		getAllPosts : getAllPosts,
		getSinglePost : getSinglePost
	};

	function getAllPosts(){
		return $http
					.get('/api/posts')
					.then(function successCallBack(response){
						return response;
					}, function errorCallBack(error){
						console.log(error);
					});
	}

	function getSinglePost(id){
		return $http
					.get('/api/posts/'+id)
					.then(function successCallBack(response){
						return response;
					}, function errorCallBack(error){
						console.log(error);
					});
	}
}]);