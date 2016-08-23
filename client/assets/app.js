(function(){
    'use strict'

    angular
        .module('app', ['ngRoute'])
        .config(config)
    function config($routeProvider){
        $routeProvider

        .when('/', {
            templateUrl: 'assets/partials/index.html'
        })
        .when('/compare', {
            templateUrl: 'assets/partials/compare.html'
        })
        .otherwise({
            redirectTo: '/'
        })      
    }
})()