var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'assets/partials/index.html',
        controller: 'indexController'
    })
    .when('/genesis', {
        templateUrl: 'assets/partials/genesis.html',
        controller: 'compareController'
    })
    .when('/analysis', {
        templateUrl: 'assets/partials/genesis.html',
        controller: 'compareController'
    })
        .when('/synthesis', {
        templateUrl: 'assets/partials/synthesis.html',
        // controller: 'compareController'
    })
            .when('/phylogenetics', {
        templateUrl: 'assets/partials/phylogenetics.html',
        // controller: 'compareController'
    })
    .otherwise({
        redirectTo: '/'
    });
});