var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'assets/partials/index.html',
        controller: 'indexController'
    })
    .when('/genesis', {
        templateUrl: 'assets/partials/analysis.html',
        controller: 'analysisController'
    })
    .when('/analysis', {
        templateUrl: 'assets/partials/analysis.html',
        controller: 'analysisController'
    })
    .when('/analysis/results', {
        templateUrl: 'assets/partials/analysis_results.html',
        controller: 'analysisController'
    })
        .when('/synthesis', {
        templateUrl: 'assets/partials/synthesis.html',
        // controller: 'analysisController'
    })
            .when('/phylogenetics', {
        templateUrl: 'assets/partials/phylogenetics.html',
        // controller: 'analysisController'
    })
    .otherwise({
        redirectTo: '/'
    });
});