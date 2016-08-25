app.controller('analysisController', function(analysisFactory, $location, $routeParams, $scope, $rootScope, analysisService){

    $rootScope.currentPage = $location.path();
    var _this = this;
    var aminoacidchart = {
        TTT:'Phe',
        TTC:'Phe',
        TTA:'Leu',
        TTG:'Leu',
        TCT:'Ser',
        TCC:'Ser',
        TCA:'Ser',
        TCG:'Ser',
        TAT:'Tyr',
        TAC:'Tyr',
        TAA:'Stop',
        TAG:'Stop',
        TGT:'Cys',
        TGC:'Cys',
        TGA:'Stop',
        TGG:'Trp',
        CTT:'Leu',
        CTC:'Leu',
        CTA:'Leu',
        CTG:'Leu',
        CCT:'Pro',
        CCC:'Pro',
        CCA:'Pro',
        CCG:'Pro',
        CAT:'His',
        CAC:'His',
        CAA:'Gln',
        CAG:'Gln',
        CGT:'Arg',
        CGC:'Arg',
        CGA:'Arg',
        CGG:'Arg',
        ATT:'Ile',
        ATC:'Ile',
        ATA:'Ile',
        ATG:'Met',
        ACT:'Thr',
        ACC:'Thr',
        ACA:'Thr',
        ACG:'Thr',
        AAT:'Asn',
        AAC:'Asn',
        AAA:'Lys',
        AAG:'Lys',
        AGT:'Ser',
        AGC:'Ser',
        AGA:'Arg',
        AGG:'Arg',
        GTT:'Val',
        GTC:'Val',
        GTA:'Val',
        GTG:'Val',
        GCT:'Ala',
        GCC:'Ala',
        GCA:'Ala',
        GCG:'Ala',
        GAT:'Asp',
        GAC:'Asp',
        GAA:'Glu',
        GAG:'Glu',
        GGT:'Gly',
        GGC:'Gly',
        GGA:'Gly',
        GGG:'Gly'
    }



    var index = function(){
        analysisFactory.index(function(data){
            $scope.genomes = data.data;
        });
        analysisService.clear();
    };
    index();

    // $scope.cancel = function(){
    //     window.history.back();
    // };

    //example of how to use getAmino
    // var newAmino = getAmino('T', 'C', 'A');
    //newAmino.full_name -> 'Serine'
    //newAmino.short_name -> 'Ser'
    var enterAminoReference = function(firstLetter, secondLetter, thirdLetter) {
        var triplet = firstLetter + secondLetter + thirdLetter;
        analysisService.addReferenceAmino(aminoacidchart[triplet]);
    }

    var enterAminoCompare1 = function(firstLetter, secondLetter, thirdLetter) {
        var triplet = firstLetter + secondLetter + thirdLetter;
        analysisService.addCompare1Amino(aminoacidchart[triplet]);
    }

    var enterAminoCompare2 = function(firstLetter, secondLetter, thirdLetter) {
        var triplet = firstLetter + secondLetter + thirdLetter;
        analysisService.addCompare2Amino(aminoacidchart[triplet]);
    }

    var enterAminoCompare3 = function(firstLetter, secondLetter, thirdLetter) {
        var triplet = firstLetter + secondLetter + thirdLetter;
        analysisService.addCompare3Amino(aminoacidchart[triplet]);
    }

    var enterAminoCompare4 = function(firstLetter, secondLetter, thirdLetter) {
        var triplet = firstLetter + secondLetter + thirdLetter;
        analysisService.addCompare4Amino(aminoacidchart[triplet]);
    }

    var randomCodon = function(codons) {
        return codons[Math.floor(Math.random() * codons.length)];
    }

    var changeCodon = function(codon) {
        if (codon == 'W') {
            return randomCodon(['A', 'T']);
        } else if (codon == 'S') {
            return randomCodon(['C', 'G']);
        } else if (codon == 'M') {
            return randomCodon(['A', 'C']);
        } else if (codon == 'K') {
            return randomCodon(['G', 'T']);
        } else if (codon == 'R') {
            return randomCodon(['A', 'G']);
        } else if (codon == 'Y') {
            return randomCodon(['C', 'T']);
        } else if (codon == 'B') {
            return randomCodon(['C', 'T', 'G']);
        } else if (codon == 'D') {
            return randomCodon(['A', 'T', 'G']);
        } else if (codon == 'H') {
            return randomCodon(['A', 'C', 'T']);
        } else if (codon == 'V') {
            return randomCodon(['A', 'C', 'G']);
        } else if (codon == 'N') {
            return randomCodon(['A', 'T', 'C', 'G']);
        } else {
            return codon;
        }
    }

    $scope.addCodonsReference = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var firstPosition = changeCodon(sequence[i]);
            var secondPosition = changeCodon(sequence[i+1]);
            var thirdPosition = changeCodon(sequence[i+2]);

            var newCodon = firstPosition + secondPosition + thirdPosition;
            analysisService.addReferenceCodon(newCodon);
            enterAminoReference(firstPosition, secondPosition, thirdPosition);
        }
    }

    $scope.addCodonsCompare1 = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var firstPosition = changeCodon(sequence[i]);
            var secondPosition = changeCodon(sequence[i+1]);
            var thirdPosition = changeCodon(sequence[i+2]);

            var newCodon = firstPosition + secondPosition + thirdPosition;
            analysisService.addCompare1Codon(newCodon);
            enterAminoCompare1(firstPosition, secondPosition, thirdPosition);
        }
    }

    $scope.addCodonsCompare2 = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var firstPosition = changeCodon(sequence[i]);
            var secondPosition = changeCodon(sequence[i+1]);
            var thirdPosition = changeCodon(sequence[i+2]);

            var newCodon = firstPosition + secondPosition + thirdPosition;
            analysisService.addCompare2Codon(newCodon);
            enterAminoCompare2(firstPosition, secondPosition, thirdPosition);
        }
    }

    $scope.addCodonsCompare3 = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var firstPosition = changeCodon(sequence[i]);
            var secondPosition = changeCodon(sequence[i+1]);
            var thirdPosition = changeCodon(sequence[i+2]);

            var newCodon = firstPosition + secondPosition + thirdPosition;
            analysisService.addCompare3Codon(newCodon);
            enterAminoCompare3(firstPosition, secondPosition, thirdPosition);
        }
    }

    $scope.addCodonsCompare4 = function(sequence) {
        for (var i = 0; i < sequence.length; i += 3) {
            var firstPosition = changeCodon(sequence[i]);
            var secondPosition = changeCodon(sequence[i+1]);
            var thirdPosition = changeCodon(sequence[i+2]);

            var newCodon = firstPosition + secondPosition + thirdPosition;
            analysisService.addCompare4Codon(newCodon);
            enterAminoCompare4(firstPosition, secondPosition, thirdPosition);
        }
    }



    $scope.submit = function(){
        var genome_ref = {
            simple_name : $scope.genome_ref
        }
        analysisFactory.getGenome(genome_ref).then(function(data) {
            _this.reference = data.data.genome;
            $scope.addCodonsReference(_this.reference.sequence);
        });
        if ($scope.genome_comp1 != 'filled') {
            var genome_comp1 = {
                simple_name : $scope.genome_comp1
            }
            analysisFactory.getGenome(genome_comp1).then(function(data) {
                _this.compare1 = data.data.genome;
                $scope.addCodonsCompare1(_this.compare1.sequence);
            });
        }
        if ($scope.genome_comp2 != 'filled') {
            var genome_comp2 = {
                simple_name : $scope.genome_comp2
            }
            analysisFactory.getGenome(genome_comp2).then(function(data) {
                _this.compare2 = data.data.genome;
                $scope.addCodonsCompare2(_this.compare2.sequence);
            });
        }
        if ($scope.genome_comp3 != 'filled') {
            var genome_comp3 = {
                simple_name : $scope.genome_comp3
            }
            analysisFactory.getGenome(genome_comp3).then(function(data) {
                _this.compare3 = data.data.genome;
                $scope.addCodonsCompare3(_this.compare3.sequence);
            });
        }
        if ($scope.genome_comp4 != 'filled') {
            var genome_comp4 = {
                simple_name : $scope.genome_comp4
            }
            analysisFactory.getGenome(genome_comp4).then(function(data) {
                _this.compare4 = data.data.genome;
                $scope.addCodonsCompare4(_this.compare4.sequence);
            });
        }
        $location.path('/analysis/results');

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
