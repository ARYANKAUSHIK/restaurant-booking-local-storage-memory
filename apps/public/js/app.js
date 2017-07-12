var app = angular.module('mapApp', ['ngRoute', 'ui.router']);

app.config(['$httpProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider' ,
    function($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    const _ = require('lodash')

    $stateProvider.states = function(states, obj) {
      _.forEach(states, function(s) {$stateProvider.state(s,_.clone(obj))})
      return $stateProvider;
    };

    $stateProvider
      
      .state('register', {
        url : "/register",

        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
      })
      .state('locator', {
        url : "/locator",
        resolve: {
          authSrv: 'authSrv',
          loggedInUser: function(authSrv) { return authSrv.checkAuth() }
        },
        templateUrl: 'views/locator.html',
        controller: 'locatorCtrl'
      })

      .state('booking', {
        url : "/booking",
        resolve: {
          authSrv: 'authSrv',
          loggedInUser: function(authSrv) { return authSrv.checkAuth() }
        },
        templateUrl: 'views/booking.html',
        controller: 'bookingCtrl'
      })
      
      .state('bookingMessage', {
        url : "/booking",
        resolve: {
          authSrv: 'authSrv',
          loggedInUser: function(authSrv) { return authSrv.checkAuth() }
        },
        templateUrl: 'views/booking-message.html',
        controller: 'bookingCtrl'
      })

      .state('home', {
        url : '/',
        templateUrl : "views/login.html",
        controller : 'loginCtrl'
      })

      $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        $state.go('home');
      });

      // Is cross domain required?
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = { "Access-Control-Allow-Origin": "*" };
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
}])

