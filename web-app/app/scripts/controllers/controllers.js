'use strict';

var ctx = '/buy4me-angular-server/app';
var app = angular.module('guthub',
    ['guthub.directives', 'guthub.services']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'ListCtrl',
        resolve: {
          needItems: ["MultiItemLoader", function(MultiItemLoader) {
            return MultiItemLoader();
          }]
        },
        templateUrl:'views/list.html'
      }).when('/edit/:needItemId', {
        controller: 'EditCtrl',
        resolve: {
          needItem: ["NeedItemLoader", function(NeedItemLoader) {
            return NeedItemLoader();
          }]
        },
        templateUrl:'views/itemForm.html'
      }).when('/view/:needItemId', {
        controller: 'ViewCtrl',
        resolve: {
          needItem: ["NeedItemLoader", function(NeedItemLoader) {
            return NeedItemLoader();
          }]
        },
        templateUrl:'views/viewItem.html'
      }).when('/new', {
        controller: 'NewCtrl',
        templateUrl:'views/itemForm.html'
      }).otherwise({redirectTo:ctx+'/'});
}]);

app.controller('ListCtrl', ['$scope', 'needItems',
    function($scope, needItems) {
  $scope.needItems = needItems;
}]);

app.controller('ViewCtrl', ['$scope', '$location', 'needItem',
    function($scope, $location, needItem) {
  $scope.needItem = needItem;

  $scope.edit = function() {
    $location.path('/edit/' + needItem.id);
  };
}]);

app.controller('EditCtrl', ['$scope', '$location', 'needItem',
    function($scope, $location, needItem) {
  $scope.needItem = needItem;

  $scope.save = function() {
    $scope.needItem.$update(function(needItem) {
      $location.path('/view/' + needItem.id);
    });
  };

  $scope.remove = function() {
    delete $scope.needItem;
    $location.path('/');
  };
}]);

app.controller('NewCtrl', ['$scope', '$location', 'NeedItem',
    function($scope, $location, NeedItem) {
  $scope.needItem = new NeedItem({
  });

  $scope.save = function() {
    $scope.needItem.$save(function(needItem) {
      $location.path('/view/' + needItem.id);
    });
  };
}]);

