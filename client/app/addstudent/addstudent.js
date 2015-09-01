'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addstudent', {
        templateUrl: 'app/addstudent/addstudent.html',
        controller: 'AddStudentCtrl'
      });
  });