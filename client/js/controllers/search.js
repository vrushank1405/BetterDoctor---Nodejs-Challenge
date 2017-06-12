

angular
    .module('BetterDocCtrl', [])
    .controller('BetterDocController', function($scope, BetterDocService) {
		
		
        $scope.searchShow = () => {			
            BetterDocService.search.get({
                show: $scope.showname				
            }, (response) => {
                $scope.results = response.data
            })
        }

    })
	
	
	