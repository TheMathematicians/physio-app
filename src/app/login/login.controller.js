(function() {
  'use strict';

  angular
    .module('physio')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($mdMedia) {
    var vm = this;

    // Media query from angular material
    vm.$mdMedia = $mdMedia;
  }
})();
