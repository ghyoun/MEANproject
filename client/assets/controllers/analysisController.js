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

    //example of how to use getAmino
    // var newAmino = getAmino('T', 'C', 'A');
    //newAmino.full_name -> 'Serine'
    //newAmino.short_name -> 'Ser'
    var getAmino = function(firstLetter, secondLetter, thirdLetter) {
        var codon = {
            first: firstLetter,
            second: secondLetter,
            third: thirdLetter
        }
        analysisFactory.getAmino(codon, function(data) {
            return data.data.aminoacid;
        })
    }


    $scope.submit = function(){
        $location.path('/analysis/results');
    };



});
