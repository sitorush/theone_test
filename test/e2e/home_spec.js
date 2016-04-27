/*global browser, by */

'use strict';

describe('E2E: Home', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should load the courses', function() {
    var courses = browser.element(by.css('section.courses')).$$('li');
    expect(courses.count()).toEqual(6);
    expect(courses.first().getText()).toBe('Guitare éléctrique');
    expect(courses.first().$('img').getAttribute('src')).toContain('/images/courses/guitar.png')
  });

});