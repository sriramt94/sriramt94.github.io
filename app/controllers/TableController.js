(function(){

  angular
    .module('app')
    .controller('TableController', [
      '$scope','$cookies',
      TableController
    ]);

   
  function TableController($scope,$cookies) {
	  $scope.baseName = $cookies.get("baseName");
	  $scope.table=true;
		$scope.bubble=false;
 $scope.view = function(name){
 
if(name=='Table'){
	$scope.table=true;
	$scope.bubble=false;
	
}
else{
	
	$scope.table=false;
	$scope.bubble=true;

	}
 
 };
  }
})();

  