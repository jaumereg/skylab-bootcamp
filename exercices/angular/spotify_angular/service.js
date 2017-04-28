angular.module('spotifinderApp')
    .factory('spotifinderService', function($http) {

        function _getArtistName(username) {
            var url = 'https://api.spotify.com/v1/search?type=artist&query=' + artistName
            return $http.get(url)
        }

        return {
            getArtistName: _getArtistName,
        }

    })
