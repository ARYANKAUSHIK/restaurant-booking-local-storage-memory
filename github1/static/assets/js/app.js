var app = angular.module('mapApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider' ,
  function($stateProvider, $urlRouterProvider) {

    const _ = require('lodash')

   $stateProvider.states = function(states, obj) {
      _.forEach(states, function(s) {$stateProvider.state(s,_.clone(obj))})
       return $stateProvider;
   };

  $stateProvider
  .state('login', {
    url : "/",
    templateUrl: 'assets/pages/index.ejs',
    controller: 'loginCtrl'
  })
  .state('register', {
    url : "/register",
    templateUrl: 'views/register.ejs',
    controller: 'registerCtrl'
  })
  .state('locator', {
    url : "/locator",
    templateUrl: 'assets/pages/locator.ejs',
    controller: 'locatorCtrl'
  })

}])
