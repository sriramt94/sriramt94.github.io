(function () {
	
	
	angular
    .module('app')
    .controller('BubbleController' ,['$scope', '$http', 'StoreService',
      BubbleController
      
    ]);
	 function BubbleController($scope,$http,StoreService) {

var bsnsdate = StoreService.get_bsnsDt();
bsdate = new Date(bsnsdate);
bdate = bsdate.format("d-m-yyyy");




 $scope.myOrderBy='ABC';
 $scope.reverse = true;
 $scope.orderByMe= function(x){
 
 $scope.reverse = ($scope.myOrderBy === x) ? !$scope.reverse : false;
 
 $scope.myOrderBy = x;
 
 
 };
 $scope.bubble=false;
 $scope.x=true;
 $scope.table=false;
 $scope.button1=false;
var asname = StoreService.get_asname();
 var url = StoreService.get_url();
 
var baseNo= StoreService.get_base();;
 var astCode=StoreService.get_astCode();
 var astType=StoreService.get_astType();
 var Subast =StoreService.get_Subast();




$scope.button= true;
$scope.back = function(){
	$scope.x=true;
	 $scope.table=false;
};


$scope.back1= function(){
	$scope.button1=false;
	$scope.button=true;
	 var data1 = {
	 	        
    		 baseNo: baseNo,
    		 prodCode: astCode,
    		 prodType: "SubProduct"
 	    };
  //$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolio'+astType+'Details', data1).success(function(obj, status) {
 
//$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolio'+astType+'Details?baseNo='+baseNo+'&prodCode='+astCode+'&prodType=SubProduct').success(function(obj){
 

	//Nithin Karnati - Asset
     
	 if(baseNo=='1002026' && astCode== 'CASHEQ'){
		var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
		var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	 }
	 
	 if(baseNo=='1002026' && astCode== 'DEBT'){
		var n = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
		var obj = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
		 
	 }

	 if(baseNo=='1002026' && astCode== 'DEQU'){
		var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		 
	 }
	 
	 if(baseNo=='1002026' && astCode== 'DER'){
		var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
		var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
		 
	 }
	 
	 
	 //Nithin Karnati - Product
	 
	 if(baseNo=='1002026' && astCode=='REPO_INV'){
		 var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
		 var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
		 
	 }
	 
	 if(baseNo=='1002026' && astCode=='FI'){
		 var n  = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
		 var obj = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
		 
	 }
	 
	 if(baseNo=='1002026' && astCode=='DER'){
		 var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
		 var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
		 
	 }
	 
	 if(baseNo=='1002026' && astCode=='FUNDS'){
		 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"}];
		 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"}];
		 
	 }
	 
	 if(baseNo=='1002026' && astCode=='REPO_BRW'){
		 var n = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
		 var obj = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
		 
		 
	 }
	 
	 if(baseNo=='1002026' && astCode=='Equity'){
		 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
		 
	 }
	 
	 
	 
	 
	 // Sudip Rai - Asset
	 
	 if(baseNo=='1002032' && astCode=='DEBT') {
		 var n = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
		 var obj = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
		 
	 }
	 
	 if(baseNo=='1002032' && astCode=='DEQU') {
		 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
		 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
		 
	 }
	 
	 
	 //Sudip Rai - Product
	 
	 if(baseNo=='1002032' && astCode=='FI') {
		 var n = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
		 var obj = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
		 
	 }
	 
	 if(baseNo=='1002032' && astCode=='Equity') {
		 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
		 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
		 
	 }
	 
	 if(baseNo=='1002032' && astCode=='FUNDS') {
		 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
		 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
	 }
	 
	 
	 
	 
	 //Swathi Raman - Asset
	 
	 if(baseNo=='1002035' && astCode=='DEQU') {
		 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
		 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
		 
	 }
	 
	 
	 //Swathi Raman - Product
	 
	 if(baseNo=='1002035' && astCode=='REPO_INV') {
		 var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
		 var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
			 
	 }
	 
	 if(baseNo=='1002035' && astCode=='REPO_BRW') {
		 var n = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
		 var obj = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
				 
	 }
	 
	 if(baseNo=='1002035' && astCode=='DER') {
		 var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
		 var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 }
	 
	 if(baseNo=='1002035' && astCode=='Equity') {
		 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
		 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
		 
	 }
	 
	 if(baseNo=='1002035' && astCode=='FUNDS') {
		 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
		 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
		 
	 }
	 
	 
	
	var m=[];
	
	 for(index in n){
	//var a= Number(n[index].investment_amt);
	//var b=Number( n[index].current_value_br_ccy);
	
	var b= Number(n[index].investment_amt);
	var a=Number( n[index].current_value_br_ccy);
	var c=Number( n[index].r_gain);
	var d= Number(n[index].unrealized_gain);
       var e=0;                                                                                                                                                    
		 var valm={
				 astName: n[index].prod_subprod_scheme,
					 astcode: n[index].prod_subprod_code,
				 InvVal: Number( n[index].current_value_br_ccy),
				 CurVal: Number( n[index].investment_amt),
				 RGain: Number( n[index].r_gain),
				 URGain: Number(n[index].unrealized_gain),
				 Profit: e
		 };
		 
		
	m.push(valm);
	$scope.subasset=m;
	
};
  
	
	
//});
};
  
$scope.select = function(code){
	//alert(code);
	$scope.table=true;
	 $scope.x=false;
	//$scope.arrow=false;
	//$scope.button=false;
	//$scope.table1=false;
	 /*var d= {
		        
			 secCode: code,
		        baseNo: baseNo,
		        sort: 'x',
				 bnsdate: bdate 

		        
		    };*/
	 
	 //$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getTransactionDetails", d).success(function(dat, status) {	
		 	
		 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getTransactionDetails?baseNo='+baseNo+'&secCode='+seccode).success(function(dataou){
		
	 
	 
	 if( code=='REV_REPO_TRY' && baseNo=='1002026'){
		 var j=[{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-05-01 00:00:00.0","price":"1","units":"300000","investment_amt":"300000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo Maturity","trans_date":"2016-10-01 00:00:00.0","price":"1","units":"315000","investment_amt":"315000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-10-10 00:00:00.0","price":"1","units":"200000","investment_amt":"200000"}]
}
else if( code=='MFSEC1T24' && baseNo=='1002026'){
	 var j=[{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"Templeton Growth Fund","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"Templeton Growth Fund","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"Templeton Growth Fund","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"180000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"Templeton Growth Fund","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"}];
}
else if( code=='BONDSEC8' && baseNo=='1002026'){
	 var j=[{"security_name":"BONDSEC8","transaction_type":"Buy Market","trans_date":"2014-10-01 00:00:00.0","price":"109","units":"5000","investment_amt":"5450"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2014-11-05 00:00:00.0","price":"108","units":"4000","investment_amt":"4360"},{"security_name":"BONDSEC8","transaction_type":"Buy Branch","trans_date":"2015-02-13 00:00:00.0","price":"105","units":"1000","investment_amt":"1050"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2015-04-24 00:00:00.0","price":"105","units":"1000","investment_amt":"1090"},{"security_name":"BONDSEC8","transaction_type":"Sell Branch","trans_date":"2016-02-18 00:00:00.0","price":"105","units":"500","investment_amt":"525"},{"security_name":"BONDSEC8","transaction_type":"Buy Market","trans_date":"2016-02-19 00:00:00.0","price":"105","units":"960000","investment_amt":"1008000"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2016-10-15 00:00:00.0","price":"109","units":"600000","investment_amt":"630000"}]
}
else if( code=='EQUSEC5' && baseNo=='1002026'){
	var j=	[{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"25","units":"5000","investment_amt":"125000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"30","units":"4000","investment_amt":"100000"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"23","units":"1000","investment_amt":"23000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"27","units":"1000","investment_amt":"25000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"28","units":"500","investment_amt":"11500"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2016-02-19 00:00:00.0","price":"28","units":"36000","investment_amt":"1008000"}]
}
else if( code=='FUTSEC10' && baseNo=='1002026'){
	 var j=[{"security_name":"FUTSEC10","transaction_type":"Futures Buy","trans_date":"2015-10-01 00:00:00.0","price":"110","units":"6000","investment_amt":"660000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2015-11-05 00:00:00.0","price":"111","units":"4000","investment_amt":"440000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2016-02-13 00:00:00.0","price":"116","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Expiry Out","trans_date":"2016-04-23 00:00:00.0","price":"0","units":"1000","investment_amt":"110000"}]
}
else if( code=='MFSEC2' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-04-25 00:00:00.0","price":"15","units":"66000","investment_amt":"990000"}]
}
else if( code=='MFSEC3T24' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC3T24","transaction_type":"Subscription","trans_date":"2015-04-29 00:00:00.0","price":"8","units":"50000","investment_amt":"400000"}]
}
else if( code=='MFSEC2T24' && baseNo=='1002026'){
	var j=[{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2015-04-25 00:00:00.0","price":"15","units":"66000","investment_amt":"990000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"}]
}
else if( code=='MFSEC1' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"}]
}





//sudip
else if( code=='IPRU2674' && baseNo=='1002032'){
	 var j=[{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-09-10 00:00:00.0","price":"186","units":"300","investment_amt":"55800"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2014-11-03 00:00:00.0","price":"185","units":"4400","investment_amt":"814000"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"186","units":"1500","investment_amt":"279000"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2013-06-15 00:00:00.0","price":"186","units":"4600","investment_amt":"855600"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2013-11-15 00:00:00.0","price":"185","units":"1250","investment_amt":"232500"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2013-12-09 00:00:00.0","price":"195","units":"5600","investment_amt":"1092000"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-03-09 00:00:00.0","price":"190","units":"840","investment_amt":"156240"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2014-06-30 00:00:00.0","price":"185","units":"1400","investment_amt":"259000"}]
}
else if( code=='PRISMCEM' && baseNo=='1002032'){
	 var j=[{"security_name":"Prism Cement Limited","transaction_type":"Equity Sell","trans_date":"2014-10-12 00:00:00.0","price":"102","units":"280","investment_amt":"28560"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Buy","trans_date":"2013-08-23 00:00:00.0","price":"102","units":"6100","investment_amt":"622200"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Sell","trans_date":"2014-02-23 00:00:00.0","price":"101","units":"2340","investment_amt":"238680"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Buy","trans_date":"2014-08-12 00:00:00.0","price":"103","units":"2900","investment_amt":"298700"}]
}
else if( code=='AGRODUTCH' && baseNo=='1002032'){
	 var j=[{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Sell","trans_date":"2014-09-30 00:00:00.0","price":"48","units":"470","investment_amt":"23500"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Buy","trans_date":"2013-07-11 00:00:00.0","price":"50","units":"5200","investment_amt":"260000"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Sell","trans_date":"2013-12-11 00:00:00.0","price":"55","units":"1150","investment_amt":"57500"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Buy","trans_date":"2014-07-20 00:00:00.0","price":"47","units":"3100","investment_amt":"145700"}]
}
else if( code=='NTPCNCD' && baseNo=='1002032'){
	 var j=[{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-09-30 00:00:00.0","price":"95","units":"240000","investment_amt":"228000"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-11-01 00:00:00.0","price":"100","units":"90000","investment_amt":"90900"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-02-20 00:00:00.0","price":"100","units":"520000","investment_amt":"520000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-04-03 00:00:00.0","price":"101","units":"680000","investment_amt":"686800"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2013-05-20 00:00:00.0","price":"101","units":"80000","investment_amt":"80000"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2013-09-03 00:00:00.0","price":"103","units":"170000","investment_amt":"170000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-09-09 00:00:00.0","price":"100","units":"760000","investment_amt":"760000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-02-12 00:00:00.0","price":"102","units":"580000","investment_amt":"591600"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-04-20 00:00:00.0","price":"93","units":"340000","investment_amt":"316200"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-05-09 00:00:00.0","price":"104","units":"345000","investment_amt":"345750"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-06-20 00:00:00.0","price":"98","units":"31000","investment_amt":"31310"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-07-12 00:00:00.0","price":"103","units":"123000","investment_amt":"124230"}]
}
else if( code=='IIFCLT3' && baseNo=='1002032'){
	 var j=[{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2014-08-12 00:00:00.0","price":"116","units":"63000","investment_amt":"68040"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2014-09-30 00:00:00.0","price":"108","units":"201000","investment_amt":"217080"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2013-03-15 00:00:00.0","price":"108","units":"860000","investment_amt":"928800"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2013-05-20 00:00:00.0","price":"100","units":"720000","investment_amt":"720000"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2013-07-15 00:00:00.0","price":"115","units":"56000","investment_amt":"60480"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2013-10-20 00:00:00.0","price":"103","units":"190000","investment_amt":"205200"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2014-03-30 00:00:00.0","price":"105","units":"640000","investment_amt":"672000"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2014-05-12 00:00:00.0","price":"110","units":"260000","investment_amt":"286000"}]
}
else if( code=='EQUSEC6' && baseNo=='1002032'){
	 var j=[{"security_name":"EQUSEC6","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"452","units":"5000","investment_amt":"2260000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"466","units":"4000","investment_amt":"1808000"},{"security_name":"EQUSEC6","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"467","units":"1000","investment_amt":"467000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"451","units":"1000","investment_amt":"452000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"452","units":"500","investment_amt":"233500"}]
}
else if( code=='MFSEC1' && baseNo=='1002032'){
	 var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"}]
}


//swati

else if( code=='REV_REPO_TRY' && baseNo=='1002035'){
	 var j=[{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-05-01 00:00:00.0","price":"1","units":"300000","investment_amt":"300000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo Maturity","trans_date":"2016-10-01 00:00:00.0","price":"1","units":"315000","investment_amt":"315000"}]
}
else if( code=='MFSEC1T24' && baseNo=='1002035'){
var j=[{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"180000"}]
}

else if( code=='EQUSEC5' && baseNo=='1002035'){
var j=	[{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"25","units":"5000","investment_amt":"125000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"30","units":"4000","investment_amt":"100000"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"23","units":"1000","investment_amt":"23000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"27","units":"1000","investment_amt":"25000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"28","units":"500","investment_amt":"11500"}]
}
else if( code=='FUTSEC10' && baseNo=='1002035'){
var j=[{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2015-11-05 00:00:00.0","price":"111","units":"4000","investment_amt":"440000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2016-02-13 00:00:00.0","price":"116","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Expiry Out","trans_date":"2016-04-23 00:00:00.0","price":"0","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Futures Buy","trans_date":"2015-10-01 00:00:00.0","price":"110","units":"6000","investment_amt":"660000"}]
}
else if( code=='MFSEC2' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"}]
}
else if( code=='MFSEC3T24' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC3T24","transaction_type":"Subscription","trans_date":"2015-04-29 00:00:00.0","price":"8","units":"50000","investment_amt":"400000"}]
}

else if( code=='MFSEC1' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"}]
}

				
				var v=[];
				
				 for(index in j){
					var date= j[index].trans_date;
					var d = date.split(" ");
					 var valv={
							 
							 transaction_type: j[index].transaction_type,
							 trans_date: d[0],
							 price: j[index].price,
							 units: j[index].units,
							 investment_amt: j[index].investment_amt
							 
					 };
					 
					
				v.push(valv);
				$scope.selected=v;		 
			 
				 };
			
			    
			   //});	
	
}
//table security
  $scope.sa = function(code){
    	
$scope.button= false;
$scope.button1=true;
   	
var data = {
        
		baseNo: baseNo,
		prodCode: code,
		prodType: ''
    };
//$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolio'+astType+'Details', data).success(function(dataou, status) {
    	// $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolio'+astType+'Details?baseNo='+baseNo+'&prodCode='+code+'&prodType=').success(function(dataou){
    	
    

//Nithin Karnati - SubAsset

if(baseNo=='1002026' && code == 'REPO_INV') {
    var	obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
    	
}
if(baseNo=='1002026' && code == 'FI') {
    var obj1 = [{"prod_subprod_code":"BONDSEC8","prod_subprod_scheme":"BONDSEC8","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];	
    	
}
if(baseNo=='1002026' && code == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"224000"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC2T24","prod_subprod_scheme":"ICICI Blue Chip Fund","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"}];
	
}
if(baseNo=='1002026' && code == 'EQU') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	
}
if(baseNo=='1002026' && code == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}



//Nithin Karnati - SubProduct


if(baseNo=='1002026' && code == 'REPO_INV') {
	var obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002026' && code == 'Bond') {
	var obj1 = [{"prod_subprod_code":"BONDSEC8","prod_subprod_scheme":"BONDSEC8","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	
}

if(baseNo=='1002026' && code == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}

if(baseNo=='1002026' && code == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"224000"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC2T24","prod_subprod_scheme":"ICICI Blue Chip Fund","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002026' && code == 'REPO_BRW') {
	var obj1 = [{"prod_subprod_code":"202122","prod_subprod_scheme":"202122","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	
}

if(baseNo=='1002026' && code == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	
}




//Sudip Rai - SubAsset

if(baseNo=='1002032' && code == 'FI') {
	var obj1 = [{"prod_subprod_code":"IIFCLT3","prod_subprod_scheme":"India Infrastructure Finance Company Limited ","investment_amt":"228520000","current_value_br_ccy":"2072369.543193227823","r_gain":"-540","unrealized_gain":"226464000"},{"prod_subprod_code":"NTPCNCD","prod_subprod_scheme":"NTPC Limited ","investment_amt":"232662000","current_value_br_ccy":"2264141.8473351691534","r_gain":"19580","unrealized_gain":"230401590"}];
	
}

if(baseNo=='1002032' && code == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"IPRU2674","prod_subprod_scheme":"ICICI Prud MF","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"2110","unrealized_gain":"-56710"}];
	
}

if(baseNo=='1002032' && code == 'EQU') {
	var obj1 = [{"prod_subprod_code":"PRISMCEM","prod_subprod_scheme":"Prism Cement Limited","investment_amt":"606100","current_value_br_ccy":"653538.0780780781072","r_gain":"-2340","unrealized_gain":"-47560"},{"prod_subprod_code":"AGRODUTCH","prod_subprod_scheme":"Agro Dutch Industries Limited","investment_amt":"334000","current_value_br_ccy":"325311.328671328676","r_gain":"4810","unrealized_gain":"9300"},{"prod_subprod_code":"EQUSEC6","prod_subprod_scheme":"EQUSEC6","investment_amt":"11491.6662","current_value_br_ccy":"11257.75","r_gain":"2327.5","unrealized_gain":"50.1662"}];
	
}


//Sudip Rai - SubProduct

if(baseNo=='1002032' && code == 'Bond') {
	var obj1 = [{"prod_subprod_code":"IIFCLT3","prod_subprod_scheme":"India Infrastructure Finance Company Limited ","investment_amt":"228520000","current_value_br_ccy":"2072369.543193227823","r_gain":"-540","unrealized_gain":"226464000"},{"prod_subprod_code":"NTPCNCD","prod_subprod_scheme":"NTPC Limited ","investment_amt":"232662000","current_value_br_ccy":"2264141.8473351691534","r_gain":"19580","unrealized_gain":"230401590"}];
	
}

if(baseNo=='1002032' && code == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"PRISMCEM","prod_subprod_scheme":"Prism Cement Limited","investment_amt":"606100","current_value_br_ccy":"653538.0780780781072","r_gain":"-2340","unrealized_gain":"-47560"},{"prod_subprod_code":"AGRODUTCH","prod_subprod_scheme":"Agro Dutch Industries Limited","investment_amt":"334000","current_value_br_ccy":"325311.328671328676","r_gain":"4810","unrealized_gain":"9300"},{"prod_subprod_code":"EQUSEC6","prod_subprod_scheme":"EQUSEC6","investment_amt":"11491.6662","current_value_br_ccy":"11257.75","r_gain":"2327.5","unrealized_gain":"50.1662"}];
	
}

if(baseNo=='1002032' && code == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"IPRU2674","prod_subprod_scheme":"ICICI Prud MF","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"2110","unrealized_gain":"-56710"}];
	
}




//Swathi Raman - SubAsset

if(baseNo=='1002035' && code == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"180000","r_gain":"null","unrealized_gain":"44000"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"14900","current_value_br_ccy":"12000","r_gain":"7000","unrealized_gain":"2900"}];
	
}

if(baseNo=='1002035' && code == 'EQU') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	
}


//Swathi Raman - SubProduct

if(baseNo=='1002035' && code == 'REPO_INV') {
	var obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002035' && code == 'REPO_BRW') {
	var obj1 = [{"prod_subprod_code":"202125","prod_subprod_scheme":"202125","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	
}

if(baseNo=='1002035' && code == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}

if(baseNo=='1002035' && code == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	
}

if(baseNo=='1002035' && astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"180000","r_gain":"null","unrealized_gain":"44000"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"14900","current_value_br_ccy":"12000","r_gain":"7000","unrealized_gain":"2900"}];
	
}

    		 var k=obj1;
    			
    			var u=[];
    			
    			 for(index in k){
    				 
					// var a= Number(k[index].investment_amt);
					// var b=Number( k[index].current_value_br_ccy);
    				 var b= Number(k[index].investment_amt);
 					var a=Number( k[index].current_value_br_ccy);
					
					
					
	var c=Number( k[index].r_gain);
	var d= Number(k[index].unrealized_gain);
	var e = b-a;
	

    				 var valu={
    						 astName: k[index].prod_subprod_scheme,
						    subassetcode: k[index].prod_subprod_code,

    						 InvVal: a.toFixed(2),
    						 CurVal: b.toFixed(2),
    						 RGain: c.toFixed(2),
    						 URGain: d.toFixed(2),
    						 Profit: e
    				 };
    				 
    				
    			u.push(valu);
    			$scope.subasset=u;		 
    		 
    			 };
    		
    		    
    		   //});	
    	
    	
     };






     var data1 = {
 	        
    		 baseNo: baseNo,
    		 prodCode: astCode,
    		 prodType: "SubProduct"
 	    };
  //$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolio'+astType+'Details', data1).success(function(obj, status) {
 
//$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolio'+astType+'Details?baseNo='+baseNo+'&prodCode='+astCode+'&prodType=SubProduct').success(function(obj){
 
     
 //Nithin Karnati - Asset
     
 if(baseNo=='1002026' && astCode== 'CASHEQ'){
	var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
 }
 
 if(baseNo=='1002026' && astCode== 'DEBT'){
	var n = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	var obj = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	 
 }

 if(baseNo=='1002026' && astCode== 'DEQU'){
	var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	 
 }
 
 if(baseNo=='1002026' && astCode== 'DER'){
	var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 
 }
 
 
 //Nithin Karnati - Product
 
 if(baseNo=='1002026' && astCode=='REPO_INV'){
	 var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	 var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	 
 }
 
 if(baseNo=='1002026' && astCode=='FI'){
	 var n  = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	 var obj = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	 
 }
 
 if(baseNo=='1002026' && astCode=='DER'){
	 var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 
 }
 
 if(baseNo=='1002026' && astCode=='FUNDS'){
	 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"}];
	 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"}];
	 
 }
 
 if(baseNo=='1002026' && astCode=='REPO_BRW'){
	 var n = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	 var obj = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	 
	 
 }
 
 if(baseNo=='1002026' && astCode=='Equity'){
	 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	 
 }
 
 
 
 
 // Sudip Rai - Asset
 
 if(baseNo=='1002032' && astCode=='DEBT') {
	 var n = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	 var obj = [{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	 
 }
 
 if(baseNo=='1002032' && astCode=='DEQU') {
	 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
	 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
	 
 }
 
 
 //Sudip Rai - Product
 
 if(baseNo=='1002032' && astCode=='FI') {
	 var n = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	 var obj = [{"prod_subprod_code":"Bond","prod_subprod_scheme":"Bonds","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"}];
	 
 }
 
 if(baseNo=='1002032' && astCode=='Equity') {
	 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
	 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"}];
	 
 }
 
 if(baseNo=='1002032' && astCode=='FUNDS') {
	 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
	 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
 }
 
 
 
 
 //Swathi Raman - Asset
 
 if(baseNo=='1002035' && astCode=='DEQU') {
	 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"},{"prod_subprod_code":"EQU","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	 
 }
 
 
 //Swathi Raman - Product
 
 if(baseNo=='1002035' && astCode=='REPO_INV') {
	 var n = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
	 var obj = [{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
		 
 }
 
 if(baseNo=='1002035' && astCode=='REPO_BRW') {
	 var n = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	 var obj = [{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
			 
 }
 
 if(baseNo=='1002035' && astCode=='DER') {
	 var n = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	 var obj = [{"prod_subprod_code":"FUT","prod_subprod_scheme":"Futures","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
 }
 
 if(baseNo=='1002035' && astCode=='Equity') {
	 var n = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	 var obj = [{"prod_subprod_code":"Subequity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	 
 }
 
 if(baseNo=='1002035' && astCode=='FUNDS') {
	 var n = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
	 var obj = [{"prod_subprod_code":"MF","prod_subprod_scheme":"Mutual Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];
	 
 }
 
 
 
 
 
 
 var m=[];
	
	 for(index in n){
	//var a= Number(n[index].investment_amt);
	//var b=Number( n[index].current_value_br_ccy);
	
	var b= Number(n[index].investment_amt);
	var a= Number(n[index].current_value_br_ccy);
	var c= Number(n[index].r_gain);
	var d= Number(n[index].unrealized_gain);
       var e=0;                                                                                                                                                    
		 var valm={
				 astName: n[index].prod_subprod_scheme,
				 astcode: n[index].prod_subprod_code,
				 InvVal: Number( n[index].current_value_br_ccy),
				 CurVal: Number( n[index].investment_amt),
				 RGain: Number( n[index].r_gain),
				 URGain: Number(n[index].unrealized_gain),
				 Profit: e
		 };
		 
		
	m.push(valm);
	$scope.subasset=m;
	
};
  



//bubble
//alert(obj.details.length);
var currentdata="[";

/*
for(var i=0;i<obj.length;i++){
if(i<obj.length-1){
currentdata+= "{x: "+obj[i].investment_amt+", " +"y: "+obj[i].current_value_br_ccy+", " +"z: "+((obj[i].current_value_br_ccy)-(obj[i].investment_amt))+", "+"name: '"+obj[i].prod_subprod_scheme+"', "  +"r_gain: "+obj[i].r_gain+", "+ "unrealized_gain: "+obj[i].unrealized_gain+","+"astCode: '"+obj[i].prod_subprod_code+"', "+"color: 'blue'}, ";
}else{
currentdata+= "{x: "+obj[i].investment_amt+", " +"y: "+obj[i].current_value_br_ccy+", " +"z: "+((obj[i].current_value_br_ccy)-(obj[i].investment_amt))+", "+"name: '"+obj[i].prod_subprod_scheme+"', "+"r_gain: "+obj[i].r_gain+", "+ "unrealized_gain: "+obj[i].unrealized_gain+"," +"astCode: '"+obj[i].prod_subprod_code+"', "+"color: 'blue'}]";
}
} */

//reverse of inv nd curr val issue
for(var i=0;i<obj.length;i++){
	
if(i<obj.length-1){
currentdata+= "{x: "+obj[i].current_value_br_ccy+", " +"y: "+obj[i].investment_amt+", " +"z: "+((obj[i].current_value_br_ccy)-(obj[i].investment_amt))+", "+"name: '"+obj[i].prod_subprod_scheme+"', "  +"r_gain: "+obj[i].r_gain+", "+ "unrealized_gain: "+obj[i].unrealized_gain+","+"astCode: '"+obj[i].prod_subprod_code+"', "+"color: 'blue'}, ";
}else{
currentdata+= "{x: "+obj[i].current_value_br_ccy+", " +"y: "+obj[i].investment_amt+", " +"z: "+((obj[i].current_value_br_ccy)-(obj[i].investment_amt))+", "+"name: '"+obj[i].prod_subprod_scheme+"', "+"r_gain: "+obj[i].r_gain+", "+ "unrealized_gain: "+obj[i].unrealized_gain+"," +"astCode: '"+obj[i].prod_subprod_code+"', "+"color: 'blue'}]";
}
}

$scope.bubbleData=eval(currentdata);

$scope.options= Highcharts.setOptions({
    lang: {thousandsSep:',',
    numericSymbols: null}
      });

		

		    /*alert(angular	.toJson(response.data.x2));*/
		 $scope.charts=Highcharts.chart('container', {

		chart: {


			backgroundColor: '#153A54',
			plotBorderColor: '#3C7193',
			plotBorderWidth: 2,
            type: 'bubble',

            events: { 

            },

           

            plotBorderWidth: 1,
            zoomType: 'xy',
            color: 'red'
            
          
        },

        legend: {
            enabled: false
        },

        title: {
			style: {
				 color: 'white',
				 font: 'bold 14px "Trebuchet MS", Verdana, sans-serif'
      },
            text: Subast+" View<br></br> "+astType+": "+ asname
        },

        /* subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        }, */

        xAxis: {
			color: 'black',
            gridLineWidth: 0,
			plotBorderColor: '#3C7193',
			plotBorderWidth: 2,
            title: {
               style: {
               color: 'white'},
            	 text: '<b>Investment Amount</b>'  
            },
            labels: {
               style: {
               color: 'white'} 
            },
			minorTickLength: 0,
			tickLength: 0,
			gridLineColor: 'red',
			plotBorderColor: '#3C7193',
            plotOptions: {
                bubble: {
					plotBorderColor: '#3C7193',
			plotBorderWidth: 2,

                    color: '#3C7193',
                    marker: {
                        fillColor: 'transparent'
                    }
                }
            }

        },

        yAxis: {
			color: 'black',
			gridLineWidth: 0,
            startOnTick: false,
            endOnTick: false,
				lineColor: 'transparent',
        title: {
         style: { color: 'white'},
           text: '<b>Market Value</b>'
            },
            labels: {style: { color: 'white'} },
            maxPadding: 0.2

        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
             pointFormat: '<tr><th colspan="2"><h2>{point.name}</h2></th></tr>'+
                 '<tr><th>Investment Amount:</th><td>{point.x:,.0f}</td></tr>' +
                 '<tr><th>Market Value:</th><td>{point.y:,.0f}</td></tr>' +
                 '<tr><th>Realized Gain:</th><td>{point.r_gain:,.0f}</td></tr>'+
				 '<tr><th>Unrealized Gain:</th><td>{point.unrealized_gain:,.0f}</td></tr>',
            footerFormat: '</table>',
            followPointer: false
        },

        plotOptions: {
			borderColor: 'black',
            series: {
				showCheckBox: true,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                },
                point: {
                	 events: {

                         click: function (e) {

 							
 $scope.name=e.point.name;
 var data2 = {
	        
		 baseNo: baseNo,
		 prodCode: e.point.astCode,
		 prodType: ''
	    };
//$http.post(url+'/FABXRest/rest/IWealthDashboardRestService/getPortfolio'+astType+'Details', data2).success(function(obj1, status) {
 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolio'+astType+'Details?baseNo='+baseNo+'&prodCode='+e.point.astCode+'&prodType=').success(function(obj1){
  
 
//Nithin Karnati - SubAsset
 
if(baseNo=='1002026' && e.point.astCode == 'REPO_INV') {
    var	obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
    	
}
if(baseNo=='1002026' && e.point.astCode == 'FI') {
    var obj1 = [{"prod_subprod_code":"BONDSEC8","prod_subprod_scheme":"BONDSEC8","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];	
    	
}
if(baseNo=='1002026' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"224000"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC2T24","prod_subprod_scheme":"ICICI Blue Chip Fund","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"}];
	
}
if(baseNo=='1002026' && e.point.astCode == 'EQU') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	
}
if(baseNo=='1002026' && e.point.astCode == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}



//Nithin Karnati - SubProduct


if(baseNo=='1002026' && e.point.astCode == 'REPO_INV') {
	var obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002026' && e.point.astCode == 'Bond') {
	var obj1 = [{"prod_subprod_code":"BONDSEC8","prod_subprod_scheme":"BONDSEC8","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"}];
	
}

if(baseNo=='1002026' && e.point.astCode == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}

if(baseNo=='1002026' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"224000"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC2T24","prod_subprod_scheme":"ICICI Blue Chip Fund","investment_amt":"998300","current_value_br_ccy":"1001999.99999999967","r_gain":"7000","unrealized_gain":"-3699.99999999967"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002026' && e.point.astCode == 'REPO_BRW') {
	var obj1 = [{"prod_subprod_code":"202122","prod_subprod_scheme":"202122","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	
}

if(baseNo=='1002026' && e.point.astCode == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];
	
}




//Sudip Rai - SubAsset

if(baseNo=='1002032' && e.point.astCode == 'FI') {
	var obj1 = [{"prod_subprod_code":"IIFCLT3","prod_subprod_scheme":"India Infrastructure Finance Company Limited ","investment_amt":"228520000","current_value_br_ccy":"2072369.543193227823","r_gain":"-540","unrealized_gain":"226464000"},{"prod_subprod_code":"NTPCNCD","prod_subprod_scheme":"NTPC Limited ","investment_amt":"232662000","current_value_br_ccy":"2264141.8473351691534","r_gain":"19580","unrealized_gain":"230401590"}];
	
}

if(baseNo=='1002032' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"IPRU2674","prod_subprod_scheme":"ICICI Prud MF","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"2110","unrealized_gain":"-56710"}];
	
}

if(baseNo=='1002032' && e.point.astCode == 'EQU') {
	var obj1 = [{"prod_subprod_code":"PRISMCEM","prod_subprod_scheme":"Prism Cement Limited","investment_amt":"606100","current_value_br_ccy":"653538.0780780781072","r_gain":"-2340","unrealized_gain":"-47560"},{"prod_subprod_code":"AGRODUTCH","prod_subprod_scheme":"Agro Dutch Industries Limited","investment_amt":"334000","current_value_br_ccy":"325311.328671328676","r_gain":"4810","unrealized_gain":"9300"},{"prod_subprod_code":"EQUSEC6","prod_subprod_scheme":"EQUSEC6","investment_amt":"11491.6662","current_value_br_ccy":"11257.75","r_gain":"2327.5","unrealized_gain":"50.1662"}];
	
}


//Sudip Rai - SubProduct

if(baseNo=='1002032' && e.point.astCode == 'Bond') {
	var obj1 = [{"prod_subprod_code":"IIFCLT3","prod_subprod_scheme":"India Infrastructure Finance Company Limited ","investment_amt":"228520000","current_value_br_ccy":"2072369.543193227823","r_gain":"-540","unrealized_gain":"226464000"},{"prod_subprod_code":"NTPCNCD","prod_subprod_scheme":"NTPC Limited ","investment_amt":"232662000","current_value_br_ccy":"2264141.8473351691534","r_gain":"19580","unrealized_gain":"230401590"}];
	
}

if(baseNo=='1002032' && e.point.astCode == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"PRISMCEM","prod_subprod_scheme":"Prism Cement Limited","investment_amt":"606100","current_value_br_ccy":"653538.0780780781072","r_gain":"-2340","unrealized_gain":"-47560"},{"prod_subprod_code":"AGRODUTCH","prod_subprod_scheme":"Agro Dutch Industries Limited","investment_amt":"334000","current_value_br_ccy":"325311.328671328676","r_gain":"4810","unrealized_gain":"9300"},{"prod_subprod_code":"EQUSEC6","prod_subprod_scheme":"EQUSEC6","investment_amt":"11491.6662","current_value_br_ccy":"11257.75","r_gain":"2327.5","unrealized_gain":"50.1662"}];
	
}

if(baseNo=='1002032' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"IPRU2674","prod_subprod_scheme":"ICICI Prud MF","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"2110","unrealized_gain":"-56710"}];
	
}




//Swathi Raman - SubAsset

if(baseNo=='1002035' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"180000","r_gain":"null","unrealized_gain":"44000"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"14900","current_value_br_ccy":"12000","r_gain":"7000","unrealized_gain":"2900"}];
	
}

if(baseNo=='1002035' && e.point.astCode == 'EQU') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	
}


//Swathi Raman - SubProduct

if(baseNo=='1002035' && e.point.astCode == 'REPO_INV') {
	var obj1 = [{"prod_subprod_code":"REV_REPO_TRY","prod_subprod_scheme":"REV_REPO_TRY","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"}];
	
}

if(baseNo=='1002035' && e.point.astCode == 'REPO_BRW') {
	var obj1 = [{"prod_subprod_code":"202125","prod_subprod_scheme":"202125","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"}];
	
}

if(baseNo=='1002035' && e.point.astCode == 'FUT') {
	var obj1 = [{"prod_subprod_code":"FUTSEC10","prod_subprod_scheme":"FUTSEC10","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"}];
	
}

if(baseNo=='1002035' && e.point.astCode == 'Subequity') {
	var obj1 = [{"prod_subprod_code":"EQUSEC5","prod_subprod_scheme":"EQUSEC5","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"}];
	
}

if(baseNo=='1002035' && e.point.astCode == 'MF') {
	var obj1 = [{"prod_subprod_code":"MFSEC1T24","prod_subprod_scheme":"Templeton Growth Fund","investment_amt":"224000","current_value_br_ccy":"180000","r_gain":"null","unrealized_gain":"44000"},{"prod_subprod_code":"MFSEC3T24","prod_subprod_scheme":"MFSEC3T24","investment_amt":"415000","current_value_br_ccy":"400000","r_gain":"null","unrealized_gain":"15000"},{"prod_subprod_code":"MFSEC1","prod_subprod_scheme":"MFSEC1","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-35500","unrealized_gain":"0"},{"prod_subprod_code":"MFSEC2","prod_subprod_scheme":"MFSEC2","investment_amt":"14900","current_value_br_ccy":"12000","r_gain":"7000","unrealized_gain":"2900"}];
	
}



	
	var currentdatagain="[";
	var currentdataloss="[";

	 for(var i=0;i<obj1.length;i++){
//		var ia = Number(obj1[i].investment_amt);
//		var cv =Number(obj1[i].current_value_br_ccy);
		
		var cv = Number(obj1[i].investment_amt);
		var ia =Number(obj1[i].current_value_br_ccy);
		
		
		 var x1 = obj1[i].investment_amt;
		 var y1 = obj1[i].current_value_br_ccy;		 

/*
if(cv >= ia){

 if(i<obj1.length-1){
	 		currentdatagain+= "{x: "+obj1[i].investment_amt+", " +"y: "+obj1[i].current_value_br_ccy+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+ "unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}, ";
	 }else{
	 		currentdatagain+= "{x: "+obj1[i].investment_amt+", " +"y: "+obj1[i].current_value_br_ccy+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+"unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}]";
	 		currentdataloss+="]";
	 	}

}
else{
	if(i<obj1.length-1){
	 		currentdataloss+= "{x: "+obj1[i].investment_amt+", " +"y: "+obj1[i].current_value_br_ccy+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+ "unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}, ";
	 }else{
	 		currentdataloss+= "{x: "+obj1[i].investment_amt+", " +"y: "+obj1[i].current_value_br_ccy+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+"unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}]";
	 		currentdatagain+="]";
	 	}

} */
		 //curr val nd inv val reverse issue
		 if(cv >= ia){

			 if(i<obj1.length-1){
				 		currentdatagain+= "{x: "+obj1[i].current_value_br_ccy+", " +"y: "+obj1[i].investment_amt+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+ "unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}, ";
				 }else{
				 		currentdatagain+= "{x: "+obj1[i].current_value_br_ccy+", " +"y: "+obj1[i].investment_amt+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+"unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}]";
				 		currentdataloss+="]";
				 	}

			}
			else{
				if(i<obj1.length-1){
				 		currentdataloss+= "{x: "+obj1[i].current_value_br_ccy+", " +"y: "+obj1[i].investment_amt+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+ "unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}, ";
				 }else{
				 		currentdataloss+= "{x: "+obj1[i].current_value_br_ccy+", " +"y: "+obj1[i].investment_amt+", " +"z: "+(y1-x1)+", " +"r_gain: "+obj1[i].r_gain+", "+"unrealized_gain: "+obj1[i].unrealized_gain+", "+"name: '"+obj1[i].prod_subprod_scheme+"', " +"astCode: '"+obj1[i].prod_subprod_code+"', " +"color: 'black'}]";
				 		currentdatagain+="]";
				 	}

			}
	 }


 $scope.largeCapGain=eval(currentdatagain);
  $scope.largeCapLoss=eval(currentdataloss);

                   
                        
 	    Highcharts.chart('container', {
     	
     	legend: {
             itemStyle: {
                 color: 'white'
             },
 			itemHiddenStyle: {
                 color: '#204c6b'
             }
         },

         chart: {
         	backgroundColor: '#153A54',
 			plotBorderColor: '#3C7193',
 			plotBorderWidth: 2,
             type: 'bubble',
             plotBorderWidth: 1,
             zoomType: 'xy'
         },

         title: {
         	style:{color:'white'},
         	text: '<b>Gain/Loss per Security</b>'
         },

         xAxis: {
         	minorTickLength: 0,
             tickLength:0,
             gridLineWidth: 0,
             title: { style: { color: 'white'},
                         text: '<b>Investment Amount</b>'
             },
             labels: {style: { color: 'white'}},
             maxPadding: 0.2
         },

         yAxis: {
         	gridLineWidth: 0,
             startOnTick: false,
             endOnTick: false,
             title: {
                   style: { color: 'white'},
                 text: '<b>Market Value</b>' 
            },
            labels: {style: { color: 'white'}},
            maxPadding: 0.2
         },
         
         tooltip: {
             useHTML: true,
             headerFormat: '<table>',
             pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                 '<tr><th>Investment Amount:</th><td>{point.x:,.0f}</td></tr>' +
                 '<tr><th>Market Value:</th><td>{point.y:,.0f}</td></tr>' +
                 '<tr><th>Realized Gain:</th><td>{point.r_gain:,.0f}</td></tr>'+
				 '<tr><th>Unrealized Gain:</th><td>{point.unrealized_gain:,.0f}</td></tr>'
                ,
             footerFormat: '</table>',
             followPointer: false
         },
         
         plotOptions: {
             series: {
             	showCheckBox: true,
                 dataLabels: {
                     enabled: false,
                     format: '{point.name}'
                 },
                 
                 point: {
                    
                 }
             }
         },

         series: [{
             data: $scope.largeCapGain,
             name: 'Gain',
             marker: {
                 fillColor: {
                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                     stops: [
                         [0, '#09720a'],
                         [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                     ]
                 }
             }
         },{
   data: $scope.largeCapLoss,
             name: 'Loss',
             marker: {
                 fillColor: {
                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                     stops: [
                         [0, '#e02828'],
                         [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                     ]
                 }
             }
			 
		 
		 
		 
		 
		 }]
         
     });

 	//});


                         }
                     }
                    
                }
        
            }
        },

        series: [{
			
            data: $scope.bubbleData,
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'blue'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
        }]

    });
		 $('#button').click(function () {
		        chart.series[0].select();
		    });
	    
		    
			//});
	

	 }

})();

