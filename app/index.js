'use strict';

var a = angular.module('angularMaterialAdmin', [ 'ngAnimate', 'ngCookies',
		'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'mwl.calendar',
		'ui.bootstrap', 'nvd3', 'colorpicker.module', 'app' ])
a.value('sharedProperties', {});

// sharedProperties.url='http://10.10.7.25:8001';
function getBootstrapDeviceSize() {
	return $('#users-device-size').find('div:visible').first().attr('id');
}

a.controller('loginController', function($scope, $http, $rootScope, $cookies,
		$stateParams, $state, LoginService, sharedProperties, StoreService) {

	/*
	 * var salt; var enc; var url = StoreService.get_url(); $http .get( url +
	 * "/FABXRest/rest/IWealthChannelSecurityService/generateSalt")
	 * .success(function(dataObj) { salt = dataObj; StoreService.set_salt(salt);
	 * });
	 */

	$scope.clear = function() {
		$scope.rmid = "";
		$scope.password = "";
		$scope.error = "";

	}
	$scope.formSubmit = function() {

		sharedProperties.rmid = $scope.rmid;
		var password = $scope.password;
		StoreService.set_rmid(sharedProperties.rmid);
		// $cookies.put("rmid", sharedProperties.rmid);
		StoreService.set_password(password);
		/*
		 * encryptedJs(password, salt, 256); function encryptedJs(salt,
		 * password, bits) { try { enc = encryptJS(salt, password, bits);
		 * StoreService.set_encode(enc); //alert(enc); } catch (error) {
		 * alert(error); } }
		 */
		/*
		 * var data1 = {
		 * 
		 * userid : sharedProperties.rmid, salt : salt, password : enc }; $http
		 * .post( url +
		 * "/FABXRest/rest/IWealthChannelSecurityService/validateCredentials",
		 * data1) .success( function(dataObj1, status) {
		 * //$http.get('http://localhost:8080/RestService/rest/IWealthChannelSecurityService/validateCredentials?userid='+sharedProperties.rmid+'&salt='+salt+'&password='+enc).success(function(dataObj1){
		 * //alert(dataObj1.ticket); var ticket = dataObj1.ticket; var group =
		 * dataObj1.group; StoreService.set_ticket(ticket);
		 * StoreService.set_group(group);
		 * 
		 * if (dataObj1.value == "success") {
		 * 
		 * 
		 * 
		 * $state.transitionTo('home.profile');
		 *  } else if (dataObj1.value == "Change password") {
		 * 
		 * $state.transitionTo('reset'); } else {
		 * 
		 * $scope.error = dataObj1.value; }
		 * 
		 * });
		 */
		$state.transitionTo('home.profile');

	};

	$scope.reset = function(rmid, password) {

		/*
		 * var password = password; StoreService.set_password(password);
		 * encryptedJs(password, salt, 256); function encryptedJs(salt,
		 * password, bits) { try { enc = encryptJS(salt, password, bits);
		 * StoreService.set_encode(enc); //alert(enc); } catch (error) {
		 * alert(error); } } var da = { userid : rmid, salt : salt, password :
		 * enc }; $http .post( url +
		 * "/FABXRest/rest/IWealthChannelSecurityService/validateCredentials",
		 * da).success(function(d, status) { var tick = d.ticket;
		 * 
		 * StoreService.set_ticket(tick);
		 * 
		 * if (d.value == "success") { $state.transitionTo('reset');
		 *  } else {
		 * 
		 * $scope.error = d.value; } })();
		 */
		$state.transitionTo('reset');
	}

	var viewFullScreen = document.getElementById("view-fullscreen");
	if (viewFullScreen) {
		viewFullScreen.addEventListener("click", function() {
			var docElm = document.documentElement;
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			} else if (docElm.msRequestFullscreen) {
				docElm.msRequestFullscreen();
			} else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			} else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			}
		}, false);
	}

});

a.run(function($rootScope, $location, $state, LoginService) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams,
			fromState, fromParams) {
		console.log('Changed state to: ' + toState);
	});

	if (!LoginService.isAuthenticated()) {
		$state.transitionTo('login');
	}
});

a.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider,
		$mdIconProvider) {
	$stateProvider.state('login', {
		url : '/login',
		templateUrl : 'login.html',
		controller : 'LoginController'
	}).state('reset', {
		url : '/reset',
		templateUrl : 'reset.html'
	})

	.state('home', {
		url : '',
		templateUrl : 'app/views/main.html',
		controller : 'MainController',
		controllerAs : 'vm',
		abstract : true
	})

	.state('home.profile', {
		url : '/profile',
		templateUrl : 'app/views/profile.html',
		controller : 'listController',
		controllerAs : 'vm',
		data : {
			title : 'Profile'
		}
	})

	.state('home.calender', {
		url : '/calender',
		templateUrl : 'app/views/calender.html',
		controller : 'calenderController'

	}).state('home.personal', {
		url : '/personal',
		templateUrl : 'app/views/personal.html',
		controller : 'PersonalController',
		controllerAs : 'vm',
		data : {
			title : 'Personal Information'
		}
	})

	.state('home.dashboard', {
		url : '/dashboard',
		templateUrl : 'app/views/dashboard.html',
		controller : 'PortfolioController',
		controllerAs : 'vm',
		data : {
			title : 'Portfolio'
		}
	}).state('home.transactions', {
		url : '/transactions',
		templateUrl : 'app/views/transactions.html',
		data : {
			title : 'Transactions'
		}
	}).state('home.alerts', {
		url : '/alerts',
		templateUrl : 'app/views/alerts.html',
		data : {
			title : 'Alerts'
		}
	}).state('home.reports', {
		url : '/reports',
		templateUrl : 'reports.html',
		data : {
			title : 'Reports'
		}
	})

	.state('home.table', {
		url : '/table',

		templateUrl : 'app/views/table.html',
		data : {
			title : 'Table'
		}
	});

	$urlRouterProvider.otherwise('/login');

	$mdThemingProvider.theme('default').primaryPalette('grey', {
		'default' : '600'
	}).accentPalette('teal', {
		'default' : '500'
	}).warnPalette('defaultPrimary');

	$mdThemingProvider.theme('dark', 'default')
			.primaryPalette('defaultPrimary').dark();

	$mdThemingProvider.theme('grey', 'default').primaryPalette('grey');

	$mdThemingProvider.theme('custom', 'default').primaryPalette(
			'defaultPrimary', {
				'hue-1' : '50'
			});

	$mdThemingProvider.definePalette('defaultPrimary', {
		'50' : '#FFFFFF',
		'100' : 'rgb(255, 198, 197)',
		'200' : '#E75753',
		'300' : '#E75753',
		'400' : '#E75753',
		'500' : '#E75753',
		'600' : '#E75753',
		'700' : '#E75753',
		'800' : '#E75753',
		'900' : '#E75753',
		'A100' : '#E75753',
		'A200' : '#E75753',
		'A400' : '#E75753',
		'A700' : '#E75753'
	});

	$mdIconProvider.icon('user', 'assets/images/user.svg', 64);
});
