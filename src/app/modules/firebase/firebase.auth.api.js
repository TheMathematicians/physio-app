(function() {
  'use strict';

  angular
    .module('fBase')
    .factory('dbAuth', AuthFactory);

  /** @ngInject */
  function AuthFactory(fbRef, $firebaseAuth, $q, PATHS, Util) {
    var factory = {};

    var authObj = $firebaseAuth();

    factory.currentUser = null;

    factory.authenticate = function(email, password) {
      var deferred = $q.defer();

      if(!email || !password) {
        deferred.reject('Invalid username or password');
      }

      authObj
        .$signInWithEmailAndPassword(email, password)
        .then(function(fbUser) {
          var userInfo = fbRef.refObject(Util.joinPath(PATHS.users, fbUser.uid));
          return userInfo.$loaded();
        })
        .then(function(info) {
          factory.currentUser = info;
          deferred.resolve(info);
        })
        .catch(function(error) {
          factory.currentUser = null;
          deferred.reject(error);
        });

      return deferred.promise;
    };

    return factory;
  }

})();
