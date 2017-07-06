var app = angular.module('mapApp');

app.service('authSrv', function($rootScope, $location, $state, registerSrv) {

	var s = this
	
	s.loginUser = function(userName, password) {
		if(!userName || !password) {
			return
		}

		registerSrv.getusers();
		$rootScope.loggedInUser = registerSrv.users.filter(function(u) { return u.userName == userName && u.password == password} )

		if ($rootScope.loggedInUser.length) {
			//If valid, then open map page
			$state.go('locator');
		} else {
			//If inValid, stay on the same page
			$state.go('login')
		}
		
	}	

});

app.controller('loginCtrl', function($scope, authSrv) {

	$scope.authSrv = authSrv

});

