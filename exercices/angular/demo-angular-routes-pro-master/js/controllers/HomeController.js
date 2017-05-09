angular.module('mainApp')
  .controller('HomeController', function ($scope, $rootScope, $location) {
    $rootScope.section = 'home'
    $scope.search = function (e) {
      e.preventDefault()
      $location.path('/search/' + $scope.query)
    }
  })
