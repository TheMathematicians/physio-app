(function() {
  'use strict';

  angular.module('fBase')
    .factory('fbApi', wrapperApiFactory);

  /** @ngInject */
  function wrapperApiFactory(fbRef, $firebaseObject, $firebaseArray, $log) {
    var factory = {};

    function FbObj(refOrPath) {
      var path;
      if(angular.isString(refOrPath) || angular.isUndefined(refOrPath)) {
        path = refOrPath;
        this.ref = fbRef.ref(path);
      } else {
        this.ref = refOrPath;
      }
      this.obj = $firebaseObject(this.ref);
    }

    FbObj.prototype.getData = function() {
      return this.obj.$loaded();
    };

    FbObj.prototype.bindTo = function(scope, property) {
      return this.$bindTo(scope, property);
    };

    FbObj.prototype.getChild = function(path, returnType) {
      var returnRef = this.ref.child(path);
      return (returnType && angular.isArray(returnType)) ? $firebaseArray(returnRef) : new FbObj(returnRef); 
    };

    factory.getFbObj = function(path) {
      return new FbObj(path);
    };

    return factory;
  }
})();
