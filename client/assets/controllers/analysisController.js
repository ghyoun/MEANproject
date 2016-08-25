app.controller('analysisController', function(analysisFactory, $location, $routeParams, $scope, $rootScope, analysisService){

    $rootScope.currentPage = $location.path();
    var _this = this;
    _this.reference;
    _this.compare1;



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
    var enterAmino = function(firstLetter, secondLetter, thirdLetter) {
        var codon = {
            first: firstLetter,
            second: secondLetter,
            third: thirdLetter
        }
        analysisFactory.getAmino(codon, function(data) {
            console.log(data.data.aminoacid.short_name);
            analysisService.addReferenceAmino(data.data.aminoacid.short_name);
        })
    }

    $scope.addCodons = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var newCodon = sequence[i] + sequence[i+1] + sequence[i+2];
            console.log(newCodon);
            analysisService.addReferenceCodon(newCodon);

            enterAmino(sequence[i], sequence[i+1], sequence[i+2]);
        }
    }



    $scope.submit = function(){
        if ($scope.genome_ref != 'Reference' && $scope.genome_comp1 != '1st') {
            var genome_ref = {
                simple_name : $scope.genome_ref
            }
            analysisFactory.getGenome(genome_ref).then(function(data) {
                _this.reference = data.data.genome;
                console.log(_this.reference);
                $scope.addCodons(_this.reference.sequence);
            });
            console.log(_this.reference);
            var genome_comp1 = {
                simple_name : $scope.genome_comp1
            }
            analysisFactory.getGenome(genome_comp1, function(data) {
                _this.compare1 = data.data.genome;
            });



            $location.path('/analysis/results');
        }

    };



    // $scope.compare = function(sequence1, sequence2) {
    //     if (sequence1 <= sequence2) {
    //         var short_length = sequence1.length;
    //     } else {
    //         var short_length = sequence2.length;
    //     }
    //
    //     for (var i = 0; i < short_length; i += 3) {
    //
    //     }
    //
    // }


});
