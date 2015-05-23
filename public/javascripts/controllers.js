'use strict';

/* Controllers */

angular.module('kknApp.controllers', []).controller('MainAppController', 
    function ($scope, $http) {

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
				console.log('err: ' + err);
				console.log('emitting $scope.slides: ' + $scope.slides);
				console.log(url);
			});

		var imagepath = "/media/images/";
		
		$scope.myInterval = 5000;


		console.log('javascripts.controllers.js accessed.');
}).controller('IndexController', 
	function($scope, $http) {
		$scope.poppa = "I am Groot!";
		$http.get('/api/slides')
		.success(function(picturedata, status, headers, config) {
			$scope.slides = picturedata.slides
		})
}).controller('AddImageController',
	function($scope, $http, $location) {
		$scope.form = {};

		$scope.uploadImage = function() {
			$http.post('/api/post', $scope.form)
				.success(function(data){
					$location.path('/');
				});
		};
	}
);
