angular.module('spotifinderApp')
    .controller('spotifinderController', function($scope) {
        $scope.getInfoSearch = function() {

            var artist = $scope.artists.items

            spotifinderService.getInfoProfile(artist)
                .then(function(response) {
                    console.log(response.data)
                    $scope.profile = response.data
                })

            // githubService.getRepos(userName)
            //     .then(function(response) {
            //         $scope.repos = response.data
            //     })

        }
        // $scope.searchArtist = function($scope) {

        // }

    })
