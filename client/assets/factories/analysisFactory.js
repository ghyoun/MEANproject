app.factory('analysisFactory', function($http){
    
    var factory = {};



    factory.index = function(callback){
        $http.get('/genomes/').then(function(returned_data){         
        callback(returned_data)
      });
    };



    return factory;
});