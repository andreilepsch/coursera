(function () {

angular.module("LunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope", "$filter"];
function LunchCheckController($scope, $filter){
  $scope.name = "teste";
}

})();
