'use strict';

var kknApp = angular.module('kknApp', ['ui.bootstrap', 'ngRoute', 'kknApp.controllers']);

kknApp.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/views/partials/home.html',
				controller: 'IndexController'
			})
			.when('/aboutus', {
				templateUrl: '/views/partials/about.html',
				controller: 'AboutController'
			})
			.when('/newBabies', {
				templateUrl: '/views/partials/newbabies',
				controller: 'NewBabiesController'
			})
			.when('/gallery', {
				templateUrl: '/views/partials/gallery.html',
				controller: 'GalleryController'
			})
			.when('/videos', {
				templateUrl: '/views/partials/videos.html',
				controller: 'VideosController'
			})
			.when('/contact', {
				templateUrl: '/views/partials/contact.html',
				controller: 'ContactController'
			})
			.when(
				'/addImage', {
				templateUrl: '/views/partials/addImage',
				controller: 'AddImageController'
			})
			.otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
	}
]);


kknApp.controller('MainController', function($scope, $http) {

	$scope.title = "This is the shit.";
	$scope.slides = [
		{image: '/media/images/precious.jpg', 	alternatetext: 'Precious', 		imagetext: 'Precious is a great baby.', 	thumbnail: 'precious320x150.jpg'},
		{image: '/media/images/layingbaby.jpg', alternatetext: 'Laying Baby', 	imagetext: 'Laying Baby is a great baby.', 	thumbnail: 'layingbaby320x150.jpg'},
		{image: '/media/images/heaven.jpg', 	alternatetext: 'Heaven', 		imagetext: 'Heaven is a great baby.', 		thumbnail: 'heaven320x150.jpg'},
		{image: '/media/images/rochelle.jpg', 	alternatetext: 'Rochelle', 		imagetext: 'Rochelle is a great baby.', 	thumbnail: 'rochelle320x150.jpg'},
		{image: '/media/images/dana.jpg', 		alternatetext: 'Dana', 			imagetext: 'Dana is a great baby.', 		thumbnail: 'dana320x150.jpg'},
		{image: '/media/images/cindy.jpg', 		alternatetext: 'Cindy', 		imagetext: 'Cindy is a great baby.', 		thumbnail: 'cindy320x150.jpg'},
		{image: '/media/images/gracy.jpg', 		alternatetext: 'Gracy', 		imagetext: 'Gracy is a great baby.', 		thumbnail: 'gracy320x150.jpg'},
		{image: '/media/images/brenda.jpg', 	alternatetext: 'Brenda', 		imagetext: 'Brenda is a great baby.', 		thumbnail: 'brenda320x150.jpg'},
		{image: '/media/images/tracy.jpg', 		alternatetext: 'Tracy', 		imagetext: 'Tracy is a great baby.', 		thumbnail: 'tracy320x150.jpg'},
		{image: '/media/images/barry.jpg', 		alternatetext: 'Barry', 		imagetext: 'Barry is a great baby.', 		thumbnail: 'barry320x150.jpg'},
		{image: '/media/images/alex.jpg', 		alternatetext: 'Alex', 			imagetext: 'Alex is a great baby.', 		thumbnail: 'alex320x150.jpg'}

	];


	//Main Menu
	$scope.menu = [
			{ url: "/home", text: "HOME" },
			{ url: "/aboutus", text: "About" },
			{ url: "/gallery", text: "Gallery" },
			{ url: "/videos", text: "Videos" },
			{ url: "/contact", text: "Contact" }
	];

	var url="/data/data.txt";

	$http.get(url)
		.success( function(response) {
			$scope.slides = response;
			console.log('diverting...:' + $scope.slides);
		})
		.error(function(err){
			//console.log('err: ' + err);
			//console.log('emitting $scope.slides: ' + $scope.slides);
			//console.log(url);
		});

	var imagepath = "/media/images/";
	
	$scope.myInterval = 5000;
	 //controller.MainController
});

// kknApp.controller('IndexController', 
// 	function($scope, $http) {
// 		$scope.poppa = "I am Groot!";
// 		$http.get('/api/slides')
// 		.success(function(picturedata, status, headers, config) {
// 			$scope.slides = picturedata.slides
// 		})
// }); //controller.IndexController







kknApp.controller('IndexController', function($scope, $http) {

	$http.get('/data/babiesdb.php')
	.success(function(response) {
		console.log('Passed status: ' + response.records);
		$scope.photoboxes = response.records;}
	)
	.error(
		function() {
			console.log('Failed status.');
	});

}); //controller.IndexController





kknApp.controller('GalleryController', function($scope, $http){

	$http.get('/data/babiesdb.php')
	.success(function(response) {
		console.log('Passed status: ' + response.records);
		$scope.photoboxes = response.records;}
	)
	.error(
		function() {
			console.log('Failed status.');
	});
	
}); //controller.GalleryController





kknApp.controller('AboutController', function($scope){
	$scope.aboutusslides = [
		{image: '/media/images/aboutuswhoweare.png', 	alternatetext: 'About Us', 		imagetext: 'Who We Are.', 	thumbnail: 'precious320x150.jpg'},
		{image: '/media/images/aboutuswhatwedo.png', 	alternatetext: 'About Us', 		imagetext: 'What We Do.', 	thumbnail: 'precious320x150.jpg'},
		{image: '/media/images/aboutuswhywedoit.png', 	alternatetext: 'About Us', 		imagetext: 'Why We Do It.',	thumbnail: 'precious320x150.jpg'}
	];
	console.log('Inside About Controller.');
}); //controller.AboutController





kknApp.controller('NewBabiesController', function($scope){
	console.log('Inside NewBabies Controller.');
}); //controller.NewBabiesController





kknApp.controller('VideosController', function($scope){
	console.log('Inside Videos Controller.');
}); //controller.VideosController





kknApp.controller('ContactController', function($scope){
	console.log('Inside Contact Controller.');
}); //controller.ContactController





kknApp.controller('AddImageController', function($scope){
	console.log('Inside AddImage Controller.');
}); //controller.AddImageController