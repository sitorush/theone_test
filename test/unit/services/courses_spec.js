'use strict';

describe('Unit: CoursesService', function() {

  let http, service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(($httpBackend, CoursesService) => {
      http = $httpBackend;
      service = CoursesService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should retrieve data', function() {
    http.expect('GET', '/mock/courses.json').respond(200, [{
      'src': '/images/courses/guitar.jpg',
      'name': 'Guitare éléctrique'
    }]);

    service.getCourses().then((result) => {
      expect(result.data.length).toEqual(1);
    });

    http.flush();
  });
});
