	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('UnicornCtrl', function ($scope, Auth, UnicornSvc) {

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
	
				
				}
		  };	//top addQuestions
	  });


	  angular.module('mathsgymnasiamApp').service('UnicornSvc', function ($http) {
	  this.create = function (unicorn) {
		return $http.post('/api/unicorn', unicorn)
	  };
	});