'use strict';

angular.module('mathsgymnasiamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addrole', {
        templateUrl: 'app/role/role.html',
        controller: 'RoleCtrl'
      });
  });