'use strict';

describe('Unit: HomeCtrl', function() {

  let ctrl, courseService, deferred, $scope;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller, $q, $rootScope) => {
      deferred = $q.defer();
      $scope = $rootScope.$new();
      
      courseService = jasmine.createSpyObj('CoursesService', ['getCourses']);
      courseService.getCourses.and.callFake(() => {
        return deferred.promise;
      });

      ctrl = $controller('HomeCtrl', {
        CoursesService: courseService
      });

      deferred.resolve({data: [{
        'src': '/images/courses/guitar.jpg',
        'name': 'Guitare éléctrique'
      }]});
      $scope.$apply();

    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have courses', function() {
    expect(ctrl.courses.length).toEqual(1);
  });

});