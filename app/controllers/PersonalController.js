(function(){

  angular
    .module('app')
    .controller('PersonalController', [
      '$cookies', '$q','$http','$scope','StoreService','sharedProperties',
      PersonalController
    ]);



 function PersonalController($cookies, $q, $http,$scope,StoreService,sharedProperties) {

var baseNo;
 baseNo = StoreService.get_base();
 var url = StoreService.get_url();
 var vm = this;
 var brCd = $cookies.get("brcd");
/* var data = {
	        
	        brCd: brCd,
	        baseNo: baseNo
	        
	    };
$http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getRMClientPersonalDetails", data).success(function(dataobj, status) {
 */
	 // $http.get(url+'/FABXRest/rest/IWealthPortalRestService/getRMClientPersonalDetails?brCd=BR0001&baseNo='+baseNo).success(function(dataobj){
    		 if(baseNo == '1002026'){
    			 var dataobj= {"name":"NITHIN KARNATI","hold_pattern":"SINGLE","hhld_no":"HH1000751","cif_no":"202122","anniversary":"12 March","risk_profile_desc":"Very High Risk","fna_expiry_date":"2017-11-13 00:00:00","date_of_birth":"07-Nov-1980","address_1":"Flat No : 94","address_2":"ADB APARTMENTS5","address_3":"Road No : 05","address_4":"BANJARAHILLS","city":"Hyderabad5","state":" ","country":"T?rkiye","zip":"5000156","Mobile":"9101101876","Residence Telephone":"9098901876","Last Review Date":"22-Nov-2016"};
    		 }else if (baseNo == '1002032'){
    			 var dataobj = {"name":"SUDIP RAI","hold_pattern":"SINGLE","hhld_no":"HH1000753","cif_no":"202124","anniversary":"12 March","risk_profile_desc":"Medium Risk","fna_expiry_date":"2017-11-13 00:00:00","date_of_birth":"08-Nov-1978","address_1":"Flat No : 96","address_2":"ADB APARTMENTS7","address_3":"Road No : 07","address_4":"BANJARAHILLS","city":"Hyderabad7","state":" ","country":"T?rkiye","zip":"5000158","Mobile":"9101101878","Residence Telephone":"9098901878","Last Review Date":""};
    		 }
    		 else if(baseNo == '1002035'){
    			 var dataobj ={"name":"SWATHI RAMAN","hold_pattern":"SINGLE","hhld_no":"HH1000754","cif_no":"202125","anniversary":"12 March","risk_profile_desc":"Very High Risk","fna_expiry_date":"2017-11-12 00:00:00","date_of_birth":"09-Nov-1976","address_1":"Flat No : 98","address_2":"ADB APARTMENTS9","address_3":"Road No : 09","address_4":"BANJARAHILLS","city":"Hyderabad9","state":" ","country":"T?rkiye","zip":"5000160","Mobile":"9101101879","Residence Telephone":"9098901879","Last Review Date":""};
    		 }
    		
    		vm.name=dataobj.name;
    		vm.mn=dataobj.Mobile;
    		vm.Address1=dataobj.address_1;
    		vm.Address2=dataobj.address_2;
    		vm.Address3=dataobj.address_3;
    		vm.Address4=dataobj.address_4;
    		vm.Address5=dataobj.city;
    		vm.Address6=dataobj.state;
    		 vm.zip=dataobj.zip;
    		vm.baseno= baseNo;
    		 vm.dob=dataobj.date_of_birth;
    		 vm.cifno=dataobj.cif_no;
    		 vm.anni=dataobj.anniversary;
    		 vm.hp=dataobj.hold_pattern;
    		 vm.r1=dataobj['Residence Telephone'];
    		 vm.riskp=dataobj.risk_profile_desc;
    		 vm.riske=dataobj.fna_expiry_date;
    		 vm.lcd=dataobj['Last Review Date'];
    //	 });
 







 }












})();