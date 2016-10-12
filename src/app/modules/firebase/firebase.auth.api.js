(function() {
  'use strict';

  angular
    .module('fBase')
    .factory('dbAuth', AuthFactory);

  /** @ngInject */
  function AuthFactory(fbRef, $firebaseAuth, $firebaseObject, $firebaseArray, $log) {
    var factory = {};

    var authObj = $firebaseAuth();

    factory.authenticate = function(email, password) {
      authObj.$signInWithEmailAndPassword(email, password);

    };

    return factory;
  }

})();