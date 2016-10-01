/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.imgEl = this.jumbEl.element(by.css('img'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
  this.toLoginBtnEl = element(by.css('[aria-label=Login]'));
};

// module.exports = new MainPage();
module.exports = function() { 
  return new MainPage(); 
};
