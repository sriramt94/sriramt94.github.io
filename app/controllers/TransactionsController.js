(function(){

  angular
    .module('app')
    .controller('TransactionsController', [
      '$timeout', '$q','$http','$scope','StoreService','sharedProperties','$cookies',
      TransactionsController
    ]);

 function TransactionsController($timeout, $q, $http,$scope,StoreService,sharedProperties,$cookies) {
	 $scope.baseName = $cookies.get("baseName");
 var baseNo;
 baseNo = StoreService.get_base();
 var url = StoreService.get_url();
 var vm = this;
 //transactions
 
 
  var bsnsdate = StoreService.get_bsnsDt();
 bsdate = new Date(bsnsdate);
bdate = bsdate.format("d-m-yyyy");
 $scope.select = function(code,seccode){
 	//alert(code);
 $scope.myOrderBy='ABC';
 $scope.reverse = true;
 $scope.orderByMe= function(x){
 
 $scope.reverse = ($scope.myOrderBy === x) ? !$scope.reverse : false;
 
 $scope.myOrderBy = x;
 
 
 };
 

 
    $scope.co=seccode;
	 $scope.name= code;
/*	 var data = {
		    secCode: seccode,
		        baseNo: baseNo,
				 sort: 'x',
				 bnsdate: bdate
		        
		    };*/
//	$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getTransactionDetails", data).success(function(dataou, status) {	
 	
	 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getTransactionDetails?baseNo='+baseNo+'&secCode='+seccode).success(function(dataou){
	
if( seccode=='REV_REPO_TRY' && baseNo=='1002026'){
		 var j=[{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-05-01 00:00:00.0","price":"1","units":"300000","investment_amt":"300000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo Maturity","trans_date":"2016-10-01 00:00:00.0","price":"1","units":"315000","investment_amt":"315000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-10-10 00:00:00.0","price":"1","units":"200000","investment_amt":"200000"}]
}
else if( seccode=='MFSEC1T24' && baseNo=='1002026'){
	 var j=[{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"Templeton Growth Fund","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"Templeton Growth Fund","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"Templeton Growth Fund","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"180000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"Templeton Growth Fund","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"}];
}
else if( seccode=='BONDSEC8' && baseNo=='1002026'){
	 var j=[{"security_name":"BONDSEC8","transaction_type":"Buy Market","trans_date":"2014-10-01 00:00:00.0","price":"109","units":"5000","investment_amt":"5450"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2014-11-05 00:00:00.0","price":"108","units":"4000","investment_amt":"4360"},{"security_name":"BONDSEC8","transaction_type":"Buy Branch","trans_date":"2015-02-13 00:00:00.0","price":"105","units":"1000","investment_amt":"1050"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2015-04-24 00:00:00.0","price":"105","units":"1000","investment_amt":"1090"},{"security_name":"BONDSEC8","transaction_type":"Sell Branch","trans_date":"2016-02-18 00:00:00.0","price":"105","units":"500","investment_amt":"525"},{"security_name":"BONDSEC8","transaction_type":"Buy Market","trans_date":"2016-02-19 00:00:00.0","price":"105","units":"960000","investment_amt":"1008000"},{"security_name":"BONDSEC8","transaction_type":"Sell Market","trans_date":"2016-10-15 00:00:00.0","price":"109","units":"600000","investment_amt":"630000"}]
}
else if( seccode=='EQUSEC5' && baseNo=='1002026'){
	var j=	[{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"25","units":"5000","investment_amt":"125000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"30","units":"4000","investment_amt":"100000"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"23","units":"1000","investment_amt":"23000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"27","units":"1000","investment_amt":"25000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"28","units":"500","investment_amt":"11500"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2016-02-19 00:00:00.0","price":"28","units":"36000","investment_amt":"1008000"}]
}
else if( seccode=='FUTSEC10' && baseNo=='1002026'){
	 var j=[{"security_name":"FUTSEC10","transaction_type":"Futures Buy","trans_date":"2015-10-01 00:00:00.0","price":"110","units":"6000","investment_amt":"660000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2015-11-05 00:00:00.0","price":"111","units":"4000","investment_amt":"440000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2016-02-13 00:00:00.0","price":"116","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Expiry Out","trans_date":"2016-04-23 00:00:00.0","price":"0","units":"1000","investment_amt":"110000"}]
}
else if( seccode=='MFSEC2' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-04-25 00:00:00.0","price":"15","units":"66000","investment_amt":"990000"}]
}
else if( seccode=='MFSEC3T24' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC3T24","transaction_type":"Subscription","trans_date":"2015-04-29 00:00:00.0","price":"8","units":"50000","investment_amt":"400000"}]
}
else if( seccode=='MFSEC2T24' && baseNo=='1002026'){
	var j=[{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2015-04-25 00:00:00.0","price":"15","units":"66000","investment_amt":"990000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"ICICI Blue Chip Fund","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"}]
}
else if( seccode=='MFSEC1' && baseNo=='1002026'){
	 var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"}]
}





//sudip
else if( seccode=='IPRU2674' && baseNo=='1002032'){
	 var j=[{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-09-10 00:00:00.0","price":"186","units":"300","investment_amt":"55800"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2014-11-03 00:00:00.0","price":"185","units":"4400","investment_amt":"814000"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"186","units":"1500","investment_amt":"279000"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2013-06-15 00:00:00.0","price":"186","units":"4600","investment_amt":"855600"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2013-11-15 00:00:00.0","price":"185","units":"1250","investment_amt":"232500"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2013-12-09 00:00:00.0","price":"195","units":"5600","investment_amt":"1092000"},{"security_name":"ICICI Prud MF","transaction_type":"Redemption","trans_date":"2014-03-09 00:00:00.0","price":"190","units":"840","investment_amt":"156240"},{"security_name":"ICICI Prud MF","transaction_type":"Subscription","trans_date":"2014-06-30 00:00:00.0","price":"185","units":"1400","investment_amt":"259000"}]
}
else if( seccode=='PRISMCEM' && baseNo=='1002032'){
	 var j=[{"security_name":"Prism Cement Limited","transaction_type":"Equity Sell","trans_date":"2014-10-12 00:00:00.0","price":"102","units":"280","investment_amt":"28560"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Buy","trans_date":"2013-08-23 00:00:00.0","price":"102","units":"6100","investment_amt":"622200"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Sell","trans_date":"2014-02-23 00:00:00.0","price":"101","units":"2340","investment_amt":"238680"},{"security_name":"Prism Cement Limited","transaction_type":"Equity Buy","trans_date":"2014-08-12 00:00:00.0","price":"103","units":"2900","investment_amt":"298700"}]
}
else if( seccode=='AGRODUTCH' && baseNo=='1002032'){
	 var j=[{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Sell","trans_date":"2014-09-30 00:00:00.0","price":"48","units":"470","investment_amt":"23500"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Buy","trans_date":"2013-07-11 00:00:00.0","price":"50","units":"5200","investment_amt":"260000"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Sell","trans_date":"2013-12-11 00:00:00.0","price":"55","units":"1150","investment_amt":"57500"},{"security_name":"Agro Dutch Industries Limited","transaction_type":"Equity Buy","trans_date":"2014-07-20 00:00:00.0","price":"47","units":"3100","investment_amt":"145700"}]
}
else if( seccode=='NTPCNCD' && baseNo=='1002032'){
	 var j=[{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-09-30 00:00:00.0","price":"95","units":"240000","investment_amt":"228000"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-11-01 00:00:00.0","price":"100","units":"90000","investment_amt":"90900"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-02-20 00:00:00.0","price":"100","units":"520000","investment_amt":"520000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-04-03 00:00:00.0","price":"101","units":"680000","investment_amt":"686800"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2013-05-20 00:00:00.0","price":"101","units":"80000","investment_amt":"80000"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2013-09-03 00:00:00.0","price":"103","units":"170000","investment_amt":"170000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2013-09-09 00:00:00.0","price":"100","units":"760000","investment_amt":"760000"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-02-12 00:00:00.0","price":"102","units":"580000","investment_amt":"591600"},{"security_name":"NTPC Limited ","transaction_type":"Buy Market","trans_date":"2014-04-20 00:00:00.0","price":"93","units":"340000","investment_amt":"316200"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-05-09 00:00:00.0","price":"104","units":"345000","investment_amt":"345750"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-06-20 00:00:00.0","price":"98","units":"31000","investment_amt":"31310"},{"security_name":"NTPC Limited ","transaction_type":"Sell Market","trans_date":"2014-07-12 00:00:00.0","price":"103","units":"123000","investment_amt":"124230"}]
}
else if( seccode=='IIFCLT3' && baseNo=='1002032'){
	 var j=[{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2014-08-12 00:00:00.0","price":"116","units":"63000","investment_amt":"68040"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2014-09-30 00:00:00.0","price":"108","units":"201000","investment_amt":"217080"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2013-03-15 00:00:00.0","price":"108","units":"860000","investment_amt":"928800"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2013-05-20 00:00:00.0","price":"100","units":"720000","investment_amt":"720000"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2013-07-15 00:00:00.0","price":"115","units":"56000","investment_amt":"60480"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Sell Branch","trans_date":"2013-10-20 00:00:00.0","price":"103","units":"190000","investment_amt":"205200"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2014-03-30 00:00:00.0","price":"105","units":"640000","investment_amt":"672000"},{"security_name":"India Infrastructure Finance Company Limited ","transaction_type":"Buy Branch","trans_date":"2014-05-12 00:00:00.0","price":"110","units":"260000","investment_amt":"286000"}]
}
else if( seccode=='EQUSEC6' && baseNo=='1002032'){
	 var j=[{"security_name":"EQUSEC6","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"452","units":"5000","investment_amt":"2260000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"466","units":"4000","investment_amt":"1808000"},{"security_name":"EQUSEC6","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"467","units":"1000","investment_amt":"467000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"451","units":"1000","investment_amt":"452000"},{"security_name":"EQUSEC6","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"452","units":"500","investment_amt":"233500"}]
}
else if( seccode=='MFSEC1' && baseNo=='1002032'){
	 var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"}]
}


//swati

else if( seccode=='REV_REPO_TRY' && baseNo=='1002035'){
	 var j=[{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo","trans_date":"2016-05-01 00:00:00.0","price":"1","units":"300000","investment_amt":"300000"},{"security_name":"REV_REPO_TRY","transaction_type":"Reverse Repo Maturity","trans_date":"2016-10-01 00:00:00.0","price":"1","units":"315000","investment_amt":"315000"}]
}
else if( seccode=='MFSEC1T24' && baseNo=='1002035'){
var j=[{"security_name":"Templeton Growth Fund","transaction_type":"Subscription","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"180000"}]
}

else if( seccode=='EQUSEC5' && baseNo=='1002035'){
var j=	[{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2014-10-01 00:00:00.0","price":"25","units":"5000","investment_amt":"125000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2014-11-05 00:00:00.0","price":"30","units":"4000","investment_amt":"100000"},{"security_name":"EQUSEC5","transaction_type":"Equity Buy","trans_date":"2015-02-13 00:00:00.0","price":"23","units":"1000","investment_amt":"23000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2015-04-24 00:00:00.0","price":"27","units":"1000","investment_amt":"25000"},{"security_name":"EQUSEC5","transaction_type":"Equity Sell","trans_date":"2016-02-18 00:00:00.0","price":"28","units":"500","investment_amt":"11500"}]
}
else if( seccode=='FUTSEC10' && baseNo=='1002035'){
var j=[{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2015-11-05 00:00:00.0","price":"111","units":"4000","investment_amt":"440000"},{"security_name":"FUTSEC10","transaction_type":"Futures Sell","trans_date":"2016-02-13 00:00:00.0","price":"116","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Expiry Out","trans_date":"2016-04-23 00:00:00.0","price":"0","units":"1000","investment_amt":"110000"},{"security_name":"FUTSEC10","transaction_type":"Futures Buy","trans_date":"2015-10-01 00:00:00.0","price":"110","units":"6000","investment_amt":"660000"}]
}
else if( seccode=='MFSEC2' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"12","units":"5000","investment_amt":"60000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"13","units":"4000","investment_amt":"48000"},{"security_name":"MFSEC2","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"12","units":"1000","investment_amt":"12000"},{"security_name":"MFSEC2","transaction_type":"Redemption","trans_date":"2015-04-24 00:00:00.0","price":"15","units":"1000","investment_amt":"12000"}]
}
else if( seccode=='MFSEC3T24' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC3T24","transaction_type":"Subscription","trans_date":"2015-04-29 00:00:00.0","price":"8","units":"50000","investment_amt":"400000"}]
}

else if( seccode=='MFSEC1' && baseNo=='1002035'){
var j=[{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2014-10-01 00:00:00.0","price":"50","units":"5000","investment_amt":"250000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2014-11-05 00:00:00.0","price":"46","units":"4000","investment_amt":"200000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-02-13 00:00:00.0","price":"46","units":"1000","investment_amt":"46000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-03-30 00:00:00.0","price":"46","units":"1500","investment_amt":"69000"},{"security_name":"MFSEC1","transaction_type":"Subscription","trans_date":"2015-10-16 00:00:00.0","price":"53","units":"1500","investment_amt":"79500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferOut","trans_date":"2016-05-03 00:00:00.0","price":"45","units":"4000","investment_amt":"189000"},{"security_name":"MFSEC1","transaction_type":"Redemption","trans_date":"2016-06-02 00:00:00.0","price":"47","units":"3000","investment_amt":"151500"},{"security_name":"MFSEC1","transaction_type":"Funds TransferIn","trans_date":"2015-05-19 00:00:00.0","price":"48","units":"2000","investment_amt":"96000"}]
}











			var v=[];
			
			 for(index in j){
				var date= j[index].trans_date;
				var d = date.split(" ");
				 var valv={
						 
						 transaction_type: j[index].transaction_type,
						 trans_date: d[0],
						 price: Number(j[index].price),
						 units: Number(j[index].units),
						 investment_amt: Number(j[index].investment_amt)
						 
				 };
				 
				
			v.push(valv);
			$scope.selected=v;		 
		 
			 };
		
		    
		//   });	
	
	
 

 };
 
 
 
//year
/* $scope.sort = function(c){
 
 
	 var data = {
		        
			 secCode: $scope.co,
		        baseNo: baseNo,
				 sort: c,
				  bnsdate: bdate
		        
		    };
	$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getTransactionDetails", data).success(function(dataou, status) {	
 	
	 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getTransactionDetails?baseNo='+baseNo+'&secCode='+seccode).success(function(dataou){
	

		 var j=dataou;
			
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
		
		    
		   });	
	
	
 };*/
 
/* 
 var data1 = {
	        

	        baseNo: baseNo
	        
	    };*/
//$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getTransactionSummary", data1).success(function(dataob, status) {	
 
 
 
  // $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getTransactionSummary?baseNo='+ baseNo).success(function(dataob){
   
if(baseNo=='1002026'){
		 var k=[{"security_code":"MFSEC1T24","security_name":"Templeton Growth Fund","as_of_date":"2016-06-02 00:00:00.0"},{"security_code":"REV_REPO_TRY","security_name":"REV_REPO_TRY","as_of_date":"2016-10-10 00:00:00.0"},{"security_code":"BONDSEC8","security_name":"BONDSEC8","as_of_date":"2016-10-15 00:00:00.0"},{"security_code":"EQUSEC5","security_name":"EQUSEC5","as_of_date":"2016-02-19 00:00:00.0"},{"security_code":"FUTSEC10","security_name":"FUTSEC10","as_of_date":"2016-04-23 00:00:00.0"},{"security_code":"MFSEC2","security_name":"MFSEC2","as_of_date":"2015-04-25 00:00:00.0"},{"security_code":"MFSEC3T24","security_name":"MFSEC3T24","as_of_date":"2015-04-29 00:00:00.0"},{"security_code":"MFSEC2T24","security_name":"ICICI Blue Chip Fund","as_of_date":"2015-04-25 00:00:00.0"},{"security_code":"MFSEC1","security_name":"MFSEC1","as_of_date":"2016-06-02 00:00:00.0"}];
}	
else if(baseNo=='1002032'){
	 var k=[{"security_code":"IPRU2674","security_name":"ICICI Prud MF","as_of_date":"2014-11-05 00:00:00.0"},{"security_code":"PRISMCEM","security_name":"Prism Cement Limited","as_of_date":"2014-10-12 00:00:00.0"},{"security_code":"AGRODUTCH","security_name":"Agro Dutch Industries Limited","as_of_date":"2014-09-30 00:00:00.0"},{"security_code":"NTPCNCD","security_name":"NTPC Limited ","as_of_date":"2014-11-01 00:00:00.0"},{"security_code":"IIFCLT3","security_name":"India Infrastructure Finance Company Limited ","as_of_date":"2014-09-30 00:00:00.0"},{"security_code":"EQUSEC6","security_name":"EQUSEC6","as_of_date":"2016-02-18 00:00:00.0"},{"security_code":"MFSEC1","security_name":"MFSEC1","as_of_date":"2016-06-02 00:00:00.0"}]
 }
else if(baseNo=='1002035'){
	 var k=[{"security_code":"MFSEC1T24","security_name":"Templeton Growth Fund","as_of_date":"2016-05-03 00:00:00.0"},{"security_code":"REV_REPO_TRY","security_name":"REV_REPO_TRY","as_of_date":"2016-10-01 00:00:00.0"},{"security_code":"EQUSEC5","security_name":"EQUSEC5","as_of_date":"2016-02-18 00:00:00.0"},{"security_code":"FUTSEC10","security_name":"FUTSEC10","as_of_date":"2016-04-23 00:00:00.0"},{"security_code":"MFSEC2","security_name":"MFSEC2","as_of_date":"2015-04-24 00:00:00.0"},{"security_code":"MFSEC3T24","security_name":"MFSEC3T24","as_of_date":"2015-04-29 00:00:00.0"},{"security_code":"MFSEC1","security_name":"MFSEC1","as_of_date":"2016-06-02 00:00:00.0"}]
}
			var u=[];
			
			 for(index in k){
			 var date1 = k[index].as_of_date;
				 var d1 = date1.split(" ")
	                     var valu={
	                    		 security_code: k[index].security_code,
	                    		 security_name: k[index].security_name,
	                    		 as_of_date: d1[0]
	                    		 
				 };
				 
				
			u.push(valu);
			$scope.itemDetails=u;		 
		 
			 };
	   
	   
	   
   };
 }

)();