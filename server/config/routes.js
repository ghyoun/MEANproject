var mongoose = require('mongoose')
var genomes = require('./../controllers/genomes.js');

module.exports = function(app){
    app.get('/genomes', genomes.index);
}
