app.controller('compareController', function(compareFactory, $location, $routeParams, $scope){

    $scope.id = $routeParams.id;

    var index = function(){
        compareFactory.index(function(data){
            $scope.genomes = data.data;
            console.log(data)
        });

    };
    index();

    // $scope.cancel = function(){
    //     window.history.back();
    // };



});