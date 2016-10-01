/**
 * This module loads all the page object files in the e2e directory, i.e.,
 * all the files with .po.js extension.
 *
 * Note:
 *   Each of the .po.js exports a function that creates new page object.
 *   Thus the objects can be instantiated as and when required.
 */

'use strict';

var fs = require('fs');
var path = require('path');

var pages = {};

// A function that extracts the files in the directory passed
// along with the files in its sub directories
var readdirSyncRecursive = function(dir, fileTypes) {
  var filesToReturn = [];
  var walkDir = function(currentPath) {
    var files = fs.readdirSync(currentPath);

    for(var i in files) {
      var curFile = path.join(currentPath, files[i]);
      if(fs.statSync(curFile).isDirectory()) {
        walkDir(curFile);
      } else {
        if(fileTypes) {
          // if files types are passed only extract those files
          for(var j in fileTypes) {
            if(path.basename(curFile).indexOf(fileTypes[j]) != -1) {
              filesToReturn.push(curFile);
              break;
            }
          }
        } else {
          // if no file types are passed, just add the files directly
          filesToReturn.push(curFile);
        }
      }
    }
  };

  walkDir(dir);

  return filesToReturn;
};

// Read the e2e directory for page object files, require them and add them to pages object
// for usage
readdirSyncRecursive(__dirname, ['po.js']).map(function(file) {
  var pageName = path.basename(file).match(/^(.*)\.po\.js|coffee$/i)[1].toLowerCase();
  pages[pageName] = require(file);
});

module.exports = pages;