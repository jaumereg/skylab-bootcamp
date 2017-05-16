angular.module('mainApp')
  .controller('DetailsController', function ($scope, $rootScope, $routeParams) {
    $rootScope.section = 'details'
    var result = $routeParams.result
    $scope.result = result
  })
