var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/partials/index.html',
        // controller: 'indexController'
    })
    // .when('/dashboard', {
    //     templateUrl: 'static/partials/dashboard.html',
    //     controller: 'dashboardController'
    // })
    .otherwise({
        redirectTo: '/'
    });
});