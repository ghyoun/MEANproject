app.controller('analysisController', function(analysisFactory, $location, $routeParams, $scope, $rootScope){

    $rootScope.currentPage = $location.path();

    // $scope.id = $routeParams.id;

    var index = function(){
        analysisFactory.index(function(data){
            $scope.genomes = data.data;
        });
    };
    index();

    // $scope.cancel = function(){
    //     window.history.back();
    // };

    $scope.submit = function(){
        $location.path('/analysis/results');
    };



});