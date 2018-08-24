(function(){

  angular
    .module('app')
    .controller('AlertsController', [
      '$timeout', '$q', '$scope', '$http','StoreService','sharedProperties','$cookies',
      AlertsController
    ]);

  function AlertsController($timeout, $q, $scope,$http,StoreService,sharedProperties,$cookies) {
	  var brCd= StoreService.get_brcd();
	$scope.baseName= StoreService.get_basename();
  var baseNo= StoreService.get_base();
  var rmid=StoreService.get_rmid();
   var vm = this;
    var values;
    var sec;
    $scope.Alertsx=false;
    $scope.Notix=false;
 var url = StoreService.get_url();
    var t;
    
    
    $scope.co=function(w){
    //	alert(w);
    	$scope.Notix=true;
    }; 
    
    
    
    
    
    
    $scope.cod=function(w){
    //	alert(w);
    	$scope.Alertsx=true;
    }; 
    
    
    
    
    
    $scope.note=function(w)
    {
    	   $scope.alert= false;
    	   $scope.notification=true;
    	$scope.notifications= w;
    	
    /*	var data = {
    	        

    	       
    	        brCd: brCd,
    	        rmId:rmid,
    	        baseNo:baseNo
    	        
    	    };
    $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getNotificationsDetails", data).success(function(dataox, status) {	*/
 //   alert(dataox);
  //  $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getNotificationsDetails?brCd=BR0001&rmId='+sharedProperties.rmid+'&baseNo='+baseNo).success(function(dataox){
    	
    	
    	var j=[];
    	var b=dataox[0];
    	 for(index in b){
    	
    		 var valz={
    				 subject: b[index].subject,
    				 starttime: b[index].starttime,
    				 location: b[index].location
    		 };
    	j.push(valz);
    	
    	$scope.notifss=j;
    	
    		 
    	
    	};
//    });
    	 
    }	;  	 
     
    
   /* var data = {
	        

 	       
	        brCd: brCd,
	        rmId: rmid,
	        baseNo:baseNo
	        
	    };
$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getAlertsCategories", data).success(function(datao, status) {	 
    */

   // $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getAlertsCategories?brCd=BR0001&rmId='+sharedProperties.rmid+'&baseNo='+baseNo).success(function(datao){
    	
    if(baseNo=='1002026'){
    var datao=[{"alertType":"<br><font face='tahoma' size=1>Docs. about to expire  <b>(1)<\/b><\/font>","maxAlertType":"Docs. about to expire <b>(1)<\/b>","subCatCode":"DOC_ABT_EXP","alertdesc":"Docs. about to expire","alertcount":" (1)","alerttype":"DOC_ABT_EXP","count":1},{"alertType":"<br><font face='tahoma' size=1>Stop Loss  <b>(1)<\/b><\/font>","maxAlertType":"Stop Loss <b>(1)<\/b>","subCatCode":"STOP_LOSS_ALRT","alertdesc":"Stop Loss","alertcount":" (1)","alerttype":"STOP_LOSS_ALRT","count":1},{"alertType":"<br><font face='tahoma' size=1>Risk Profile about to expire  <b>(1)<\/b><\/font>","maxAlertType":"Risk Profile about to expire <b>(1)<\/b>","subCatCode":"CUSTOMER_RISK_PROF_EXP","alertdesc":"Risk Profile about to expire","alertcount":" (1)","alerttype":"CUSTOMER_RISK_PROF_EXP","count":1}];
    }	
    $scope.alt= datao;
    	
/*    });*/
    
    $scope.sele = function(val,mal)
    {	
    	   $scope.alert= true;
    	   $scope.notification=false;
    	$scope.alerts= mal;
	  
    	/*  var data = {
    		        

    	 	       
    		        brCd: brCd,
    		        rmId:baseNo,
    		        alertRreminder:'A',
    		        alertsFor:'customer',
    		        subCategory:val
    		        
    		    };
    	$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getAlertDetails", data).success(function(dataoc, status) {	 */
    	    
    	
    	// $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getAlertDetails?brCd=BR0001&rmId='+baseNo+'&alertRreminder=A&alertsFor=customer&subCategory='+val).success(function(dataoc){
    	    	
    	
    	if(val == 'DOC_ABT_EXP'){
    	var dataoc = [{"Seq Id":"13952207","Customer Number":"1120012","Customer Name":"NITHIN KARNATI","Document Name":"COMMUNICATION ADDRESS PROOF","Expiry Date":"08-FEB-17","Type":"CIF","Action":"Pending"}];
        	
    	}	
    	else if(val == 'STOP_LOSS_ALRT'){	
    	    	var dataoc = [{"Seq Id":"13952222","Base Number":"1001876","Base Name":"NITHIN KARNATI","Security Name":"BIZIM PORT.BIRINCI KATILIM F.","Price":"130.53","Market Value":"119473","Investment Value":"149445","Change":"20","Action":"Pending"}];
    	}
    	else if(val == 'CUSTOMER_RISK_PROF_EXP'){
    	    	
    	    	var dataoc = [{"Seq Id":"13952210","Relationship Number":"21130005851","Relationship Type":"CIF","Relationship Name":" ","Risk Profile":"Very High Risk","Last Updated Date":"12-FEB-2014","Expiry Date":"12-FEB-2017","Action ":"Pending"}];
    	    	
    	    	
    	}
    	    	$scope.alert= dataoc;
        
 /*       });*/
	 
    };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }













})();