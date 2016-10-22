(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Andrei";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers", $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  };

  $scope.$watch(function () {
    console.log("Digest loop Fired");
  });

  // $scope.$watch('onceCounter', function(newValue, oldValue){
  //   console.log("onceCounter oldValue: ", oldValue);
  //   console.log("onceCounter newValue: ", newValue);
  // });
  //
  // $scope.$watch('counter', function(newValue, oldValue){
  //   console.log("Counter oldValue: ", oldValue);
  //   console.log("Counter newValue: ", newValue);
  // });

}

})();
