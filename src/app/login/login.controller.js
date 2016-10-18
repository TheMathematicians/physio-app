(function() {
  'use strict';

  angular
    .module('physio')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($mdMedia, dbAuth, $log) {
    var vm = this;

    // Media query from angular material
    vm.$mdMedia = $mdMedia;

    vm.user = {
      email: null,
      password: null
    };

    vm.doLogin = function() {
      dbAuth
        .authenticate(vm.user)
        .then(function() {
          $log.debug('dbAuth.currentUser', dbAuth.currentUser);
        })
        .catch(function() {});
    };
  }
})();
