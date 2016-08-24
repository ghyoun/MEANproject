app.factory('analysisFactory', function($http){

    var factory = {};



    factory.index = function(callback){
        $http.get('/genomes/').then(function(returned_data){
        callback(returned_data)
      });
    };

    factory.getAmino = function(codon, callback) {
        $http.post('/getAmino', codon).then(function(returned_data) {
            callback(returned_data)
        });
    }



    return factory;
});
