var mongoose = require('mongoose')
var genomes = require('./../controllers/genomes.js');
var genomes = require('./../controllers/aminoacids.js');

module.exports = function(app){
    app.get('/genomes', genomes.index);
}
