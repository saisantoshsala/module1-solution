(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope, $filter, $injector) {

  $scope.buttonClick = function () {
  var dishes = $scope.dishnames.split(',');
  if(dishes.length > 3) {
    $scope.message = "Too Much!";
    $scope.color = "red";
  }
  else if (dishes.length <= 3) {
    $scope.message = "Enjoy!";
    $scope.color = "green";
  }

  };
}
})();
