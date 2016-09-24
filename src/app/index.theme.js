(function() {
	'use strict';

	angular
		.module('physio')
		.config(themeConfig);

	/** @ngInject */
	function themeConfig($mdThemingProvider) {
		// TODO 
		// 	- Choose proper colors for 'default'
		// 	- Add new themes as and when required
		// 
		// For color palette refer
		// 	https://material.google.com/style/color.html#color-color-palette
		
		// Default app theme
		$mdThemingProvider.theme('default')
			.primaryPalette('yellow', {
				'default': '400',
				'hue-1': '100',
				'hue-2': '600',
				'hue-3': 'A100'
			})
			.accentPalette('teal', {
				'default': '200'
			})
			.dark();
	}
})();