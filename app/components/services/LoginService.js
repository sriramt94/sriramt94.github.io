(function () {
    'use strict';

    angular.module('app')
        .factory('LoginService', function() {
            var sriram = 'admin';
            var pass = 'admin';
            var isAuthenticated = false;
            
            return {
              login : function(username, password) {
                isAuthenticated = username === sriram && password === pass;
                return isAuthenticated;
              },
              isAuthenticated : function() {
                return isAuthenticated;
              }
            };
            
          });

 
})();
