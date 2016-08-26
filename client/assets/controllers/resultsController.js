app.controller('resultsController', function(analysisFactory, $location, $routeParams, $scope, $rootScope, analysisService){
    $scope.load = function() {

        $scope.ref = {
            "codon": analysisService.getReferenceCodon(),
            "amino": analysisService.getReferenceAmino()
        };

        $scope.comp1 = {
            "codon": analysisService.getCompare1Codon(),
            "amino": analysisService.getCompare1Amino()
        };

        $scope.comp2 = {
            "codon": analysisService.getCompare2Codon(),
            "amino": analysisService.getCompare2Amino()
        };

        $scope.comp3 = {
            "codon": analysisService.getCompare3Codon(),
            "amino": analysisService.getCompare3Amino()
        };

        $scope.comp4 = {
            "codon": analysisService.getCompare4Codon(),
            "amino": analysisService.getCompare4Amino()
        };

        console.log(analysisService.getReferenceCodon());        
        console.log(analysisService.getReferenceAmino());
        console.log(analysisService.getCompare1Codon());
        console.log(analysisService.getCompare1Amino());
        console.log(analysisService.getCompare2Codon());
        console.log(analysisService.getCompare2Amino());
        console.log(analysisService.getCompare3Codon());
        console.log(analysisService.getCompare3Amino());
        console.log(analysisService.getCompare4Codon());
        console.log(analysisService.getCompare4Amino());
    }
    $scope.load();
});
