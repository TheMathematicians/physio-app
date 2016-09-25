(function() {
  'use strict';

  angular
    .module('physio')
    .controller('RegistrationController', RegistrationController);

  /** @ngInject */
  function RegistrationController($mdMedia) {
    var vm = this;

    vm.$mdMedia = $mdMedia;
  }
})();
