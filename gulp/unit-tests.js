'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var configFilePath = path.join(__dirname, '/../karma.conf.js');
var karmaPlugins = require(configFilePath).plugins;

var pathSrcHtml = [
  path.join(conf.paths.tmp, '/serve/**/*.html'),
  path.join(conf.paths.src, '/**/*.html')
];

var pathSrcJs = [
  path.join(conf.paths.src, '/**/!(*.spec).js')
];

function runTests(singleRun, done) {
  var reporters = ['spec'];
  var preprocessors = {};

  karmaPlugins.push('karma-spec-reporter');

  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage');
  }

  var localConfig = {
    configFile: configFilePath,
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    plugins: karmaPlugins,
    preprocessors: preprocessors
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  });
  server.start();
}

gulp.task('test', ['scripts', 'markups'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
  runTests(false, done);
});
