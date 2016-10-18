(function() {
  'use strict';

  angular
    .module('fBase')
    .factory('dbAuth', AuthFactory);

  /** @ngInject */
  function AuthFactory(fbRef, $firebaseAuth, $q, fbErrors, PATHS, Util) {
    var factory = {};

    var authObj = $firebaseAuth();

    factory.currentUser = null;

    factory.authenticate = function(credentials) {
      var deferred = $q.defer();

      if( !credentials || !credentials.email || !credentials.password) {
        deferred.reject('Invalid username or password');
      }

      authObj
        .$signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(function(fbUser) {
          // Getting the user information as per the uid of the logged in user
          var userInfo = fbRef.refObject(Util.joinPath(PATHS.users, fbUser.uid));
          return userInfo.$loaded();
        })
        .then(function(info) {
          // Setting the current user information to be used across the controllers as required
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
