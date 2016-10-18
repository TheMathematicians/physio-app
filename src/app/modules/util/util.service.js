(function() {
  'use strict';

  angular
    .module('util')
    .factory('Util', UtilFactory);

  /** @ngInject */
  function UtilFactory() {
    var factory = {};
    var PATH_SEPARATOR = '/';

    factory.formatString = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    };

    factory.joinPath = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.join(PATH_SEPARATOR);
    };

    return factory;
  }
})();
