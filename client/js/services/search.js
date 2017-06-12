angular.module('BetterDocSrvc', [])
    .factory('BetterDocService', function($resource) {
        return {
            search: $resource('/api/search')
            // detail: ???
        }
    })