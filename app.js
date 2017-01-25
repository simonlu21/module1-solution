(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {

  $scope.message   = '';
  $scope.lunchMenu = '';

  $scope.checkLunch = function () {
    var caculatedMessage = calculateLunch($scope.lunchMenu)
    $scope.message       = caculatedMessage
  };

  function calculateLunch(string) {
    var lunchCount     = 0;
    var lunchMenuSplit = string.split(",")
    lunchCount         = lunchMenuSplit.length;
    if (lunchCount > 3)
      return "Too much!"
    else if (string.length == 0)
      return "Please enter data first"
    else
      return "Enjoy!"
  }

});

})();
