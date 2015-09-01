	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('AddStudentCtrl', function ($scope, Auth, AddStudentSvc) {
		  var currentuser= '';
		  $scope.submit = function() {
				if ($scope.firstname) {
					currentuser = Auth.getCurrentUser()._id;
				 console.log('currentuser :'+currentuser);
				  console.log('name :'+Auth.getCurrentUser().name);
				  console.log('email :'+Auth.getCurrentUser().email);
				  console.log('Auth.getCurrentUser() :'+Auth.getCurrentUser());

			//	   Auth.getCurrentUser().then(function(result){
			  // do something with result; result should be your currentUser
				//console.log('reslt :'+result);
			 //});
	
					 AddStudentSvc.create({
						firstname: $scope.firstname,
						lastname:$scope.lastname,
						username:$scope.username,
						emailid:$scope.grade
					  })
					  .success(function (exam_question) {
						$scope.firstname = null
						$scope.lastname = null
						$scope.username = null
						$scope.grade = null
					  });
				}
		  };	//top addStudent
	  });


	  angular.module('mathsgymnasiamApp').service('AddStudentSvc', function ($http) {
	  this.create = function (addstudent) {
		  console.log('I am here');
		return $http.post('/api/addstudent', addstudent)
	  };
	});