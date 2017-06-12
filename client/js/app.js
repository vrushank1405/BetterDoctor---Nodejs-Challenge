angular
  .module('app', ['ngRoute', 'ngResource', 'BetterDocCtrl', 'BetterDocSrvc'])
  .filter('trustHTML', function ($sce) {
      return (text) => {
        return $sce.trustAsHtml(text)
      }
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('')
  }])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'BetterDocController'
      })
      .otherwise({
        redirectTo: '/'
      })

  }])
  
  