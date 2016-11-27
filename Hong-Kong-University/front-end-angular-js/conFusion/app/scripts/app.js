'use strict';

angular.module('confusionApp', ["ngRoute"])

  .config(function($routeProvider) {
    $routeProvider

      //Route to contactus page
      .when('/contactus',{
        templateUrl: 'contactus.html',
        controller: 'ContactController'
      })

      //Route to menu page
      .when('/menu',{
        templateUrl: 'menu.html',
        controller: 'MenuController'
      })

      //Route to dish details page
      .when('/menu/:id',{
        templateUrl: 'dishdetail.html',
        controller: 'DishDetailController'
      })

      .otherwise('/contactus');



  });
