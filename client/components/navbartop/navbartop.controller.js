'use strict';

angular.module('mathsgymnasiamApp')
  .controller('NavbarTopCtrl', function ($scope, $location, Auth) {
    $scope.topmenu = [{
      'title': 'Store Locator',
      'link': '/storelocator'
    },
	{
      'title': 'Gift Cards',
      'link': '/giftcards'
    },
	{
      'title': 'Gift Ideas',
      'link': '/giftideas'
    },
	{
      'title': 'Credit Cards',
      'link': '/creditcards'
    },
	{
      'title': 'My Order',
      'link': '/myorders'
    },
	{
      'title': 'Help',
      'link': '/help'
    },
	{
      'title': 'FREE SHIPPING OVER $35*',
      'link': '/freeshipping'
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