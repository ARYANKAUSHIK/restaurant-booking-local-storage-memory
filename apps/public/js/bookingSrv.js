var app = angular.module('mapApp');

app.service('bookingSrv', function(locatorSrv, $state) {

  var s = this;
  s.bookingDetails = []

  s.saveBookingDetails = function(name, email, time, noOfPpl, phone) {
      s.bookingDetails.hotelName = locatorSrv.hotelName
      s.bookingDetails.uName = name;
      s.bookingDetails.email = email;
      s.bookingDetails.phone = phone;
      s.bookingDetails.time = time;
      s.bookingDetails.noOfPpl = noOfPpl;

      $state.go('bookingMessage')
    }

})

app.controller('bookingCtrl', function($scope, locatorSrv, $state, bookingSrv) {
    $scope.locatorSrv = locatorSrv;
    $scope.bookingSrv = bookingSrv;
});

