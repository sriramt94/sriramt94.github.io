//(function(){

 
	var app = angular.module('app');
    app.controller('calenderController', [
      '$timeout', '$uibModal', '$scope', '$http', '$cookies', 'StoreService','sharedProperties','moment',
      calenderController
    ]);

 
    
  function calenderController($timeout,$uibModal, $scope, $http, $cookies, moment, StoreService, alert, sharedProperties,calendarConfig) {
    var vm = this;
	    $scope.open = function (event) {
    	
         var modalInstance = $uibModal.open({
        	    templateUrl: 'app/views/partials/Popup.html',
        	  controller: function() {
                  var vm = this;
             
                  vm.event = event;
              	$scope.close = function () {
              		$uibModalInstance.dismiss('cancel');
                  };
                },
                controllerAs: 'vm'
        
        }); 
      
         
    }; 
	
//var url = StoreService.get_url();
//var url = 'http://10.10.7.25:8001';
var url=$cookies.get("url");
    var a;
    var b;
    var values;
	var details; 
	  vm.calendarView = 'month';
	    vm.viewDate = new Date();




var actions = [{
    label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
    onClick: function(args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class=\'glyphicon glyphicon-remove\'></i>',
    onClick: function(args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];
  vm.events = [
   
  ];

  vm.cellIsOpen = false;

  vm.addEvent = function() {
  	

  	
  	
    vm.events.push({
      title: 'New event',
      startsAt:  vm.viewDate,
      endsAt: vm.viewDate
     
     
    });
  	
  };
vm.viewEvent = function() {
	 
	 var baseNo=$cookies.get("baseNo");

var brcd=$cookies.get("brcd");

	 var rmid=$cookies.get("rmid");
	 /*var data1 = {
		        
		        brCd: brcd,
		        rmId:rmid,
		        baseNo:baseNo
		    };
	 $http.post(url+"/FABXRest/rest/IWealthDashboardRestService/getNotificationsDetails", data1).success(function(dataObj, status) {*/

  //	$http.get(url+'/FABXRest/rest/IWealthPortalRestService/getNotificationsDetails?brCd='+brcd+'&rmId='+rmid+'&baseNo='+baseNo).success(function(dataObj){
  	
	 
	 if(baseNo=='1002026'){
	var dataObj = [[{"meeting_id":"47754510","subject":"portfolio Review","location":"Chennai","starttime":"21-NOV-16 00:00:00","endtime":"21-NOV-16 01:00:00","reqinvities":"123421S","optinvities":" ","meettype":"CUST","meetmode":"INPOFFSHR","meetstatus":"Pending","contactdet":"Mob : 9101101876","remarks":" ","date":"21-Nov-2016"}],[]];
	 }
	 else if(baseNo=='1002032'){
	var dataObj = [[],[]];
	 }
	 else if(baseNo=='1002035'){
	 var dataObj = [[{"meeting_id":"47724500","subject":"TEST","location":"CHENNAI","starttime":"30-MAY-16 00:00:00","endtime":"30-MAY-16 01:00:00","reqinvities":"123421S","optinvities":" ","meettype":"CUST","meetmode":"Video Conference","meetstatus":"Pending","contactdet":"Mob : 9101101879","remarks":" ","date":"30-May-2016"}],[]];
	 }
	 
	 var m=dataObj[0];
  
  		for(index in m){
  	
    vm.events.push({
     title: m[index].subject,
      startsAt: m[index].starttime,
      endsAt: m[index].endtime,
      location: m[index].location,
      meetstatus: m[index].meetstatus,
      contactdet: m[index].contactdet
     
     
    });
  
  		}
 /* 	});*/
  };
  
  vm.eventClicked = function(event) {
     $scope.open(event);
  };

  vm.eventEdited = function(event) {
    alert.show('Edited', event);
  };

  vm.eventDeleted = function(event) {
    alert.show('Deleted', event);
  };

  vm.eventTimesChanged = function(event) {
    alert.show('Dropped or resized', event);
  };

  vm.toggle = function($event, field, event) {
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  };

  vm.timespanClicked = function(date, cell) {

    if (vm.calendarView === 'month') {
      if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
        vm.cellIsOpen = false;
      } else {
        vm.cellIsOpen = true;
        vm.viewDate = date;
      }
    } else if (vm.calendarView === 'year') {
      if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
        vm.cellIsOpen = false;
      } else {
        vm.cellIsOpen = true;
        vm.viewDate = date;
      }
    }

  };
 
    
  }
	

     app.controller('PopupCont', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {
      
  	
  	$scope.close = function () {
  		$uibModalInstance.dismiss('cancel');
      };
  }]); 
 
  
  
  
//})();
