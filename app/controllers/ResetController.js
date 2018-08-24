(function () {
	angular
    .module('app')
    .controller('ResetController', function($scope,$http, $rootScope, $stateParams, $state, LoginService, sharedProperties, StoreService) {
      

	   var opass = StoreService.get_password();
	   var encold=	StoreService.get_encode();
	   //alert(encold);
	   var encnew;
 var url = StoreService.get_url();
var ticket= StoreService.get_ticket();

var salt = StoreService.get_salt();
$scope.formReset = function() {
/*			 var oldpassword = $scope.oldpassword;
                var newpassword = $scope.newpassword;
				var renewpass= $scope.renewpassword;
     if( (opass === oldpassword) && (newpassword === renewpass)){

	
	//encrypt new password
	encryptedJs(newpassword,salt,256);
	function encryptedJs( salt,newpassword, bits ){
		try{			
			encnew = encryptJS(salt,newpassword,bits);
	
			//alert(encnew);
				}
		catch(error){
			alert(error);
		}			
	}

//posting data to service
var data = {
	        
	
		salt:salt,
		encold:encold,
encnew:encnew,
ticket:ticket
	    };
 $http.post(url+"/FABXRest/rest/ResetService/reset", data).success(function(dataobj,status) {
 
if(dataobj=="success"){
 $state.transitionTo('login');
}
else{

$scope.error = dataobj;
}
 
 })();
		}else{
		
		$scope.error = "Password did not match."
		}
		*/
	$state.transitionTo('login');
        };
    });
	
	
})();