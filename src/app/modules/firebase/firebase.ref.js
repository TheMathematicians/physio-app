(function() {
	'use strict';

	angular.module('fBase')
		.factory('fbRef', refFactory);

	/** @ngInject */
	function refFactory() {
		var factory = {};

		factory.ref = function(path) {
			return firebase.database().ref(path);
		};

		return factory;
	}
})();