app.controller('resultsController', function(analysisFactory, $location, $routeParams, $scope, $rootScope, analysisService){
    $scope.load = function() {
        console.log(analysisService.getReferenceCodon());
        console.log(analysisService.getReferenceAmino());
        console.log(analysisService.getCompare1Codon());
        console.log(analysisService.getCompare1Amino());
        console.log(analysisService.getCompare1Color());
        console.log(analysisService.getCompare2Codon());
        console.log(analysisService.getCompare2Amino());
        console.log(analysisService.getCompare2Color());
        console.log(analysisService.getCompare3Codon());
        console.log(analysisService.getCompare3Amino());
        console.log(analysisService.getCompare3Color());
        console.log(analysisService.getCompare4Codon());
        console.log(analysisService.getCompare4Amino());
        console.log(analysisService.getCompare4Color());
    }
    $scope.load();
});
