'use strict';

angular.module('mathsgymnasiamApp')
  .controller('ViewResultsCtrl', function ($scope, $http, Auth) {
	 var userid = Auth.getCurrentUser()._id;
	 console.log('userid = '+userid);
    $scope.awesomeThings = [];

  var 	currentuser = Auth.getCurrentUser()._id;
	  var username = Auth.getCurrentUser().name;
	  var useremail = Auth.getCurrentUser().email;
	  var userid = Auth.getCurrentUser()._id;
	  var grade = Auth.getCurrentUser().grade;

	  	$scope.userid = userid;
					$scope.username = username;
					$scope.useremail = useremail;
		//			console.log('grade in fetch :'+grade);
					$scope.grade = grade;

    $http.get('api/takeatest/users/'+userid).success(function(userresults) {
      $scope.userresults = userresults;
	  console.log(userresults);
	  	$scope.studentresults = userresults;
    });

  });
