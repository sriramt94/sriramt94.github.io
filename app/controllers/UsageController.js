(function () {
    angular
        .module('app')
        .controller('UsageController', [
'countriesService','$cookies', '$http','$scope','StoreService','sharedProperties', UsageController
        ]);

    function UsageController(countriesService,$cookies,$http,$scope,StoreService,sharedProperties) {
        var vm = this;
		var baseNo;
 baseNo = StoreService.get_base();
 var url = StoreService.get_url();
 var rmid = StoreService.get_rmid();
 var brCd = StoreService.get_brcd();
 //var brCd=$cookies.get("brcd");
//asset
/* var data1 = {
	        

		 rmId: rmid,
	        baseNo: baseNo,
	        brCd: brCd,
	        portFolioNo: ''
	        
	    };
 
 
 */
//$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getClientCurrentVsModelDetail", data1).success(function(dataObj, status) {	
 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientCurrentVsModelDetail?rmId='+sharedProperties+'&baseNo='+baseNo+'&brCd=BR0001&portFolioNo=').success(function(dataObj){
 if(baseNo=='1002026'){
	 var dataObj=[{"astCode":"CASHEQ","astName":"Cash & Equivalent","recomPer":"5.00","assetROR":"5","currentVal":"200,000","prevVal":"200,000","percChange":"0.00","recomVal":"2,156,344","variance":"-978.17","CurrentPerc":0.46},{"astCode":"DEBT","astName":"Fixed Income","recomPer":"20.00","assetROR":"5","currentVal":"39,225,825","prevVal":"392,258","percChange":"9900.00","recomVal":"8,625,376","variance":"78.01","CurrentPerc":90.95},{"astCode":"DEQU","astName":"Stock","recomPer":"45.00","assetROR":"12","currentVal":"3,701,053","prevVal":"3,376,917","percChange":"9.60","recomVal":"19,407,095","variance":"-424.37","CurrentPerc":8.58},{"astCode":"DER","astName":"Derivatives","recomPer":"30.00","assetROR":"1","currentVal":"0","prevVal":"0","percChange":"0.00","recomVal":"12,938,063","variance":"-100.00","CurrentPerc":0}];
	    
	 }
	 else if(baseNo=='1002032'){
	 var dataObj=[{"astCode":"DEBT","astName":"Fixed Income","recomPer":"0.00","assetROR":"0","currentVal":"461,182,000","prevVal":"4,611,820","percChange":"9900.00","recomVal":"0","variance":"100.00","CurrentPerc":99.31},{"astCode":"DEQU","astName":"Stock","recomPer":"0.00","assetROR":"0","currentVal":"3,191,942","prevVal":"3,191,942","percChange":"0.00","recomVal":"0","variance":"100.00","CurrentPerc":0.69}];
	  	 } else if(baseNo=='1002035'){
	 var dataObj=[{"astCode":"DEQU","astName":"Stock","recomPer":"0.00","assetROR":"0","currentVal":"668,495","prevVal":"643,786","percChange":"3.84","recomVal":"0","variance":"100.00"}];
	  	 }
 
 
 var currentdata="[";
for(var i=0;i<dataObj.length;i++){
var d= dataObj[i].currentVal.split(",");
var e=0;
for(index in d){
	e+=d[index];

}

var c= parseInt(e);
if(i<dataObj.length-1){
currentdata+= "{key: '"+dataObj[i].astName+"', " +"y:"+c+"}, ";
}else{
currentdata+= "{key: '"+dataObj[i].astName+"', "+"y: "+c+"}]";
}}

 $scope.ramChartData=eval(currentdata);

 
 var count=0;
var modeldata="[";
for(var i=0;i<dataObj.length;i++){
var d= dataObj[i].recomVal.split(",");
var e=0;
for(index in d){
	e+=d[index];

}

var c= parseInt(e);

if(c==0){
	count++;

}else{

if(i<dataObj.length-1){
modeldata+= "{key: '"+dataObj[i].astName+"', " +"y:"+c+"}, ";
}else{
modeldata+= "{key: '"+dataObj[i].astName+"', "+"y: "+c+"}]";
}}
}

if(count==dataObj.length){

	$scope.x=1;
}
else{
$scope.storageChartData=eval(modeldata);
$scope.x=2; }
// });






 //product
 /*var data = {
	        

	        baseNo: baseNo,
	        brCd: brCd,
	        prodCode: '',
	        prodType: "Product"
	        
	    };*/
//$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getPortfolioProductDetails", data).success(function(dataObj, status) {	
 //$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getPortfolioProductDetails?baseNo='+baseNo+'&brCd=BR0001&prodCode=&prodType=Product').success(function(dataObj){
 



if(baseNo=='1002026'){
	 var dataObj=[{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"200000","current_value_br_ccy":"185000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"39225824.75","current_value_br_ccy":"378528.75325351380385","r_gain":"23920","unrealized_gain":"38847295.99674648619615"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2635600","current_value_br_ccy":"2403999.99999999934","r_gain":"-57000","unrealized_gain":"231600.00000000066"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"1065453.25","current_value_br_ccy":"1019999.999999999825","r_gain":"24500","unrealized_gain":"45453.250000000175"}];

	 }
	 else if(baseNo=='1002032'){
	 var dataObj=[{"prod_subprod_code":"FI","prod_subprod_scheme":"Fixed Income","investment_amt":"461182000","current_value_br_ccy":"4336511.3905283969764","r_gain":"19040","unrealized_gain":"456865590"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"951591.6662","current_value_br_ccy":"990107.1567494067832","r_gain":"4797.5","unrealized_gain":"-38209.8338"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"2240350","current_value_br_ccy":"2286692.9497508928426","r_gain":"-33390","unrealized_gain":"-56710"}];
} 
	 
	 
	 else if(baseNo=='1002035'){
		 
		 
		 
	 var dataObj=[{"prod_subprod_code":"REPO_INV","prod_subprod_scheme":"Repo Investment","investment_amt":"0","current_value_br_ccy":"-15000","r_gain":"15000","unrealized_gain":"15000"},{"prod_subprod_code":"REPO_BRW","prod_subprod_scheme":"Repo Borrowing","investment_amt":"0","current_value_br_ccy":"0","r_gain":"null","unrealized_gain":"0"},{"prod_subprod_code":"DER","prod_subprod_scheme":"Derivatives","investment_amt":"0","current_value_br_ccy":"0","r_gain":"-100000","unrealized_gain":"0"},{"prod_subprod_code":"Equity","prod_subprod_scheme":"Equity","investment_amt":"14595.25","current_value_br_ccy":"12000","r_gain":"24500","unrealized_gain":"3095.25"},{"prod_subprod_code":"FUNDS","prod_subprod_scheme":"Funds","investment_amt":"653900","current_value_br_ccy":"592000","r_gain":"-28500","unrealized_gain":"61900"}];}


 var currentdata1="[";
for(var i=0;i<dataObj.length;i++){


if(i<dataObj.length-1){
currentdata1+= "{key: '"+dataObj[i].prod_subprod_scheme+"', " +"y: "+dataObj[i].current_value_br_ccy+"}, ";
}else{
currentdata1+= "{key: '"+dataObj[i].prod_subprod_scheme+"', "+"y: "+dataObj[i].current_value_br_ccy+"}]";
}}

 $scope.ramChartData1=eval(currentdata1);



 //});
 //liabilities
/* var data2 = {
	        

	        baseNo: baseNo,
	        brCd: brCd,
	        astCode: '',
	        astType: "Product",
	        resultFor: "Product",
	        portFolioNo: ''
	     
	        
	    };*/
//$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getClientLiabilityDetails", data2).success(function(dataObj, status) {	
// $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getClientLiabilityDetails?baseNo=1002026&brCd=BR0001&astCode=&astType=Product&resultFor=Product&portFolioNo=').success(function(dataObj){
   
 
 if(baseNo=='1002026'){
	 var dataObj={"details":[{"currentVal":"39,000","astName":"Repo Borrowing","prevVal":"0","astCode":"REPO_BRW","percChange":"0.00","availedAmt":"39,000","approvedAmt":"39,000"}],"totalpercChange":"100","totalCurrVal":"39,000","totalPrevVal":"0"};
	 }
	 else if(baseNo=='1002032'){
	 var dataObj={"details":[{"astCode":"0"}]};
	 } else if(baseNo=='1002035'){
	 var dataObj={"details":[{"currentVal":"0","astName":"Repo Borrowing","prevVal":"0","astCode":"REPO_BRW","percChange":"0.00","availedAmt":"0","approvedAmt":"0"}],"totalpercChange":"100","totalCurrVal":"0","totalPrevVal":"0"};
	 }
 
 
 
 
 
 
 var count=0;
if(dataObj.details[0].astCode=='0'){
	
	var currentdata2="[]";
}
else{
 var currentdata2="[";
for(var i=0;i<dataObj.details.length;i++){
var d= dataObj.details[i].currentVal.split(",");
var c= parseInt(d[0]+d[1]);
                                        if(c==0){ count++;
                                        }else{
if(i<dataObj.details.length-1){
currentdata2+= "{key: '"+dataObj.details[i].astName+"', " +"y:"+c+"}, ";
}else{
currentdata2+= "{key: '"+dataObj.details[i].astName+"', "+"y: "+c+"}]";
}}
                }
if(count==dataObj.details.length){$scope.y=1;}
else{                                                                   
 $scope.ramChartData2=eval(currentdata2);
                                                                                                      $scope.y=2;}

}  
// });
 vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height:200,
                width:250,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
                showLabels: false,
                showLegend: false,
					  margin :{top: -10,left:-5,bottom:30}
                
            },
            legend: {
                position: 'right'
            }
        
        };
 vm.chartOptions3 = {
         chart: {
             type: 'pieChart',
             height:172,
             width:250,
             donut: true,
             x: function (d) { return d.key; },
             y: function (d) { return d.y; },
             valueFormat: (d3.format(".0f")),
             color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
             showLabels: false,
             showLegend: false,
					  margin :{top: -10,left:-5,bottom:30}
             
         },
         legend: {
             position: 'right'
         }
     
     };
		 vm.chartOptions1 = {
            chart: {
                type: 'pieChart',
                height:385,
                width:270,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
                showLabels: false,
                showLegend: true,
					 margin :{top: -10,left: 0,bottom: 30}
                
            },
            legend: {
                position: 'right'
            }
        
        };
		 vm.chartOptions4 = {
		            chart: {
		                type: 'pieChart',
		                height:315,
		                width:200,
		                donut: true,
		                x: function (d) { return d.key; },
		                y: function (d) { return d.y; },
		                valueFormat: (d3.format(".0f")),
		                color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
		                showLabels: false,
		                showLegend: false,
							 margin :{top: -10,left: 20,bottom:30}
		                
		            },
		            legend: {
		                position: 'right'
		            }
		        
		        };
		 vm.chartOptions5 = {
		            chart: {
		                type: 'pieChart',
		                height:345,
		                width:200,
		                donut: true,
		                x: function (d) { return d.key; },
		                y: function (d) { return d.y; },
		                valueFormat: (d3.format(".0f")),
		                color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
		                showLabels: false,
		                showLegend: false,
							 margin :{top: -10,left: 20,bottom:30}
		                
		            },
		            legend: {
		                position: 'right'
		            }
		        
		        };
		 vm.chartOptions7 = {
				    chart: {
		                type: 'pieChart',
		                height:315,
		                width:200,
		                donut: true,
		                x: function (d) { return d.key; },
		                y: function (d) { return d.y; },
		                valueFormat: (d3.format(".0f")),
		                color:['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
		                showLabels: false,
		                showLegend: false,
							 margin :{top: -10,left: 20,bottom:30}
		                
		            },
		            legend: {
		                position: 'right'
		            }
		        };
				 vm.chartOptions8 = {
				    chart: {
		                type: 'pieChart',
		                height:375,
		                width:200,
		                donut: true,
		                x: function (d) { return d.key; },
		                y: function (d) { return d.y; },
		                valueFormat: (d3.format(".0f")),
		                color: ['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
		                showLabels: false,
		                showLegend: false,
							 margin :{top: -10,left: 20,bottom:30}
		                
		            },
		            legend: {
		                position: 'right'
		            }
		        };
		 vm.chartOptions2 = {
		            chart: {
		                type: 'pieChart',
		                height:400,
		                width:280,
		                donut: true,
		                x: function (d) { return d.key; },
		                y: function (d) { return d.y; },
		                valueFormat: (d3.format(".0f")),
		                color:['rgb(9, 132, 29)', '#d3004a', 'rgb(140, 69, 15)','#0d40e8','#e80c0c','#00d2b6','#c1d200'],
		                showLabels: false,
		                showLegend: true,
							 margin :{top: -10,left: 2,bottom:30}
		                
		            },
		            legend: {
		                position: 'right',
		                fill: '#ffffff'
		                
		            }
		          
		            
		            
		           
		        };


       
    }
})();
