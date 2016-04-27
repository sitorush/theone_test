function CoursesService($http) {
  'ngInject';

  const service = {};

  service.getCourses = function() {
    return $http.get('/mock/courses.json');
  };

  return service;

}

export default {
  name: 'CoursesService',
  fn: CoursesService
};
