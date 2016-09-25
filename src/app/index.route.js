(function() {
  'use strict';

  angular
    .module('physio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/partial-login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/partial-registration.html',
        controller: 'RegistrationController',
        controllerAs: 'registration'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
