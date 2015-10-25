'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/unicorn', {
        templateUrl: 'app/unicorn/unicorn-form.html',
        controller: 'UnicornCtrl'
      });
  });