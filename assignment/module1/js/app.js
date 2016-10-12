(function () {
'use strict';

angular.module("LunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope", "$filter"];
function LunchCheckController($scope, $filter){

  $scope.lunch = "";
  $scope.LunchCheck = function () {
    var countItens = 0;
    var myLunch = $scope.lunch.split(",");

    for(var i = 0; i < myLunch.length; i++) {
      if(myLunch[i] !== "") {
        countItens += 1;
      }
    }
    if ($scope.lunch === "") {
      $scope.message = "Please enter data first";
      $scope.color = "red";
      $scope.borderColor = "borderRed";
    } else if (countItens <= 3) {
      $scope.message = "Enjoy!";
      $scope.color = "green";
      $scope.borderColor = "borderGreen";

    } else if (countItens > 3) {
      $scope.message = "Too much!";
    }
  };

}

})();
