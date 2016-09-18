# physio-app

## Git Flow to be used for this repo
Ref: [Sourcetree Blog](https://blog.sourcetreeapp.com/2012/08/01/smart-branching-with-sourcetree-and-git-flow/)
* **Development branch (usually called ‘develop’)**

  This is your main development branch where all the changes destined for the next release are placed, either by directly committing small changes or by merging other branches (e.g. feature branches) into this branch.
* **Production branch (usually called ‘master’)**
  
  This branch represents the latest released / deployed codebase. Only updated by merging other branches into it.
* **Feature branches (usually prefixed with ‘feature/’)**

  When you start work on anything non-trivial, you create a feature branch. When finished, you’ll merge this branch back into the development branch to queue it for the next release.
* **Release branches (usually prefixed with ‘release/’)**

  When you’re about to package a new release, you create a release branch from the development branch. You can commit to it during your preparation for a release, and when it’s ready to be deployed, you merge it into both the development branch and the master branch (to indicate that the release has been deployed).
* **Hotfix branches (usually prefixed with ‘hotfix/’)**
  
  If you need to patch the latest release without picking up new features from the development branch, you can create a hotfix branch from the latest deployed code in master. Once you’ve made your changes, the hotfix branch is then merged back into both the master branch (to update the released version) and the development branch (to make sure the fixes go into the next release too)

## Setting up dev env
* Make sure to have
  * node v >= 6.5.0
  * npm v >= 3.10.3
* Install the required global modules
  
  ```shell
  #Project management tools
  npm i -g gulp bower
  
  #Testing tools
  npm i -g protractor
  ```

## Running the App
To run the app do the following:
* Clone the repo

  ```shell
  git clone https://github.com/TheMathematicians/physio-app.git
  ```
* Make sure you are connected to internet, go into the repo folder and run

  ```shell
  bower install && npm install
  ```
  This installs all the required node modules and bower components for the app development and running.
* To run the app on a server do

  ```shell
  gulp serve
  ```
  This will automatically run the app in the browser with watch and browsersync enabled.
  
## Tools and Tech
[![Logo](src/assets/images/angular.png)](https://angularjs.org/)
[![Logo](src/assets/images/protractor.png)](https://github.com/angular/protractor)
[![Logo](src/assets/images/angular-material.png)](https://material.angularjs.org/#/)
[![Logo](src/assets/images/jade.png)](https://pugjs.org/api/getting-started.html)
[![Logo](src/assets/images/node-sass.png)](https://github.com/sass/node-sass)
[![Logo](src/assets/images/gulp.png)](http://gulpjs.com/)
[![Logo](src/assets/images/browsersync.png)](http://browsersync.io/)
[![Logo](src/assets/images/karma.png)](http://karma-runner.github.io/)
[![Logo](src/assets/images/jasmine.png)](http://jasmine.github.io/)
