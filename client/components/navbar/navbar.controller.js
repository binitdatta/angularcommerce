'use strict';

angular.module('mathsgymnasiamApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
	{
      'title': 'Take a Test',
      'link': '/takeatest'
    },
	{
      'title': 'View Results',
      'link': '/viewresults'
    },
	{
      'title': 'Contact Us',
      'link': '/contactus'
    },
	{
      'title': 'Unicorn',
      'link': '/unicorn'
    }
];

	

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });