(function(){

  angular
    .module('app')
    .controller('PortfolioController', [
'$cookies', '$timeout', '$q', 'countriesService','$http','$scope','StoreService','sharedProperties','$cookies',
      PortfolioController
    ]);

  
  
  function PortfolioController($cookies, $timeout, $q, countriesService,$http,$scope,StoreService,sharedProperties,$cookies) {
var brCd=StoreService.get_brcd();

$scope.baseName =StoreService.get_basename();
var baseNo;
 baseNo = StoreService.get_base();
var rmid=StoreService.get_rmid();
 var url = StoreService.get_url();
//StoreService.set_astType('Asset');
//StoreService.set_Subast('SubAsset');
 StoreService.set_astType('Product');
 StoreService.set_Subast('SubProduct');
 
 
 $scope.code = function(value,name,asname,details){

StoreService.set_astCode(value);
StoreService.set_Subast(name);
StoreService.set_asname(asname);
StoreService.set_details(details);


 
 };
 $scope.up = function(name){

	 $scope.x='123';
	
 };
 
 $scope.down = function(name,codee){

$scope.x=name;


var data = {
        
		baseNo: baseNo,
		prodCode: '',
		prodType: 'Asset'
    };
//http://10.10.7.25:8001/FABXRest/rest/IWealthPortalRestService/getPortfolioAssetDetails?baseNo=1002026&prodCode=&prodType=Asset

//$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolioAssetDetails', data).success(function(dataobj, status) {	  

	if(baseNo =='1002026'){
		var k=[{"prod_subprod_code":"LOAN","prod_subprod_scheme":"Loan","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"3701053.25","current_value_br_ccy":"3423999.999999999165","r_gain":"-32500","unrealized_gain":"277053.250000000835"},{"prod_subprod_code":"DEBT","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"CASHEQ","prod_subprod_scheme":"Cash & Equivalent","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];

	}
	else if(baseNo =='1002032'){
		var k=[{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"3191941.6662","current_value_br_ccy":"3276800.1065002996258","r_gain":"-28592.5","unrealized_gain":"-94919.8338"},{"prod_subprod_code":"DEBT","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	}
	else if(baseNo =='1002035'){
		var k=[{"prod_subprod_code":"CASHEQ","prod_subprod_scheme":"Cash & Equivalent","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"LOAN","prod_subprod_scheme":"Loan","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"668495.25","current_value_br_ccy":"604000","r_gain":"-4000","unrealized_gain":"64995.25"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	}
	
	for(index in k){
		
		if(codee==k[index].prod_subprod_code)
			{
                       //var q = "NaN";
                                                                                                    
                                    if(k[index].r_gain=="null"){
                                                              k[index].r_gain="0";
                                                                                                    }
                                                                                                    
			 var a= Number(k[index].investment_amt);
				
				var b=Number( k[index].current_value_br_ccy);
				var c=Number( k[index].r_gain);
				var d= Number(k[index].unrealized_gain);
			 var valueee={
					 InvVal:b.toFixed(2),
					 CurVal: a.toFixed(2),
					 RGain: c.toFixed(2),
					 URGain: d.toFixed(2)
					
			 };
			}
		
		
		
	}
	
	$scope.valuee=valueee;
//});

};
 

  $scope.assets=false;
   $scope.products=true;
$scope.liabilities=false;


$scope.asset= function(value){
	
StoreService.set_astType(value);
 $scope.assets=true;
   $scope.products=false;
   $scope.liabilities=false;
};
$scope.product= function(value){
	
StoreService.set_astType(value);

 $scope.assets=false;
   $scope.products=true;
   $scope.liabilities=false;
};
$scope.liability= function(value){
StoreService.set_astType(value);

 $scope.assets=false;
   $scope.products=false;
   $scope.liabilities=true;
};
    var vm = this;
    var values;

//relationship
 /*   var data = {
            
            rmId: rmid,
            baseNo: baseNo,
            brCd: brCd
      
        };*/
  //  $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getClientOverallPerformance", data).success(function(dataObj, status) {
 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientOverallPerformance?rmId='+sharedProperties.rmid+'&baseNo='+baseNo+'&brCd=BR0001').success(function(dataObj){
if(baseNo == '1002026'){

    var k = {"relGain":"-93580","unRelGain":"39139349","totalGain":"39045769","irr":"0","investmentAmt":"43126878","CurrentMarketValue":"3987529"};
}
else if(baseNo == '1002032'){
	var k = {"relGain":"-9552","unRelGain":"456770670","totalGain":"456761118","irr":"0","investmentAmt":"464373942","CurrentMarketValue":"7613311"};
}
else if (baseNo == '1002035'){
	var k = {"relGain":"-89000","unRelGain":"79995","totalGain":"-9005","irr":"0","investmentAmt":"668495","CurrentMarketValue":"589000"};
	
}
$scope.relGain=k.relGain;
//alert($scope.relGain);
 $scope.unRelGain=k.unRelGain;
 $scope.totalGain=k.totalGain;
 
 
// $scope.investmentAmt=dataObj.investmentAmt;
//$scope.CurrentMarketValue=dataObj.CurrentMarketValue;
 
 $scope.investmentAmt=k.CurrentMarketValue;
 $scope.CurrentMarketValue=k.investmentAmt;
 
 
 
 
// });
 
 
//asset
/* var data1 = {
	        
	        rmId: rmid,
	        baseNo: baseNo,
	        brCd: brCd,
	        portFolioNo: ''
	    };*/
 //$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getClientCurrentVsModelDetail", data1).success(function(dataObj, status) {
	//  $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientCurrentVsModelDetail?rmId='+sharedProperties.rmid+'&baseNo='+baseNo+'&brCd=BR0001&portFolioNo=').success(function(dataObj){
		
		//var m = dataObj;
    if(baseNo == '1002026'){
		var m = [{"astCode":"CASHEQ","astName":"Cash & Equivalent","recomPer":"5.00","assetROR":"5","currentVal":"200,000","prevVal":"200,000","percChange":"0.00","recomVal":"2,156,344","variance":"-978.17","CurrentPerc":0.46},{"astCode":"DEBT","astName":"Fixed Income","recomPer":"20.00","assetROR":"5","currentVal":"39,225,825","prevVal":"392,258","percChange":"9900.00","recomVal":"8,625,376","variance":"78.01","CurrentPerc":90.95},{"astCode":"DEQU","astName":"Stock","recomPer":"45.00","assetROR":"12","currentVal":"3,701,053","prevVal":"3,376,917","percChange":"9.60","recomVal":"19,407,095","variance":"-424.37","CurrentPerc":8.58},{"astCode":"DER","astName":"Derivatives","recomPer":"30.00","assetROR":"1","currentVal":"0","prevVal":"0","percChange":"0.00","recomVal":"12,938,063","variance":"-100.00","CurrentPerc":0}];
    }
    else if(baseNo == '1002032'){
    	var m = [{"astCode":"DEBT","astName":"Fixed Income","recomPer":"0.00","assetROR":"0","currentVal":"461,182,000","prevVal":"4,611,820","percChange":"9900.00","recomVal":"0","variance":"100.00","CurrentPerc":99.31},{"astCode":"DEQU","astName":"Stock","recomPer":"0.00","assetROR":"0","currentVal":"3,191,942","prevVal":"3,191,942","percChange":"0.00","recomVal":"0","variance":"100.00","CurrentPerc":0.69}];
    }else if(baseNo == '1002035'){
    	var m =[{"astCode":"DEQU","astName":"Stock","recomPer":"0.00","assetROR":"0","currentVal":"668,495","prevVal":"643,786","percChange":"3.84","recomVal":"0","variance":"100.00"}];
    }
			var n=[];
		for(index in m){
			var value1=m[index];
			
		var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
           var item1={
		astName:value1.astName,	
currentVal:value1.currentVal,
CurrentPerc:value1.CurrentPerc,
	variance:value1.variance,
recomVal:value1.recomVal,
	recomPer:value1.recomPer,
			astCode:value1.astCode,
				color:s[index]	
			};
			n.push(item1);	
		
		}
		$scope.fund=n;
	
var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
var o=[];
for(index in m){
var item2=s[index];
o.push(item2);
}
 
$scope.fun=o;
	//}); 
 
 
//product
	/*  var data2 = {
		        
			  baseNo: baseNo,
			  prodCode: '',
			  prodType:"Product"
		    };
//  $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientProdSummaryDetails?baseNo='+baseNo+'&brCd=BR0001&astCode=&astType=Product&resultFor=Product&portFolioNo=').success(function(dataObj){
	  $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getPortfolioProductDetails", data2).success(function(dataObj, status) {*/
	 // $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolioProductDetails?baseNo='+baseNo+'&prodCode=&prodType=Product').success(function(dataObj){
		if(baseNo == '1002026'){
		var m = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		}else if(baseNo == '1002032'){
			var m = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
		}else if(baseNo == '1002035'){
			var m = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
		}
			var n=[];
		for(index in m){
			var value1=m[index];
			var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
		var a= Number(value1.investment_amt);
		var b = Number(value1.current_value_br_ccy);
		var c = Number(value1.r_gain);
		var d = Number(value1.unrealized_gain);
           var item1={
		assetName:value1.prod_subprod_scheme,
			investment_amt:a.toFixed(2),
current:b.toFixed(2),
			//percChange:value1.percChange,
			r_gain:c.toFixed(2),
				unrealized_gain:d.toFixed(2),
astCode:value1.prod_subprod_code,
					color:s[index]	
					
			};
		
			n.push(item1);	
			
		}
		$scope.fund1=n;
		
var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
var o=[];
for(index in m){
var item2=s[index];
o.push(item2);
}
 
$scope.fun1=o;
//	}); 

//Liability
	 /* var data3 = {
		        
			  baseNo: baseNo,
			  brCd: brCd,
			  astCode: '',
			  astType: "Product",
			  resultFor: "Product",
			  portFolioNo: ''
			  
		    };*/
	 // $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getClientLiabilityDetails", data3).success(function(dataObj, status) {
 // $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientLiabilityDetails?baseNo='+baseNo+'&brCd=BR0001&astCode=&astType=Product&resultFor=Product&portFolioNo=').success(function(dataObj){
		 
		if(baseNo=='1002032'){
			var m1=[];
		}else if(baseNo=='1002035'){
			var m1=[{"currentVal":"0","astName":"Repo Borrowing","prevVal":"0","astCode":"REPO_BRW","percChange":"0.00","availedAmt":"0","approvedAmt":"0"}];
		}else if(baseNo =='1002026'){
			var m1 = [{"currentVal":"39,000","astName":"Repo Borrowing","prevVal":"0","astCode":"REPO_BRW","percChange":"0.00","availedAmt":"39,000","approvedAmt":"39,000"}];
			
			
		}
			var n=[];
		for(index in m1){
					
			var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
			var value2=m1[index];
		
           var item2={
		lName:value2.astName,	
         curr:value2.currentVal,
			perc:value2.percChange,
	color:s[index]	
					
			};
		
			n.push(item2);	
			
		}
		$scope.fund2=n;
		

		var s=['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'];
var o=[];
for(index in m1){
var item2=s[index];
o.push(item2);
}
 
$scope.fun2=o;
	

 // });

  
  

  
}
})();
