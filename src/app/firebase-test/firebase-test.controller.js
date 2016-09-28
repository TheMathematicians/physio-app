(function() {
  'use strict';

  angular
    .module('physio')
    .controller('FirebaseTestController', FirebaseTestController);

  /** @ngInject */
  function FirebaseTestController($log, fbApi) {
    var vm = this;

    $log.debug('FirebaseTestController: ', fbApi.getFbObj());

    var fbObj = fbApi.getFbObj();
    fbObj.getChild('test/objTest').getData().then(function(data) {
      $log.debug('data @ test/objTest', data);
      vm.obj = data;
    });

    fbObj.getChild('test/text').getData().then(function(data) {
      $log.debug('data @ test/text', data);
      vm.text = data.$value;
    });
  }
})();
