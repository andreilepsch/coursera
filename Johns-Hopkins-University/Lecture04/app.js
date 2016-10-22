(function () {
  'use strict';

  var x = "hello";
  angular.module("myFirstApp",[])
  .controller("myFirstController", function($scope){
      $scope.name = "Andrei Lepsch";
      $scope.sayHello = function(){
        return "Hello Angular JS";
      };
  });


})();
