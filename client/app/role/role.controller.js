	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('RoleCtrl', function ($scope, Auth, ContactUsSvc) {

		  var currentuser= '';
		  $scope.submit = function() {
				if ($scope.rolename) {
				
					 RoleSvc.create({
						rolename: $scope.rolename,
						roledesc:$scope.roledesc,
						role:$scope.role
				     })
					  .success(function (role) {
						$scope.role = null
						$scope.rolename = null
						$scope.roledesc = null
					  });
				}
		  };	//top addQuestions
	  });


	  angular.module('mathsgymnasiamApp').service('RoleSvc', function ($http) {
	  this.create = function (role) {
		return $http.post('/api/role', role)
	  };
	});