function CoursesService($http) {
  'ngInject';

  const service = {};

  service.getCourses = function() {
    // return new Promise((resolve, reject) => {
    //   $http.get('/mock/courses.json').success((data) => {
    //     resolve(data);
    //   }).error((err, status) => {
    //     reject(err, status);
    //   });
    // });

    return $http.get('/mock/courses.json');
  };

  return service;

}

export default {
  name: 'CoursesService',
  fn: CoursesService
};
