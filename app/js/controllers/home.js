function HomeCtrl(CoursesService) {
  'ngInject';

  const vm = this;
  
  CoursesService.getCourses().then((response) => {
    vm.courses = response.data;
  });
  
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
