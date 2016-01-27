'use strict';

angular.module('mathsgymnasiamApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Appliances',
      'link': '/'
    },
	{
      'title': 'Auto',
      'link': '/auto'
    },
	{
      'title': 'Baby',
      'link': '/baby'
    },
	{
      'title': 'Clothing',
      'link': '/clothing'
    },
	{
      'title': 'Electronics',
      'link': '/electronics'
    },
	{
      'title': 'Fitness',
      'link': '/fitness'
    },
	{
      'title': 'Home',
      'link': '/home'
    },
	{
      'title': 'Jewelry',
      'link': '/jewelry'
    },
	{
      'title': 'Outdoor',
      'link': '/sutdoor'
    },
	{
      'title': 'Parts & Services',
      'link': '/partsservices'
    },
	{
      'title': 'Shoes',
      'link': '/shoes'
    },
	{
      'title': 'Tools',
      'link': '/tools'
    },
	{
      'title': 'Toys',
      'link': '/toys'
    },
	{
      'title': 'Deals',
      'link': '/deals'
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