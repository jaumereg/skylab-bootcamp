angular.module('mainApp')
  .controller('ResultsController', function ($scope, $rootScope, $routeParams) {
    $rootScope.section = 'results'
    var itemSearch = $routeParams.item
    $scope.item = itemSearch
  })
