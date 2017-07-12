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
			$state.go('home')
		}
		
	}	

	//TODO: Basically it should check the authentication using backed
	//otherwise, anyone can tamper the data in UI easily
	s.checkAuth = function() {
		if($rootScope.loggedInUser.length) {
			return $rootScope.loggedInUser;
		} else {
			$state.go('home')
		}

	}

});

app.controller('loginCtrl', function($scope, authSrv) {

	$scope.authSrv = authSrv
	$scope.showNonLogin = true

});

