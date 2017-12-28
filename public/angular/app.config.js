blogPosts.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'templates/allPosts.html',
			controller : 'postsController',
			controllerAs : 'vm'
		})
		.when('/post/:id', {
			templateUrl : 'templates/singlePost.html',
			controller : 'postController',
			controllerAs : 'vm'
		});
}]);