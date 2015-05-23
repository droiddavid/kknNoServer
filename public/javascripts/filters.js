'use strict';

/* Filters */

angular.module('kknApp')
	.filter('interpolate', function (version) {
    	return function (text) {
      		return String(text).replace(/\%VERSION\%/mg, version);
    	};
  	}
);


