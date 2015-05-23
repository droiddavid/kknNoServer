'use strict';

/* Directives */

angular.module('kknApp')
	.directive('photobox', function () {
		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			templateUrl: '../templates/photobox.html',
			controller: function($scope, $http) {

				$scope.picture = $scope.data;

				$scope.class = "photobox_popup";
				$scope.meal_index = 0;
				$scope.meal = {};




				$scope.previous = function() {
					
					if($scope.meal_index <= 0)
						$scope.meal_index = $scope.data.images.pictures.length - 1;
					else
						$scope.meal_index--;
				} //$scope.previous




				$scope.next = function() {

					if($scope.meal_index >= $scope.data.images.pictures.length - 1) {
						$scope.meal_index = 0;
					} else {
						$scope.meal_index++;
					}

				} //$scope.next




				$scope.more =  function() {
					if($scope.class === "photobox_popup") {
						$scope.class = "pop";


						var data = $scope.data.description.data.join('\n');

						var results = JSON.stringify(data, undefined, 2);
						var results2 = results.replace(/\n/g, "<br>");
						$scope.full_description = results2;
						console.log(results2);
					}
					else
						$scope.class = "photobox_popup";


					/*
						var image = document.getElementById(imageid);
						var magicEtherImage = new Image();

						magicEtherImage.src = image.src;
						var padding = 20; // little buffer to prevent forced scrollbars

						// Values to use when opening window
						var winWidth = magicEtherImage.width + padding;
						var winHeight = magicEtherImage.height + padding;
						window.open(image.src,  null, 'height=' + winHeight + ', width=' + winWidth + ', toolbar=0, location=0, status=0, scrollbars=0, resizable=0');
					*/
				} //more




				window.document.onkeydown = function (e) {
					if (!e) { e = event; }
					if (e.keyCode == 27) { lightbox_close(); }
				} //onkeydown




				$scope.lightbox_close = function () { $scope.class = "photobox_popup"; } //lightbox_close




				$scope.lightbox_open = function() {
					window.scrollTo(0,0);
					document.getElementById('light').style.display='block';
					document.getElementById('fade').style.display='block';  
				} //lightbox_open




				console.log('Inside directive.js.');
			},
		};
	}
);


