(function(){

  angular
    .module('app')
    .controller('listController', [
      '$cookies', '$scope', '$http', 'StoreService', 'sharedProperties', 
      listController
    ])
   
  function listController($cookies, $scope, $http, StoreService, sharedProperties) {
    var vm = this;
    
    
    sharedProperties.rmid=StoreService.get_rmid();
    

    var a;
    var b;
    var values;
	var details; 
	var rmid=sharedProperties.rmid;
	var url = StoreService.get_url();
var brcd='BR0001';
//var group=StoreService.get_group();
 StoreService.set_brcd(brcd);
 $cookies.put("url",url);

 $cookies.put("rmid",sharedProperties.rmid);
/* var data1 = {
	        
	        brCd: brcd
	    };*/
/* $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getBranchDetails", data1).success(function(data, status) {*/
	   


/*var b=data.bsnsDt;*/
var b='29-Nov-2016';

StoreService.set_bsnsDt(b);
/*});*/


$scope.pass= function(value,name){
	StoreService.set_basename(name);
$cookies.put("baseName",name);
 $cookies.put("baseNo",value);
  $cookies.put("brcd",brcd);
  
  
   sharedProperties.rmid=url+','+value+','+brcd+','+rmid;
   
StoreService.set_base(value);


/*var data2 = {
        
		baseNo: value,
		brCd: brcd

    };*/



/*$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getRMClientPortfolioDetailsForBase", data2).success(function(data, status) {
//$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getRMClientPortfolioDetailsForBase?baseNo='+value+'&brCd='+brcd).success(function(dataObj){
StoreService.set_portNo(data[0].portfolio_no);
                                                                                                               
});*/

/*if(group == 'CUSTOMER'){

	 var datacust={
UniqueId: sharedProperties.rmid
}
//$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getCustomerDetails", datacust).success(function(dataObj1, status) {

	var dataObj1=[{"baseno":"1002026","name":"Nithin Karnati","aum":"43,126,878","lum":"39,000","bum":"43,165,878","revenue":"36,800","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"47.59","fna_id":"222751"},{"baseno":"1002032","name":"Sudip Rai","aum":"464,373,942","lum":"0","bum":"464,373,942","revenue":"196,794","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"49.58","fna_id":"222753"},{"baseno":"1002035","name":"Swathi Raman","aum":"668,495","lum":"0","bum":"668,495","revenue":"22,894","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"3.56","fna_id":"222754"}];
	var m=dataObj1;
	
	

	var n=[];
	var vad;
	var item1;
	for(index in m){
		var value1=m[index];
		
			//var item=value1.name.split(' ');
		var item3=Number(value1.performperc);
		//var item2=item[0]+' '+item[1][0];
		var item2=value1.name;
		
			var item1={
			name:item2,
			//name:value1[key].name,
baseno:value1.baseno,
performperc:item3.toFixed(2),
				bum:value1.bum,
count:value1.alertcount
		};
		n.push(item1);
		
	}
	$scope.detailss=n;
$scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
};  
});*/







/*else{*/
/*var data = {
        
        rmId: sharedProperties.rmid
    };
     
$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getRMClientsList", data).success(function(data, status) {*/
};
	var data=[{"baseno":"1002026","name":"Nithin Karnati","aum":"43,126,878","lum":"39,000","bum":"43,165,878","revenue":"36,800","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"47.59","fna_id":"222751"},{"baseno":"1002032","name":"Sudip Rai","aum":"464,373,942","lum":"0","bum":"464,373,942","revenue":"196,794","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"49.58","fna_id":"222753"},{"baseno":"1002035","name":"Swathi Raman","aum":"668,495","lum":"0","bum":"668,495","revenue":"22,894","alerts":"N","alertcount":"0","benchmarkperc":"0","performperc":"3.56","fna_id":"222754"}];
	
	var m=data;
	
	
	var n=[];
	var vad;
	var item1;
	for(index in m){
		var value1=m[index];
		
		
		var item3=Number(value1.performperc);
	
		var item2=value1.name;
		
			var item1={
			name:item2,
		
baseno:value1.baseno,
performperc:item3.toFixed(2),
				bum:value1.bum,
count:value1.alertcount
		};


		n.push(item1);
		


	}
	

	$scope.detailss=n;
$scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
};  
/*});*/

/*}*/
    
  };
  
 	
    
 
  
  
})();
