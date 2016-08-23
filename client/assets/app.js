var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'assets/partials/compare.html',
        controller: 'compareController'
    })
    .when('/index', {
        templateUrl: 'assets/partials/index.html',
        // controller: 'dashboardController'
    })

    .otherwise({
        redirectTo: '/'
    });
});