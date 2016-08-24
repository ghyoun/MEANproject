app.controller('analysisController', function(analysisFactory, $location, $routeParams, $scope, $rootScope){

    $rootScope.currentPage = $location.path();
    var _this = this;
    // _this.reference;
    _this.test = "HELLLO";
    // _this.compare1;

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
        if ($scope.genome_ref != 'Reference' && $scope.genome_comp1 != '1st') {
            _this.reference = "Pressed Submit"
            console.log(_this.reference)
            $location.path('/analysis/results');
            var genome_ref = {
                simple_name : $scope.genome_ref
            }
            analysisFactory.getGenome(genome_ref).then(function(data) {
                // console.log(data.data.genome);
                _this.reference = data.data.genome;
                console.log(_this.reference);
            
            });
            var genome_comp1 = {
                simple_name : $scope.genome_comp1
            }
            analysisFactory.getGenome(genome_comp1, function(data) {
                // console.log(data.data.genome);
                _this.compare1 = data.data.genome;
            });

        }

    };

    console.log("Created")
    $scope.$on("$destroy", function handler() {
        console.log("Destroyed");
    });


});
