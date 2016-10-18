(function() {
  'use strict';

  var baseUrl = 'https://physio-dev.firebaseio.com';
  
  var paths = {
    users: 'users'
  };

  angular
    .module('fBase')
    .constant('PATHS', paths);
})();