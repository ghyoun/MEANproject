app.controller('resultsController', function(analysisFactory, $location, $routeParams, $scope, $rootScope, analysisService){
    $scope.load = function() {
        console.log(analysisService.getReferenceCodon);
    }
    load();
});
