(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      
      {
        name: 'Profiles',
        icon: 'contacts',
        sref: '.profile'
      },
      {
          name: 'Portfolio',
          icon: 'dashboard',
          sref: '.dashboard'
        },
  {
        name: 'Personal',
        icon: '',
        sref: '.personal'
      },
		  
	
		   {
        name: 'Calendar',
        icon: 'account_circle',
        sref: '.calendar'
      },
		  
		  
	  {
        name: 'Reports',
        icon: 'folder_shared',
        sref: '.reports'
      },
	   {
        name: 'Transactions',
        icon: 'attach_money',
        sref: '.transactions'
      }
	   ,
		  {
          name: 'Alerts',
          icon: 'warning',
          sref: '.alerts'
        }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
