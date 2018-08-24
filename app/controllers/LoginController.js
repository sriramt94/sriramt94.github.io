(function () {
	angular
    .module('app')
    .controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService, sharedProperties, StoreService) {
      
		$scope.formSubmit = function() {
               sharedProperties.username=$scope.username;
			
          if(LoginService.login($scope.username, $scope.password)) {
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home.profile');
          } else {
            $scope.error = "Incorrect username/password !";
          }   
        };
    });
	
	
})();