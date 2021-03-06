'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope','menuFactory', function($scope, menuFactory) {

            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.dishes = menuFactory.getDishes();

            $scope.select = function(setTab) {
                $scope.tab = setTab;

                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

        }])

        .controller('FeedbackController', ['$scope', function($scope) {

            $scope.sendFeedback = function() {

                console.log($scope.feedback);

                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope','$stateParams','menuFactory', function($scope,$stateParams,menuFactory) {

            $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
            $scope.comment = {author: "", rating: 5, comment: "", date: new Date().toISOString()};

        }])

        .controller('DishCommentController', ['$scope', function($scope) {

          $scope.comment = {rating:5, comment:"", author:"", date:""};
          $scope.submitComment = function () {
              $scope.comment.date = new Date().toISOString();
              $scope.comment.author = $scope.comment.author;
              $scope.comment.rating = $scope.comment.rating;
              $scope.comment.comment = $scope.comment.comment;

              console.log($scope.comment);

              $scope.dish.comments.push($scope.comment);
              $scope.comment = {rating:5, comment:"", author:"", date:""};
              $scope.commentForm.$setPristine();
              console.log($scope.comment);

          }
        }])

        // implement the IndexController and About Controller here

        .controller('IndexController',[ '$scope', 'menuFactory', 'corporateFactory',function ($scope, menuFactory, corporateFactory) {

              $scope.featured = menuFactory.getDish(0);
              $scope.promotion = menuFactory.getPromotion(0);
              $scope.specialist = corporateFactory.getLeader(3);

        }])

        .controller('AboutController',['$scope', 'corporateFactory', function ($scope, corporateFactory) {

              $scope.leaders = corporateFactory.getLeaders();

        }]);
