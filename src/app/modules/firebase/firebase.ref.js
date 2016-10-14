(function() {
	'use strict';

	angular.module('fBase')
		.factory('fbRef', refFactory);

	/** @ngInject */
	function refFactory($firebaseObject, $log) {
		var factory = {};

		factory.ref = function(path) {
			return firebase.database().ref(path);
		};

		factory.refObject = function(path) {
			return $firebaseObject(factory.ref(path));
		};

		return factory;
	}
})();