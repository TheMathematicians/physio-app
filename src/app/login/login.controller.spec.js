(function() {
  'use strict';

  describe('LoginController', function(){
    var vm;

    beforeEach(module('physio'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('LoginController');
    }));
    
    it('should have $mdMedia attached to it', function() {
      expect(vm.$mdMedia).toBeDefined();
    });
  });
})();
