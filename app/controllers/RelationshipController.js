(function () {
	angular
    .module('app')
    .controller('RelationshipController', function($scope,$http, $rootScope, $stateParams, $state, LoginService, sharedProperties, StoreService) {
      
	var  baseNo = StoreService.get_base();
	var value =StoreService.get_astCode();
	var details = StoreService.get_details();
	var url = StoreService.get_url();
	//alert(details);

var data0 = {
        
		baseNo: baseNo,
		prodCode: '',
		prodType: details
    };
//http://10.10.7.25:8001/FABXRest/rest/IWealthPortalRestService/getPortfolioAssetDetails?baseNo=1002026&prodCode=&prodType=Asset

//$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolio'+details+'Details', data0).success(function(dataO1, status) {	  
if(baseNo == '1002026' && details=='Product'){
	var k1= [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		}else if(baseNo == '1002032' && details=='Product'){
	var k1= [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
	
}else if(baseNo == '1002035' && details=='Product'){
	var k1= [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
	}
else if(baseNo == '1002026' && details=='Asset'){
	var k1=[{"prod_subprod_code":"LOAN","prod_subprod_scheme":"Loan","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"3701053.25","current_value_br_ccy":"3423999.999999999165","r_gain":"-32500","unrealized_gain":"277053.250000000835"},{"prod_subprod_code":"DEBT","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"CASHEQ","prod_subprod_scheme":"Cash & Equivalent","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];

}else if(baseNo == '1002032' && details=='Asset'){
	var k1=[{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"3191941.6662","current_value_br_ccy":"3276800.1065002996258","r_gain":"-28592.5","unrealized_gain":"-94919.8338"},{"prod_subprod_code":"DEBT","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	
}else if(baseNo == '1002035' && details=='Asset'){
	var k1=[{"prod_subprod_code":"CASHEQ","prod_subprod_scheme":"Cash & Equivalent","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"LOAN","prod_subprod_scheme":"Loan","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DEQU","prod_subprod_scheme":"Stock","investment_amt":"668495.25","current_value_br_ccy":"604000","r_gain":"-4000","unrealized_gain":"64995.25"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 
}
//	var k1=dataO1;
	for(index in k1){
		if(value==k1[index].prod_subprod_code)
			{
			
			 var a1= Number(k1[index].investment_amt);
				
				var b1=Number( k1[index].current_value_br_ccy);
				var c1=Number( k1[index].r_gain);
				var d1= Number(k1[index].unrealized_gain);
			
			 var v={				
					 Investment:b1,
					 Currentvalue: a1,
					 rgain: c1,
					 ugain: d1
					
			 };
			}		
	}
$scope.va= v;


});














  //  });
	
	
})();