var app = angular.module('mapApp');

app.service('registerSrv', function($location, $state) {

	var s = this

	s.getusers = function() {
		s.users = JSON.parse(localStorage.getItem('users'))
	}
	
});

app.controller('registerCtrl', function($scope) {

	$scope.saved = localStorage.getItem('users');
	$scope.users = (localStorage.getItem('users')!==null) ? JSON.parse($scope.saved) : [ {userName: 'Aryan', email: 'aryan@gmail.com', password: 'Aryan'} ];
	localStorage.setItem('users', JSON.stringify($scope.users));

	$scope.addUsers = function() {
		$scope.users.push({
			userName: $scope.name,
			email : $scope.email,
			password: $scope.password
		});
		$scope.userName = ''; //clear the input after adding
		$scope.password = '';
		localStorage.setItem('users', JSON.stringify($scope.users));
	};

});

	