var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'assets/partials/index.html',
        controller: 'indexController'
    })
    .when('/compare', {
        templateUrl: 'assets/partials/compare.html',
        controller: 'compareController'
    })

    .otherwise({
        redirectTo: '/'
    });
});