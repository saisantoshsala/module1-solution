(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope, $filter, $injector) {
  $scope.dishnames = "";
  $scope.buttonClick = function () {
      if($scope.dishnames){
          var dishes = $scope.dishnames.split(',');
             if (dishes.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
             }
            else if(dishes.length > 3) {
               $scope.message = "Too much!";
               $scope.color = "green";
             }
    }
    else{
        $scope.message = "Please enter data first";
        $scope.color = "red";
    }
  };
}
})();
