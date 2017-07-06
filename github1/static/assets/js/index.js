var app = angular.module('mapApp');

app.service('locatorSrv' , function() {

	var s = this;

})

app.controller('locatorCtrl', function($scope, locatorSrv) {

	$scope.locatorSrv = locatorSrv
	
});
