(function () {
    'use strict';

  angular.module('app').factory('StoreService', function () {
        var storedObject;
		var br_cd;
		var bsnsDt;
		var astCode;
		var astType;
		var Subast;
		var portNo;
		var asname;
		var rmid;
		var basename;
		var details;
		var password;
		var ticket;
		var salt;
		var encode;
		var group;
	//	var url='http://115.110.172.66:9001';
	var url ='http://10.10.7.25:8001';
	//var url ='http://localhost:8080';
        return {
        	set_rmid: function (o) {
        
                this.rmid = o;
            },
            get_rmid: function () {
                return this.rmid;
            },
				set_group: function (o) {
        
                this.group = o;
            },
            get_group: function () {
                return this.group;
            },
    		set_encode: function (o) {
    	        
                this.encode = o;
            },
            get_encode: function () {
                return this.encode;
            },
				set_salt: function (o) {
        
                this.salt = o;
            },
            get_salt: function () {
                return this.salt;
            },
				set_ticket: function (o) {
        
                this.ticket = o;
            },
            get_ticket: function () {
                return this.ticket;
            },
				set_password: function (o) {
        
                this.password = o;
            },
            get_password: function () {
                return this.password;
            },
			set_details: function (o) {
        
                this.details = o;
            },
            get_details: function () {
                return this.details;
            },
            
            set_base: function (o) {
                this.storedObject = o;
            },
            get_base: function () {
                return this.storedObject;
            },
				 set_brcd: function (o1) {
				
                this.br_cd = o1;
            },
            get_brcd: function () {
				
                return this.br_cd;
            },
			 set_bsnsDt: function (o2) {
				
                this.bsnsDt = o2;
            },
            get_bsnsDt: function () {
				
                return this.bsnsDt;
            }
			,
			set_astCode: function (o3) {
                                
                this.astCode = o3;
            },
            get_astCode: function () {
				
                return this.astCode;
            },
				set_astType: function (o4) {
				
                this.astType = o4;
            },
            get_astType: function () {
				
                return this.astType;
            },
				
				set_Subast: function (o5) {
				
                this.Subast = o5;
            },
            get_Subast: function () {
				
                return this.Subast;
            },
				 get_url: function () {
				
                return url;
            },
				set_portNo: function (o6) {
				
                this.portNo = o6;
            },
            get_portNo: function () {
				
                return this.portNo;
            },
				
				set_asname: function (o7) {
				
                this.asname = o7;
            },
           get_asname: function () {
				
                return this.asname;
            },
		set_basename: function (o7) {
				
                this.basename = o7;
            },
           get_basename: function () {
				
                return this.basename;
            }
         
			
        };
});

 
})();
