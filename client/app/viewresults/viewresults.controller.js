'use strict';

angular.module('mathsgymnasiamApp')
  .controller('ViewResultsCtrl', function ($scope, $http, Auth) {
	 var userid = Auth.getCurrentUser()._id;
	 console.log('userid = '+userid);
    $scope.awesomeThings = [];

    $http.get('api/takeatest/users/'+userid).success(function(userresults) {
      $scope.userresults = userresults;
	  console.log(userresults);
    });

  });
