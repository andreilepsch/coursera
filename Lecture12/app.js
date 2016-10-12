(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope','$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var myString = "Yaakov likes to eat healthy snacks at night!";
    return $filter("uppercase")(myString);
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
