'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

/*
 * To make the spec reporter more verbose.
 * For config reference: https://github.com/bcaudan/jasmine-spec-reporter
 * For protrator configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/protractor-configuration.md
 */
var JasmineSpecReporter = require('jasmine-spec-reporter');
var specReporterConfig = {
  displayStackTrace: 'all'
};

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  onPrepare: function() {
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new JasmineSpecReporter(specReporterConfig));
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {
      // Removing the default dots printing as we are using the jasmine-spec-reporter for this.
    }
  }
};
